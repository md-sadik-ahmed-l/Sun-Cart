"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch, IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handlSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-b-white/30 px-2 sticky top-0 z-50 bg-white/20 backdrop-blur-lg shadow-sm"
    >
      <div className="navbar container mx-auto py-2 md:py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 min-h-0 h-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <MdOutlineWbSunny className="text-3xl md:text-4xl text-orange-400"/>
            </motion.div>
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-sun-dark ml-1">SunCart</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="relative group p-0 hover:bg-transparent">
                  <span className="font-medium text-sun-dark group-hover:text-sun-yellow transition-colors duration-300">
                    {link.name}
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sun-yellow"
                    whileHover={{ width: "100%" }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                 
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sun-yellow group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1 sm:gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-white/50 rounded-full transition-colors hidden sm:block"
          >
            <IoSearch className="text-xl md:text-2xl text-sun-dark" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-white/50 rounded-full transition-colors relative"
          >
            <IoCartOutline className="text-xl md:text-2xl text-sun-dark" />
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-1 bg-sun-yellow text-[8px] md:text-[10px] text-sun-dark font-bold w-3 h-3 md:w-4 md:h-4 flex items-center justify-center rounded-full"
            >
              0
            </motion.span>
          </motion.button>

          {!user ? (
            <div className="flex items-center gap-1 md:gap-2">
              <Link href={"/signin"}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button variant="bordered" size="sm" className="rounded-md border-sun-dark text-sun-dark font-semibold px-2 md:px-6 min-w-0">
                    <span className="hidden xs:inline">Login</span>
                    <IoPersonOutline className="xs:hidden text-lg" />
                  </Button>
                </motion.div>
              </Link>
              <Link href={"/signup"}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button size="sm" className="rounded-md bg-sun-yellow text-sun-dark font-bold px-3 md:px-6 shadow-md hover:bg-sun-yellow-hover min-w-0">
                    Register
                  </Button>
                </motion.div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2 md:gap-3">
              <Link href={"/profile"}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avatar className="w-8 h-8 md:w-10 md:h-10 border-2 border-sun-yellow p-0.5">
                    <Avatar.Image
                      src={user?.image}
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                    />
                    <Avatar.Fallback className="bg-sun-yellow text-sun-dark font-bold text-xs md:text-sm">
                      {user?.name?.[0]}
                    </Avatar.Fallback>
                  </Avatar>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button onClick={handlSignOut} variant="flat" size="sm" className="bg-red-500 text-white font-semibold hidden sm:flex">
                  Sign Out
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
