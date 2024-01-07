import Arrow from '@/components/Icons/Arrow';
import Filter from '@/components/Icons/Filter';
import ListLayout1 from '@/components/Icons/ListLayout1';
import ListLayout2 from '@/components/Icons/ListLayout2';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative flex flex-col items-center h-80 justify-center">
        {/* Blurred background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url('/shop_background.jpeg')` }}
        ></div>

        {/* Content */}
        <article className="relative z-10 flex flex-col gap-5">
          <h1 className="text-5xl text-center">Shop</h1>
          <span className="flex flex-row gap-2 items-center">
            <Link className="font-medium hover:underline" href="/">
              Home
            </Link>{' '}
            <Arrow /> <p className="font-light">Shop</p>
          </span>
        </article>
      </section>

      {/* Filter section */}
      <section className="bg-[#F9F1E7] px-[100px] py-6 flex flex-row justify-between">
        <article className="flex flex-row gap-6 items-center">
          <div className="flex flex-row gap-3 items-center">
            <Filter /> <p className="text-xl">Filter</p>
          </div>

          <ListLayout1 />

          <ListLayout2 />
        </article>

        <article className="flex flex-row gap-6">
          <div className="flex flex-row gap-4 items-center text-xl">
            <p>Show</p>

            <select className="text-[#9F9F9F] py-3 px-4 appearance-none">
              <option>16</option>
              <option>32</option>
              <option>48</option>
            </select>
          </div>

          <div className="flex flex-row gap-4 items-center text-xl">
            <p>Sort by</p>

            <select className="text-[#9F9F9F] py-3 px-4 appearance-none">
              <option>Price</option>
              <option>Rating</option>
              <option>Popularity</option>
            </select>
          </div>
        </article>
      </section>
    </main>
  );
}
