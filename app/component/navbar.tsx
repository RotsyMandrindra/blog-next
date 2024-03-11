import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">First project</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/blog/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blog/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blog/3">Blog 3</Link>
          </li>
          <li>
            <Link href="/blog/4">Blog 4</Link>
          </li>
          <li>
            <Link href="/blog/5">Blog 5</Link>
          </li>
          <li>
            <Link href="/blog/6">Blog 6</Link>
          </li>
          <li>
            <Link href="/blog/7">Blog 7</Link>
          </li>
          <li>
            <Link href="/blog/8">Blog 8</Link>
          </li>
          <li>
            <Link href="/blog/9">Blog 9</Link>
          </li>
          <li>
            <Link href="/blog/10">Blog 10</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
