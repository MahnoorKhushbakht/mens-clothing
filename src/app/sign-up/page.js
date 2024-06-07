
import Layout from '@/components/Layout';
import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';

export const metadata = {
  title: 'Sign Up',
};

export default function SignInPage() {
  return (
  <Layout>
      <h1>Sign Up</h1>
      <div className='w-full flex justify-center align-center'>
      <SignUpForm/>
      </div>
      <div className="py-3">
        Registered?{' '}
        <Link href="/sign-in" className="text-gray-400 hover:underline">
          Sign In
        </Link> instead
      </div>
      </Layout>
  );
}