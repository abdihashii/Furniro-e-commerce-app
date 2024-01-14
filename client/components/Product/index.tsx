import React from 'react';
import SaleBadge from '../SaleBadge';
import Share from '../Icons/Share';
import Compare from '../Icons/Compare';
import Heart from '../Icons/Heart';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({
	salesBadgeContent,
	productName,
	productPrice,
	productDescription,
	productImg,
}: {
	salesBadgeContent?: string;
	productName: string;
	productPrice: string;
	productDescription: string;
	productImg: {
		src: string;
		alt: string;
	};
}) => {
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
						href={`/shop/${productName.toLowerCase().replace(/\s/g, '-')}`}
						className="border border-[#B88E2F] bg-white px-12 py-3 text-[#B88E2F] transition-colors duration-100 ease-linear hover:bg-[#B88E2F] hover:text-white"
					>
						View details
					</Link>

					<button className="border border-[#B88E2F] bg-white px-12 py-3 text-[#B88E2F] transition-colors duration-100 ease-linear hover:bg-[#B88E2F] hover:text-white">
						Add to cart
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
					src={productImg.src}
					alt={productImg.alt}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>

			{/* Item data */}
			<div className="z-0 space-y-2 px-4 pb-8 pt-4">
				<h3 className="text-2xl font-semibold text-[#3A3A3A]">{productName}</h3>
				<p className="line-clamp-1 font-medium text-[#898989]">
					{productDescription}
				</p>
				<p className="text-xl font-semibold text-[#3A3A3A]">{productPrice}</p>
			</div>
		</div>
	);
};

export default Product;
