'use client';

import { IProduct } from '@/types';
import { Database } from '@/types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useCallback, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Product from '.';
import Filter from '../Icons/Filter';
import ListLayout1 from '../Icons/ListLayout1';
import ListLayout2 from '../Icons/ListLayout2';

const ProductList = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const supabase = createClientComponentClient<Database>();

	// Product states
	const [products, setProducts] = React.useState<IProduct[]>([]);

	// Pagination states
	const [pageNum, setPageNum] = React.useState<number>(1); // Current page number
	const [numOfPages, setNumOfPages] = React.useState<number | null>(null); // Number of pages in the pagination

	// Filter states
	const [pageSize, setPageSize] = React.useState<number>(12); // Number of products per page
	const [sortBy, setSortBy] = React.useState<string>('price');

	// Loading state
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const fetchProducts = async (pageNum: number, pageSize: number) => {
		try {
			setIsLoading(true);

			// Reset products and number of pages state to initial values
			setProducts([]);
			setNumOfPages(null);

			const { data, error } = await supabase
				.from('products')
				.select('*')
				.order('created_at', { ascending: false })
				.range((pageNum - 1) * pageSize, pageNum * pageSize - 1);

			if (error) {
				throw error;
			}

			setProducts(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	// Synchronize page number state with URL 'page' parameter
	useEffect(() => {
		// Get page number from URL
		const newPageNum = parseInt(searchParams.get('page') || '', 10) || 1;

		// Update page number state if page number from URL is valid
		if (!isNaN(newPageNum) && newPageNum !== pageNum) {
			setPageNum(newPageNum);
		}
	}, [searchParams, pageNum]);

	// Fetch products whenever the page number or page size changes. Necessary to ensure state stays in sync with URL
	useEffect(() => {
		fetchProducts(pageNum, pageSize);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum]);

	// Calculate number of pages needed for pagination ensuring that it recalculates the number of pages when these dependencies change
	useEffect(() => {
		const fetchNumOfPages = async () => {
			try {
				const { count } = await supabase
					.from('products')
					.select('*', { count: 'exact' });

				if (count === null) throw new Error('Count is null');

				setNumOfPages(Math.ceil(count / pageSize));
			} catch (error) {
				console.log(error);
			}
		};

		fetchNumOfPages();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageSize, products.length]); // Added products.length as a dependency

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
								fetchProducts(pageNum, Number(e.target.value));
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
					{pageNum > 1 && (
						<button
							className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white"
							// onClick={handlePreviousClick}
						>
							Previous
						</button>
					)}

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

					{numOfPages && numOfPages >= 3 && pageNum < numOfPages && (
						<button
							className="gap-9 rounded-xl bg-[#F9F1E7] px-6 py-4 hover:bg-[#B88E2F] hover:text-white"
							// onClick={handleNextClick}
						>
							Next
						</button>
					)}
				</article>
			</section>
		</>
	);
};

export default ProductList;