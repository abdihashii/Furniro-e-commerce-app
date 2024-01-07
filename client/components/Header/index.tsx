'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Heart from '../Icons/Heart';
import Search from '../Icons/Search';
import AccountAlert from '../Icons/AccountAlert';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4">
      <div className="lg:w-3/4 flex flex-row justify-between items-center mx-auto">
        <Link href="/" className="items-center flex flex-row gap-1">
          <Image src="/logo.png" alt="Furniro" width={50} height={32} />
          <p
            className="text-2xl font-bold"
            style={{
              fontFamily: montserrat.style.fontFamily,
            }}
          >
            Furniro
          </p>
        </Link>

        <nav>
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
                  pathname === '/shop'
                    ? 'text-[#B88E2F]'
                    : 'hover:text-[#B88E2F]'
                } font-medium`}
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/about'
                    ? 'text-[#B88E2F]'
                    : 'hover:text-[#B88E2F]'
                } font-medium`}
                href="/about"
              >
                About
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

        <section className="flex flex-row gap-11">
          <AccountAlert
            stroke={{
              color: 'black',
              width: 0.1,
            }}
            width={28}
            height={28}
          />

          <Search />

          <Heart
            stroke={{
              color: 'black',
              width: 1.2,
            }}
            width={28}
            height={28}
          />
          <Image
            src="/ant-design_shopping-cart-outlined.svg"
            alt="Cart"
            width={28}
            height={28}
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
