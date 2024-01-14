import Link from 'next/link';

import Product from '../Product';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';

const OurProductsSection = async () => {
	const supabase = createClientComponentClient<Database>();

	const { data: products, error } = await supabase
		.from('products')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(4);

	if (error) {
		console.log(error);

		return <div>Error loading products</div>;
	}

	return (
		<section className="w-full space-y-8 px-20 py-14 lg:px-[200px]">
			<h2 className="text-center text-[40px] font-bold">Our Products</h2>

			<article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{products?.map((product) => {
					const cleanSrc = product.img_src?.replace(/^"|"$/g, '');

					return (
						<Product
							key={product.id}
							productName={product.name}
							productDescription={product.description ?? ''}
							productPrice={`$${product.price}`}
							productImg={{ src: cleanSrc ?? '', alt: product.name }}
						/>
					);
				})}
			</article>

			{/* Show more button */}
			<article className="flex justify-center">
				<Link
					href="/shop"
					className="border border-[#B88E2F] px-20 py-3 font-semibold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
				>
					Show More
				</Link>
			</article>
		</section>
	);
};

export default OurProductsSection;
