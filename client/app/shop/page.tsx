import Arrow from '@/components/Icons/Arrow';
import Check from '@/components/Icons/Check';
import Filter from '@/components/Icons/Filter';
import ListLayout1 from '@/components/Icons/ListLayout1';
import ListLayout2 from '@/components/Icons/ListLayout2';
import Shipping from '@/components/Icons/Shipping';
import Support from '@/components/Icons/Support';
import Trophy from '@/components/Icons/Trophy';
import MainHeroSection from '@/components/MainHeroSection';
import Product from '@/components/Product';
import { Database } from '@/types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function ShopPage() {
	const supabase = createClientComponentClient<Database>();

	const { data: products, error } = await supabase
		.from('products')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		console.log(error);

		return <div>Error</div>;
	}

	return (
		<main>
			{/* Hero section */}
			<MainHeroSection
				title="Shop"
				path="Shop"
			/>

			{/* Filter section */}
			<section className="flex flex-row justify-between bg-[#F9F1E7] px-[200px] py-6">
				<article className="flex flex-row items-center gap-6">
					<div className="flex flex-row items-center gap-3">
						<Filter /> <p className="text-xl">Filter</p>
					</div>

					<ListLayout1 />

					<ListLayout2 />
				</article>

				<article className="flex flex-row gap-6">
					<div className="flex flex-row items-center gap-4 text-xl">
						<p>Show</p>

						<select className="appearance-none px-4 py-3 text-[#9F9F9F]">
							<option>16</option>
							<option>32</option>
							<option>48</option>
						</select>
					</div>

					<div className="flex flex-row items-center gap-4 text-xl">
						<p>Sort by</p>

						<select className="appearance-none px-4 py-3 text-[#9F9F9F]">
							<option>Price</option>
							<option>Rating</option>
							<option>Popularity</option>
						</select>
					</div>
				</article>
			</section>

			{/* Products list section */}
			<section className="flex flex-col items-center gap-16 px-[200px] pb-20 pt-16">
				<article className="grid w-full gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{products.map((product, index) => {
						const cleanSrc = product.img_src?.replace(/^"|"$/g, '');

						return (
							<Product
								key={index}
								productImg={{
									src: cleanSrc ?? '',
									alt: product.name,
								}}
								productName={product.name}
								productPrice={`$${product.price}`}
								productDescription={product.description ?? ''}
							/>
						);
					})}
				</article>

				<article className="flex flex-row gap-9">
					<button className="gap-9 rounded-xl bg-[#B88E2F] px-6 py-4 text-white">
						1
					</button>

					<button className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white">
						2
					</button>

					<button className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white">
						3
					</button>

					<button className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white">
						Next
					</button>
				</article>
			</section>

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
