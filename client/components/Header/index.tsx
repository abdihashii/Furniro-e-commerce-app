import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between py-8 border border-purple-500 pl-14 pr-24">
      <section>Logo</section>

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
