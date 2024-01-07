import React from 'react';

import Product from '../Product';
import Link from 'next/link';

const OurProductsSection = () => {
  return (
    <section className="w-full space-y-8 py-14 px-28">
      <h2 className="text-[40px] font-bold text-center">Our Products</h2>

      <article className="lg:grid-cols-4 grid gap-8 grid-cols-2">
        <Product
          productName="Slytherin"
          productDescription="Stylish cafe chair"
          productPrice="$250"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Leviosa"
          productDescription="Stylish cafe chair"
          productPrice="$250"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Lolito"
          productDescription="Luxury big sofa"
          productPrice="$700"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Respira"
          productDescription="Outdoor bar table and stool"
          productPrice="$100"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Grifo"
          productDescription="Night lamp"
          productPrice="$50"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Muggo"
          productDescription="Sectional"
          productPrice="$850"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Pingky"
          productDescription="Sofa"
          productPrice="$900"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />

        <Product
          productName="Potty"
          productDescription="Minimalist loveseat"
          productPrice="$500"
          productImg={{ src: '/product-1.png', alt: 'Product 1' }}
        />
      </article>

      {/* Show more button */}
      <article className="flex justify-center">
        <Link
          href="/shop"
          className="border text-[#B88E2F] font-semibold border-[#B88E2F] py-3 px-20 hover:text-white hover:bg-[#B88E2F]"
        >
          Show More
        </Link>
      </article>
    </section>
  );
};

export default OurProductsSection;
