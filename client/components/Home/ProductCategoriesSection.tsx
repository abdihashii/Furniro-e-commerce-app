import React from 'react';
import ProductCategories from './ProductCategories';

const ProductCategoriesSection = () => {
  return (
    <section className="w-full py-14 space-y-16">
      <article className="mx-auto text-center w-fit">
        <h2 className="text-[32px] font-bold text-[#333]">Browse The Range</h2>
        <p className="text-xl font-normal text-[#666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </article>

      <ProductCategories />
    </section>
  );
};

export default ProductCategoriesSection;
