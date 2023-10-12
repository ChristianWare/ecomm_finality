import Link from "next/link";

export default function TopNav() {
  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/'>🛒 NEXT _ ECOMM</Link>
      <div className='d-flex'>
        <Link href='/login' className='nav-link'>
          LOGIN
        </Link>
        <Link href='/register' className='nav-link'>
          REGISTER
        </Link>
      </div>
    </nav>
  );
}
