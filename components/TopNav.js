"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
  const { data, status } = useSession();
  // console.log({ data, status });

  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/'>🛒 NEXT _ ECOMM</Link>

      {status === "authenticated" ? (
        <>
          <Link href='/dashboard/user' className='nav-link pointer'>
            {data?.user?.name}
          </Link>
          <a
            className='nav-link pointer'
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            LOGOUT
          </a>
        </>
      ) : (
        <>
          <div className='d-flex'>
            <Link href='/login' className='nav-link pointer'>
              LOGIN
            </Link>
            <Link href='/register' className='nav-link pointer'>
              REGISTER
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
