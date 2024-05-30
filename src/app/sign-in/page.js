
import Layout from '@/components/Layout';
import SignInForm from '@/components/SignInForm';
import Link from 'next/link';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
  <Layout>
      <h1>Sign In</h1>
      <SignInForm />
      <div className="py-3">
        Not yet registered?{' '}
        <Link href="/sign-up" className="text-gray-400 hover:underline">
          Sign Up
        </Link> instead
      </div>
      </Layout>
  );
}