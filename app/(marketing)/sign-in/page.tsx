import Link from "next/link";
import Card from "../../../components/ui/card";
import EmailAuthForm from "../../../components/auth/email-auth-form";

export default function SignInPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Hubble</p>
        <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-muted">
          Use your email to receive a secure, password-free sign-in link.
        </p>
      </div>
      <Card className="flex max-w-md flex-col gap-4">
        <EmailAuthForm submitLabel="Email me a login link" />
        <p className="text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-semibold text-fg hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
