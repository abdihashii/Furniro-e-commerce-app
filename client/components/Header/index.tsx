import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center py-4 border border-purple-500 pl-14 pr-24">
      <section className="items-center flex flex-row gap-1">
        <Image src="/logo.png" alt="Furniro" width={50} height={32} />
        <p
          className="text-2xl font-bold"
          style={{
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          Furniro
        </p>
      </section>

      <nav>
        <ul className="flex flex-row gap-16">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <section>Cart</section>
    </header>
  );
};

export default Header;
