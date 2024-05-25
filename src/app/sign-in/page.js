
import Layout from '@/components/Layout';
import SignInForm from '@/components/SignInForm';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
  <Layout>
      <h1>Sign In</h1>
      <SignInForm />
      </Layout>
  );
}