import Arrow from '@/components/Icons/Arrow';
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
			<section className="w-full bg-[#F9F1E7] py-10">
				<article className="flex flex-row items-center gap-6 px-[200px]">
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
			<section className="w-full py-10">
				<article className="flex flex-col items-center px-[200px]">
					<Image
						src={product.img_src ?? ''}
						alt={product.name}
						height={500}
						width={500}
					/>
					<h1 className="text-4xl font-bold">{product.name}</h1>
					<p className="text-[#9F9F9F]">{product.description}</p>
					<p className="text-2xl font-bold">${product.price}</p>
					<button className="mt-4 rounded-lg bg-[#FCA310] px-8 py-2 text-white">
						Add to cart
					</button>
				</article>
			</section>
		</main>
	);
}
