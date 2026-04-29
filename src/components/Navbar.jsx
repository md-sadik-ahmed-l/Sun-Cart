"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );
  return (
    <div className="border-b px-2 sticky top-0 z-50 bg-white bg-base-100 shadow-sm">
      <div className="navbar container  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex">
            <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <a className="btn btn-ghost text-3xl">SunCart</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="flex items-center text-[16px]  sm:text-xl gap-4">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
