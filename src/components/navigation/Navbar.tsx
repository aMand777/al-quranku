import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-accent z-50 hidden md:flex">
      <div className="flex-1">
        <Link href="/" className="text-xl bold cursor-default">Al-Quranku</Link>
      </div>
      <div className="gap-5 mx-5">
        <Link className="text-base hover:text-success" href="/">Home</Link>
        <Link className="text-base hover:text-success" href="#">Bookmarks</Link>
        <Link className="text-base hover:text-success" href="#">Jadwal Sholat</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-56" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
