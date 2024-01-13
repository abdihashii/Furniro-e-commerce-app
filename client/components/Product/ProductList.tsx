'use client';

import React, { useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import useProducts from '@/hooks/useProducts';

import Product from '.';
import Filter from '../Icons/Filter';
import ListLayout1 from '../Icons/ListLayout1';
import ListLayout2 from '../Icons/ListLayout2';

const ProductList = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const {
		products,
		pageNum,
		setPageNum,
		pageSize,
		setPageSize,
		numOfPages,
		isLoading,
		createQueryString,
	} = useProducts();

	// Loading indicator
	const renderLoadingIndicator = () => {
		if (!isLoading) return null;

		return (
			<div className="flex h-full w-full flex-row items-center justify-center">
				<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
			</div>
		);
	};

	return (
		<>
			{/* Filter section */}
			<section className="flex flex-row justify-between bg-[#F9F1E7] py-6 lg:px-[100px] 2xl:px-[200px]">
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

						<select
							className="appearance-none px-4 py-3 text-[#9F9F9F]"
							onChange={(e) => {
								setPageSize(Number(e.target.value));
								// fetchProducts(pageNum, Number(e.target.value));
							}}
							value={pageSize}
						>
							<option>12</option>
							<option>24</option>
							<option>36</option>
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

			{/* Product section */}
			<section className="flex flex-col items-center gap-16 pb-20 pt-16 lg:px-[100px] 2xl:px-[200px]">
				{renderLoadingIndicator()}

				{/* Product grid */}
				<article className="grid w-full gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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

				{/* Pagination */}
				<article className="flex flex-row gap-9">
					{/* {pageNum > 1 && (
						<button
							className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white"
							// onClick={handlePreviousClick}
						>
							Previous
						</button>
					)} */}

					{numOfPages &&
						Array.from({ length: numOfPages }, (_, i) => (
							<button
								key={i}
								onClick={() => {
									// /{pathname}?{querystring}
									router.push(
										`/shop?${createQueryString('page', String(i + 1))}`,
									);
								}}
								className={`${
									pageNum === i + 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
								} gap-9 rounded-xl px-6 py-4 hover:bg-[#B88E2F] hover:text-white`}
							>
								{i + 1}
							</button>
						))}

					{/* {numOfPages && numOfPages >= 3 && pageNum < numOfPages && (
						<button
							className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white"
							// onClick={handleNextClick}
						>
							Next
						</button>
					)} */}
				</article>
			</section>
		</>
	);
};

export default ProductList;
