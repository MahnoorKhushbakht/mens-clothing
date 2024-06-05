'use client';

import { signInAction } from '@/app/sign-in/actions';
import { useFormState } from '@/lib/hooks';

export default function SignInForm() {
  const [state, handleSubmit] = useFormState(signInAction);

  return (
    <form onSubmit={handleSubmit}
      className="flex flex-col gap-2  m-5
                 max-w-screen-sm mt-3 px-3 py-3 rounded">
      <div className="flex">
        <label htmlFor="emailField" className="shrink-0 w-32">
          Email
        </label>
        <input id="emailField" name="email" type="email"
          className="border px-2 py-1 text-black rounded w-full"
        />
      </div>
      <div className="flex">
        <label htmlFor="passwordField" className="shrink-0 w-32">
          Password
        </label>
        <input id="passwordField" name="password" type="password"
          className="border px-2  text-black py-1 rounded w-full"
        />
      </div>
      {Boolean(state.error) && (
        <p className="text-red-700">{state.error.message}</p>
      )}
      <button type="submit" disabled={state.loading}
        className="bg-gray-400 rounded px-2 py-1 self-center
                   text-gray-800 w-32 hover:bg-gray-200
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Submit
      </button>
    </form>
  );
}