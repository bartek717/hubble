alter table public.users
add column if not exists signup_method text;

update public.users as u
set signup_method = coalesce(
  u.signup_method,
  a.raw_user_meta_data->>'signup_method',
  a.raw_app_meta_data->>'provider',
  'email'
)
from auth.users as a
where u.id = a.id;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, signup_method)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'signup_method',
      new.raw_app_meta_data->>'provider',
      'email'
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace function public.get_signup_method(input_email text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  result text;
begin
  select u.signup_method
  into result
  from public.users as u
  where lower(u.email) = lower(input_email)
  limit 1;

  return result;
end;
$$;

grant execute on function public.get_signup_method(text) to anon, authenticated;
