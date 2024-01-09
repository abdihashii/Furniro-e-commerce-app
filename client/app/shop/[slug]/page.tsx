import { createServerSupabaseClient } from '@/lib/SupabaseServerClient';

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
      <h1>{product.name}</h1>
    </main>
  );
}
