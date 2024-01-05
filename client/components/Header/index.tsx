import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="w-full py-4 border border-purple-500">
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
              <Link className="font-medium" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="font-medium" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-medium" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <section className="flex flex-row gap-11">
          <Image
            src="/mdi_account-alert-outline.svg"
            alt="Account"
            width={28}
            height={28}
          />
          <Image
            src="/akar-icons_search.svg"
            alt="Search"
            width={28}
            height={28}
          />
          <Image
            src="/akar-icons_heart.svg"
            alt="Wishlist"
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
