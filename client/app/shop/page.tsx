import Arrow from '@/components/Icons/Arrow';
import Check from '@/components/Icons/Check';
import Filter from '@/components/Icons/Filter';
import ListLayout1 from '@/components/Icons/ListLayout1';
import ListLayout2 from '@/components/Icons/ListLayout2';
import Shipping from '@/components/Icons/Shipping';
import Support from '@/components/Icons/Support';
import Trophy from '@/components/Icons/Trophy';
import Product from '@/components/Product';
import Link from 'next/link';

const products = [
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
  {
    name: 'Product 1',
    description: 'Stylish cafe chair',
    price: '$250',
    image: '/product-1.png',
  },
];

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
      <section className="bg-[#F9F1E7] px-[200px] py-6 flex flex-row justify-between">
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

      {/* Products list section */}
      <section className="px-[200px] pt-16 pb-20 flex flex-col items-center gap-16">
        <article className="grid grid-cols-4 gap-x-8 gap-y-10 w-full">
          {products.map((product, index) => (
            <Product
              key={index}
              productImg={{
                src: product.image,
                alt: product.name,
              }}
              productName={product.name}
              productPrice={product.price}
              productDescription={product.description}
            />
          ))}
        </article>

        <article className="flex flex-row gap-9">
          <button className="bg-[#B88E2F] py-4 px-6 text-white rounded-xl gap-9">
            1
          </button>

          <button className="bg-[#F9F1E7] py-4 px-6 rounded-xl gap-9 hover:bg-[#B88E2F] hover:text-white">
            2
          </button>

          <button className="bg-[#F9F1E7] py-4 px-6 rounded-xl gap-9 hover:bg-[#B88E2F] hover:text-white">
            3
          </button>

          <button className="bg-[#F9F1E7] py-4 px-6 rounded-xl gap-9 hover:bg-[#B88E2F] hover:text-white">
            Next
          </button>
        </article>
      </section>

      {/* Amenities section */}
      <section className="flex flex-row justify-between px-[200px] py-[100px] bg-[#FAF3EA]">
        <article className="flex flex-row gap-3">
          <Trophy />

          <div className="flex flex-col justify-between">
            <p className="text-2xl font-semibold">High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </article>

        <article className="flex flex-row gap-3">
          <Check />

          <div className="flex flex-col justify-between">
            <p className="text-2xl font-semibold">Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </article>

        <article className="flex flex-row gap-3">
          <Shipping />

          <div className="flex flex-col justify-between">
            <p className="text-2xl font-semibold">Free Shipping</p>
            <p>Orders over $150</p>
          </div>
        </article>

        <article className="flex flex-row gap-3">
          <Support />

          <div className="flex flex-col justify-between">
            <p className="text-2xl font-semibold">24/7 Support</p>
            <p>Dedicated support</p>
          </div>
        </article>
      </section>
    </main>
  );
}
