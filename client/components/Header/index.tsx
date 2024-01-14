import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

import HeaderNav from './HeaderNav';
import AccountAlert from '../Icons/AccountAlert';
import Search from '../Icons/Search';
import Heart from '../Icons/Heart';
import Cart from '../Icons/Cart';

const montserrat = Montserrat({
	subsets: ['latin'],
});

const Header = () => {
	return (
		<header className="w-full py-4">
			<div className="mx-auto flex justify-between lg:w-3/4">
				<Link
					href="/"
					className="flex grow basis-0 items-center justify-start gap-1"
				>
					<Image
						src="/logo.png"
						alt="Furniro"
						width={50}
						height={32}
					/>
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

				<section className="flex grow basis-0 flex-row items-center justify-end gap-11">
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

					<Link href="/cart">
						<Cart />
					</Link>
				</section>
			</div>
		</header>
	);
};

export default Header;
