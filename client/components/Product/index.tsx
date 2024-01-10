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
    <div className="h-[446px] bg-[#F4F5F7] flex flex-col group relative">
      {salesBadgeContent && (
        <SaleBadge
          content={salesBadgeContent}
          className="z-10 absolute top-5 right-5"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 flex justify-center items-center transition-opacity ease-linear duration-200 z-20">
        {/* Overlay content */}
        <div className="text-center font-semibold flex flex-col gap-6">
          <Link
            href={`/shop/${productName.toLowerCase().replace(/\s/g, '-')}`}
            className="bg-white text-[#B88E2F] px-12 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors ease-linear duration-100 border border-[#B88E2F]"
          >
            View details
          </Link>

          <button className="bg-white text-[#B88E2F] px-12 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors ease-linear duration-100 border border-[#B88E2F]">
            Add to cart
          </button>

          <div className="flex flex-row gap-5">
            {/* Other elements can go here */}
            <button className="text-white flex flex-row items-center gap-1 hover:underline">
              <Share /> Share
            </button>
            <button className="text-white flex flex-row items-center gap-1 hover:underline">
              <Compare /> Compare
            </button>
            <button className="text-white flex flex-row items-center gap-1 hover:underline">
              <Heart />
              Like
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="grow relative z-0">
        <Image
          src={productImg.src}
          alt={productImg.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Item data */}
      <div className="space-y-2 px-4 pt-4 pb-8 z-0">
        <h3 className="text-2xl font-semibold text-[#3A3A3A]">{productName}</h3>
        <p className="font-medium text-[#898989] line-clamp-1">
          {productDescription}
        </p>
        <p className="text-xl font-semibold text-[#3A3A3A]">{productPrice}</p>
      </div>
    </div>
  );
};

export default Product;
