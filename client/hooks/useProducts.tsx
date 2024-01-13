import { useState, useEffect, useCallback } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import { IProduct } from '@/types';
import { useSearchParams } from 'next/navigation';

const useProducts = () => {
	const supabase = createClientComponentClient<Database>();

	const searchParams = useSearchParams();
	const initialPageNumber = parseInt(searchParams.get('page') || '', 10) || 1;
	const initialPageSize = parseInt(searchParams.get('show') || '', 10) || 12;
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

	// Synchronize page number, page size, and sort by states with URL parameters
	useEffect(() => {
		// Get page number and sort by from URL
		const newPageNum = parseInt(searchParams.get('page') || '', 10) || 1;
		const newPageSize = parseInt(searchParams.get('show') || '', 10) || 12;
		const newSortBy = searchParams.get('sort') || 'newest';

		// Update page number state if page number from URL is valid
		if (!isNaN(newPageNum) && newPageNum !== pageNum) {
			setPageNum(newPageNum);
		}

		// Update page size state if page size from URL is valid
		if (!isNaN(newPageSize) && newPageSize !== pageSize) {
			setPageSize(newPageSize);
		}

		// Update sort by state if sort by from URL is valid
		if (newSortBy !== sortBy) {
			setSortBy(newSortBy);
		}
	}, [searchParams, pageNum, pageSize, sortBy]);

	// Fetch products whenever the page number or page size changes. Necessary to ensure state stays in sync with URL
	useEffect(() => {
		fetchProducts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum, pageSize, sortBy]);

	// Calculate number of pages needed for pagination ensuring that it recalculates the number of pages when these dependencies change
	useEffect(() => {
		const fetchNumOfPages = async () => {
			try {
				const { count, error } = await supabase
					.from('products')
					.select('*', { count: 'exact' });

				if (error) {
					throw error;
				}

				if (count !== null) {
					setNumOfPages(Math.ceil(count / pageSize));
				} else {
					// Handle the scenario where count is unexpectedly null
					setNumOfPages(0);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchNumOfPages();
	}, [pageSize, supabase]);

	// Loading indicator
	const renderLoadingIndicator = () => {
		if (!isLoading) return null;

		return (
			<div className="flex h-full w-full flex-row items-center justify-center">
				<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
			</div>
		);
	};

	return {
		products,
		pageNum,
		setPageNum,
		numOfPages,
		pageSize,
		setPageSize,
		sortBy,
		setSortBy,
		createQueryString,
		renderLoadingIndicator,
	};
};

export default useProducts;
