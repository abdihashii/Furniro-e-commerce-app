import Arrow from '@/components/Icons/Arrow';
import ProductDetails from '@/components/Product/ProductDetails';
import { createServerSupabaseClient } from '@/lib/SupabaseServerClient';
import Image from 'next/image';
import Link from 'next/link';

export default async function ShopItem({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const supabase = createServerSupabaseClient();

	const { data: product, error } = await supabase
		.from('products')
		.select('*')
		.eq('slug', params.slug)
		.single();

	if (error) {
		console.log(error);

		return <div>Error</div>;
	}

	return (
		<main>
			{/* Shopping Navigation section */}
			<section className="flex flex-row justify-between bg-[#F9F1E7] px-[50px] py-6 lg:px-[100px] 2xl:px-[400px]">
				<article className="flex flex-row items-center gap-6">
					<Link
						href="/"
						className="text-[#9F9F9F] hover:underline"
					>
						Home
					</Link>
					<Arrow />
					<Link
						href="/shop"
						className="text-[#9F9F9F] hover:underline"
					>
						Shop
					</Link>
					<Arrow />
					<p className="border-l-2 border-l-[#9F9F9F] pl-6">{product.name}</p>
				</article>
			</section>

			{/* Product section */}
			<ProductDetails product={product} />
		</main>
	);
}
