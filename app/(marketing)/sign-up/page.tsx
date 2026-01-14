import Link from "next/link";
import Card from "../../../components/ui/card";
import EmailAuthForm from "../../../components/auth/email-auth-form";
import GoogleAuthButton from "../../../components/auth/google-auth-button";
import PasswordAuthForm from "../../../components/auth/password-auth-form";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Hubble</p>
        <h1 className="text-3xl font-semibold tracking-tight">Create your account</h1>
        <p className="text-sm text-muted">
          Create an account with Google, a password, or a one-time login code.
        </p>
      </div>
      <Card className="flex w-full max-w-md flex-col gap-4 text-left">
        <GoogleAuthButton label="Continue with Google" />
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-border" />
          <span>or</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <PasswordAuthForm mode="sign-up" submitLabel="Create account with password" />
        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Send me a login code
          </p>
          <EmailAuthForm mode="sign-up" submitLabel="Email me a signup code" />
        </div>
        <p className="text-sm text-muted">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-fg hover:underline">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
