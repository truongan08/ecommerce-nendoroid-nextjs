import Link from "next/link";

const GuestNav = () => {
  return (
    <>
      <nav className="contents">
        <ul className="xl:w-48 flex items-center justify-end gap-2">
          <li className="relative">
            <Link href="/signup">Signup</Link>
          </li>
          <li className="relative">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default GuestNav;
