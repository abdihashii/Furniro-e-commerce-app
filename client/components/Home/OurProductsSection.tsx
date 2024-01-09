import Link from 'next/link';

import Product from '../Product';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';

const OurProductsSection = async () => {
  const supabase = createClientComponentClient<Database>();

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  if (error) {
    console.log(error);

    return <div>Error loading products</div>;
  }

  return (
    <section className="w-full space-y-8 py-14 px-[200px]">
      <h2 className="text-[40px] font-bold text-center">Our Products</h2>

      <article className="lg:grid-cols-4 xl:grid-cols-5 grid gap-8 grid-cols-2">
        {products?.map((product) => {
          const cleanSrc = product.img_src?.replace(/^"|"$/g, '');

          return (
            <Product
              key={product.id}
              productName={product.name}
              productDescription={product.description ?? ''}
              productPrice={`$${product.price}`}
              productImg={{ src: cleanSrc ?? '', alt: product.name }}
            />
          );
        })}
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
