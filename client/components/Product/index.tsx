'use client';

import React from 'react';
import useCart from '@/hooks/useCart';
import SaleBadge from '../SaleBadge';
import Share from '../Icons/Share';
import Compare from '../Icons/Compare';
import Heart from '../Icons/Heart';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/types';

const Product = ({
	salesBadgeContent,
	product,
}: {
	salesBadgeContent?: string;
	product: IProduct;
}) => {
	const { cart, handleAddToCart } = useCart();

	return (
		<div className="group relative flex h-[446px] flex-col bg-[#F4F5F7]">
			{salesBadgeContent && (
				<SaleBadge
					content={salesBadgeContent}
					className="absolute right-5 top-5 z-10"
				/>
			)}

			{/* Overlay */}
			<div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-200 ease-linear group-hover:bg-opacity-50 group-hover:opacity-100">
				{/* Overlay content */}
				<div className="flex flex-col gap-6 text-center font-semibold">
					<Link
						href={`/shop/${product.name.toLowerCase().replace(/\s/g, '-')}`}
						className="border border-[#B88E2F] bg-white px-12 py-3 text-[#B88E2F] transition-colors duration-100 ease-linear hover:bg-[#B88E2F] hover:text-white"
					>
						View details
					</Link>

					<button
						className={`border border-[#B88E2F] px-12 py-3 transition-colors duration-100 ease-linear
              ${
								cart.some((p) => p.id === product.id)
									? 'cursor-not-allowed bg-[#B88E2F] text-white'
									: 'bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white'
							}
            `}
						onClick={() => handleAddToCart(product)}
						disabled={cart.some((p) => p.id === product.id)}
					>
						{cart.some((p) => p.id === product.id) ? (
							<span className="ml-2">✔ Added</span>
						) : (
							'Add to cart'
						)}
					</button>

					<div className="flex flex-row gap-5">
						{/* Other elements can go here */}
						<button className="flex flex-row items-center gap-1 text-white hover:underline">
							<Share /> Share
						</button>
						<button className="flex flex-row items-center gap-1 text-white hover:underline">
							<Compare /> Compare
						</button>
						<button className="flex flex-row items-center gap-1 text-white hover:underline">
							<Heart />
							Like
						</button>
					</div>
				</div>
			</div>

			{/* Image */}
			<div className="relative z-0 grow">
				<Image
					src={product.img_src ?? ''}
					alt={product.name}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>

			{/* Item data */}
			<div className="z-0 space-y-2 px-4 pb-8 pt-4">
				<h3 className="text-2xl font-semibold text-[#3A3A3A]">
					{product.name}
				</h3>
				<p className="line-clamp-1 font-medium text-[#898989]">
					{product.description}
				</p>
				<p className="text-xl font-semibold text-[#3A3A3A]">{product.price}</p>
			</div>
		</div>
	);
};

export default Product;
