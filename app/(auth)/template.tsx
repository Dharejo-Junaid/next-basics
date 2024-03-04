"use client";

import Link from "next/link";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
// import "./style.css";

// Not being used in here;
const metadata: Metadata = {
  title: "Auth System",
};

interface Props {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/register", text: "Register" },
  { href: "/login", text: "Login" },
  { href: "/forget-password", text: "Forget Password" },
];

const AuthTemplate = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((nl) => {
        const isActive: boolean = pathname === nl.href;

        return (
          <Link
            key={nl.text}
            href={nl.href}
            className={
              isActive ? "font-bold text-green-600 mr-4" : "text-blue-500 mr-4"
            }
          >
            {nl.text}
          </Link>
        );
      })}
      <br />
      <input type="text" name="name" id="name" className="m-5 p-2"/>
      {children}
    </div>
  );
};

export default AuthTemplate;
