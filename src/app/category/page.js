import Link from 'next/link';

export default function Category() {
  return (
    <>
      <h1>Category</h1>
      <ul>
        <li>
          <Link href="/category/formal-wear">
            Formal Wear
          </Link>
        </li>
        <li>
        <Link href="/category/casual-wear">
            Casual Wear
          </Link>
        </li>
      </ul>
    </>
  );
}