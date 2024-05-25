'use server';
import { setSessionCookie } from '@/lib/auth';
import { redirect } from 'next/navigation';

const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_PUBLIC_API_JWT);

export async function signInAction(formData) {
  console.log('[signInAction]', formData);
  const email = formData.get('email');
  const password = formData.get('password');
  const user = authenticate(email, password);
  if (!user) {
    return { isError: true, message: 'Invalid credentials' };
  }
await setSessionCookie(user)
  redirect('/');
}

function authenticate(email, password) {
  if (email.endsWith('@example.com') && password === 'test') {
    return { email };
  }
}