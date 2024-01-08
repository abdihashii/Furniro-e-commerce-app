import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Heart from '../Icons/Heart';
import Search from '../Icons/Search';
import AccountAlert from '../Icons/AccountAlert';
import HeaderNav from './HeaderNav';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="w-full py-4">
      <div className="lg:w-3/4 mx-auto flex justify-between">
        <Link
          href="/"
          className="items-center flex gap-1 grow basis-0 justify-start"
        >
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

        <HeaderNav />

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
