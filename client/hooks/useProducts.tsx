import { useState, useEffect, useCallback } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import { IProduct } from '@/types';
import { useSearchParams } from 'next/navigation';

const useProducts = (initialPageSize = 12) => {
	const supabase = createClientComponentClient<Database>();

	const searchParams = useSearchParams();
	const initialPageNumber = parseInt(searchParams.get('page') || '', 10) || 1;
	const initialSortBy = searchParams.get('sort') || 'newest';

	// Product states
	const [products, setProducts] = useState<IProduct[]>([]);

	// Filter states
	const [pageSize, setPageSize] = useState<number>(initialPageSize);
	const [sortBy, setSortBy] = useState<string>(initialSortBy);

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

			let query = supabase.from('products').select('*').range(start, end);

			switch (sortBy) {
				case 'newest':
					query = query.order('created_at', { ascending: false });
					break;
				case 'price-asc':
					query = query.order('price', { ascending: true });
					break;
				case 'price-desc':
					query = query.order('price', { ascending: false });
					break;
				case 'popularity':
					query = query.order('popularity', { ascending: false });
					break;
				case 'name-asc':
					query = query.order('name', { ascending: true });
					break;
				case 'name-desc':
					query = query.order('name', { ascending: false });
					break;
				default:
					// fallback to the default sorting by creation date
					query = query.order('created_at', { ascending: false });
					break;
			}

			const { data, error } = await query;

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

	// Synchronize page number state with URL parameters
	useEffect(() => {
		// Get page number and sort by from URL
		const newPageNum = parseInt(searchParams.get('page') || '', 10) || 1;
		const newSortBy = searchParams.get('sort') || 'newest';

		// Update page number state if page number from URL is valid
		if (!isNaN(newPageNum) && newPageNum !== pageNum) {
			setPageNum(newPageNum);
		}

		// Update sort by state if sort by from URL is valid
		if (newSortBy !== sortBy) {
			setSortBy(newSortBy);
		}
	}, [searchParams, pageNum, sortBy]);

	// Fetch products whenever the page number or page size changes. Necessary to ensure state stays in sync with URL
	useEffect(() => {
		fetchProducts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum, pageSize, sortBy]);

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
		sortBy,
		setSortBy,
		isLoading,
		createQueryString,
	};
};

export default useProducts;
