import { useState, useEffect, useCallback } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import { IProduct } from '@/types';
import { useSearchParams } from 'next/navigation';

const useProducts = (initialPageSize = 12) => {
	const supabase = createClientComponentClient<Database>();

	const searchParams = useSearchParams();
	const initialPageNumber = parseInt(searchParams.get('page') || '', 10) || 1;

	// Product states
	const [products, setProducts] = useState<IProduct[]>([]);

	// Filter states
	const [pageSize, setPageSize] = useState<number>(initialPageSize);
	const [sortBy, setSortBy] = useState<string>('price');

	// Pagination states
	const [pageNum, setPageNum] = useState<number>(initialPageNumber);
	const [numOfPages, setNumOfPages] = useState<number | null>(null);

	// Loading state
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);

			// Use the current state of pageNum for fetching data
			const start = (pageNum - 1) * pageSize;
			const end = pageNum * pageSize - 1;

			const { data, error } = await supabase
				.from('products')
				.select('*')
				.order('created_at', { ascending: false })
				.range(start, end);

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
		fetchProducts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum, pageSize]);

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
	}, [pageSize, supabase]);

	return {
		products,
		pageNum,
		setPageNum,
		numOfPages,
		pageSize,
		setPageSize,
		isLoading,
		createQueryString,
	};
};

export default useProducts;
