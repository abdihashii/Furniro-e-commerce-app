import CartItems from '@/components/Cart/CartItems';
import MainHeroSection from '@/components/MainHeroSection';

export default function CartPage() {
	return (
		<main>
			{/* Hero section */}
			<MainHeroSection
				title="Cart"
				path="Cart"
			/>

			<CartItems />
		</main>
	);
}
