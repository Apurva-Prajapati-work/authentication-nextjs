"use client";

import { login } from "@/server/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// Example theme object (could be replaced with context/provider)
const theme = {
  input:
    "rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white transition",
  label: "mb-1 font-medium text-gray-700 dark:text-gray-200",
  error: "text-red-500 text-sm",
  button:
    "mt-2 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 disabled:bg-blue-300 transition",
  form: "flex max-w-[300px] flex-col gap-3 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md",
};

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction} className={theme.form}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={theme.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          className={theme.input}
          autoComplete="email"
        />
        {state?.errors?.email && (
          <p className={theme.error}>{state.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className={theme.label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className={theme.input}
          autoComplete="current-password"
        />
        {state?.errors?.password && (
          <p className={theme.error}>{state.errors.password}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className={theme.button}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}