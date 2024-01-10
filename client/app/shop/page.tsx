import Check from '@/components/Icons/Check';
import Shipping from '@/components/Icons/Shipping';
import Support from '@/components/Icons/Support';
import Trophy from '@/components/Icons/Trophy';
import MainHeroSection from '@/components/MainHeroSection';
import ProductList from '@/components/Product/ProductList';

export default async function ShopPage() {
	return (
		<main>
			{/* Hero section */}
			<MainHeroSection
				title="Shop"
				path="Shop"
			/>

			<ProductList />

			{/* Amenities section */}
			<section className="flex flex-row justify-between bg-[#FAF3EA] px-[200px] py-[100px]">
				<article className="flex flex-row gap-3">
					<Trophy />

					<div className="flex flex-col justify-between">
						<p className="text-2xl font-semibold">High Quality</p>
						<p>crafted from top materials</p>
					</div>
				</article>

				<article className="flex flex-row gap-3">
					<Check />

					<div className="flex flex-col justify-between">
						<p className="text-2xl font-semibold">Warranty Protection</p>
						<p>Over 2 years</p>
					</div>
				</article>

				<article className="flex flex-row gap-3">
					<Shipping />

					<div className="flex flex-col justify-between">
						<p className="text-2xl font-semibold">Free Shipping</p>
						<p>Orders over $150</p>
					</div>
				</article>

				<article className="flex flex-row gap-3">
					<Support />

					<div className="flex flex-col justify-between">
						<p className="text-2xl font-semibold">24/7 Support</p>
						<p>Dedicated support</p>
					</div>
				</article>
			</section>
		</main>
	);
}
