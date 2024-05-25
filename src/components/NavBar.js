import { getUserFromSession } from '@/lib/auth';
import NavLink from './NavLink';
import SignOutButton from './SignOutButton';

export default async function NavBar() {
  const user = await getUserFromSession();
  return (
    <nav>
      <ul className="flex gap-3 bg-gray-800 p-2 text-base">
        <li className="font-bold ">
          <NavLink href="/">
            Tailored Gents
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/category">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" prefetch={false}>
            Contact
          </NavLink>
        </li>
        {user ? (
          <li className='text-white'>
            {user.email}
            <SignOutButton/>
          </li>
        ) : (
        <li>
          <NavLink href="/sign-in">
            Sign in
          </NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}