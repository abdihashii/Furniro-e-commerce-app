'use client';

import React, { useEffect } from 'react';
import ListLayout1 from '../Icons/ListLayout1';
import ListLayout2 from '../Icons/ListLayout2';
import Filter from '../Icons/Filter';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import { IProduct } from '@/types';
import Product from '.';

const ProductList = () => {
	const supabase = createClientComponentClient<Database>();

	const [products, setProducts] = React.useState<IProduct[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data, error } = await supabase.from('products').select('*');

				if (error) {
					throw error;
				}

				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<>
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
				<article className="grid w-full gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
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
		</>
	);
};

export default ProductList;
