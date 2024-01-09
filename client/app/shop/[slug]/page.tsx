import Arrow from '@/components/Icons/Arrow';
import { createServerSupabaseClient } from '@/lib/SupabaseServerClient';
import Link from 'next/link';

export default async function ShopItem({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const supabase = createServerSupabaseClient();

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error) {
    console.log(error);

    return <div>Error</div>;
  }

  return (
    <main>
      {/* Shopping Navigation section */}
      <section className="w-full bg-[#F9F1E7] py-10">
        <article className="flex flex-row gap-6 items-center px-[200px]">
          <Link href="/" className="text-[#9F9F9F] hover:underline">
            Home
          </Link>
          <Arrow />
          <Link href="/shop" className="text-[#9F9F9F] hover:underline">
            Shop
          </Link>
          <Arrow />
          <p className="border-l-2 border-l-[#9F9F9F] pl-6">{product.name}</p>
        </article>
      </section>
    </main>
  );
}
