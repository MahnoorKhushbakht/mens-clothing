import { getUserFromSession } from '@/lib/auth';
import NavLink from './NavLink';
import SignOutButton from './SignOutButton';





export default async function NavBar() {
  const user = await getUserFromSession();

  return (
    <nav className=" shadow-xl p-4 bg-transparent">
      <div className="flex justify-between items-center">
        <ul className=" font-bold text-lg text-white">
          <li>
          <NavLink href="/" >
            <span className="hidden md:inline">TAILORED GENTS</span>
            <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-6 inline md:hidden size-8 hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
          </NavLink>
          </li>
        </ul>
        <ul className="flex gap-3 bg-transparent p-2 text-base">
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
              {/* {user.email} */}
              <SignOutButton />
            </li>
          ) : (
            <li>
              <NavLink href="/sign-in">
                Sign in
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
