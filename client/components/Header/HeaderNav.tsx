'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex grow basis-0 justify-center items-center">
      <ul className="flex flex-row gap-16">
        <li>
          <Link
            className={`${
              pathname === '/' ? 'text-[#B88E2F]' : 'hover:text-[#B88E2F]'
            } font-medium`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/shop' ? 'text-[#B88E2F]' : 'hover:text-[#B88E2F]'
            } font-medium`}
            href="/shop"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/blog' ? 'text-[#B88E2F]' : 'hover:text-[#B88E2F]'
            } font-medium`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === '/contact'
                ? 'text-[#B88E2F]'
                : 'hover:text-[#B88E2F]'
            } font-medium`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
