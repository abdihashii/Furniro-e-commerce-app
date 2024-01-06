import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section
        className="bg-cover bg-center bg-no-repeat flex items-center justify-end pr-14 xl:pr-44"
        style={{
          backgroundImage: `url('/scandavian-mockup.jpeg')`,
          height: 'calc(100vh - 82px)',
        }}
      >
        <article className="px-10 pt-16 pb-9 bg-[#FFF3E3] rounded-xl w-5/12 lg:w-4/12">
          <p className="tracking-widest font-semibold mb-1">New Arrival</p>
          <h1 className="text-[52px] font-bold leading-[65px] text-[#B88E2F] mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-lg font-medium leading-6 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="uppercase bg-[#B88E2F] font-bold text-white py-6 px-[72px] hover:underline">
            Buy Now
          </button>
        </article>
      </section>

      {/* Product categories section */}
      <section className="w-full py-20 space-y-16">
        <article className="mx-auto text-center w-fit">
          <h2 className="text-[32px] font-bold text-[#333]">
            Browse The Range
          </h2>
          <p className="text-xl font-normal text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>

        <article className="grid grid-cols-3 w-10/12 gap-8 mx-auto">
          <div className="space-y-7 text-center text-2xl font-semibold">
            <div className="w-full relative h-[480px]">
              <Image
                src="/dining.png"
                alt="Dining Room"
                fill={true}
                objectFit="cover"
              />
            </div>
            <h3>Dining</h3>
          </div>

          <div className="space-y-7 text-center text-2xl font-semibold">
            <div className="w-full relative h-[480px]">
              <Image
                src="/living.png"
                alt="Living Room"
                fill={true}
                objectFit="cover"
              />
            </div>
            <h3>Living</h3>
          </div>

          <div className="space-y-7 text-center text-2xl font-semibold">
            <div className="w-full relative h-[480px]">
              <Image
                src="/bedroom.png"
                alt="Bedroom"
                fill={true}
                objectFit="cover"
              />
            </div>
            <h3>Bed</h3>
          </div>
        </article>
      </section>

      {/* Our Products section */}
      <section className="w-full space-y-8 py-14 px-28">
        <h2 className="text-[40px] font-bold text-center">Our Products</h2>

        <article className="grid-cols-4 grid gap-8">
          <div className="h-[446px] bg-[#F4F5F7] flex flex-col group">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                Syltherine
              </h3>
              <p className="font-medium text-[#898989]">Stylish cafe chair</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$200</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Leviosa</h3>
              <p className="font-medium text-[#898989]">Stylish cafe chair</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$250</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Lolito</h3>
              <p className="font-medium text-[#898989]">Luxury big sofa</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$700</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Respira</h3>
              <p className="font-medium text-[#898989]">
                Outdoor bar table and stool
              </p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$100</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Grifo</h3>
              <p className="font-medium text-[#898989]">Night lamp</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$50</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Muggo</h3>
              <p className="font-medium text-[#898989]">Sectional</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$850</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Pingky</h3>
              <p className="font-medium text-[#898989]">Sofa</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$900</p>
            </div>
          </div>

          <div className="h-[446px] bg-[#F4F5F7] flex flex-col">
            <div className="grow relative">
              <Image
                src="/product-1.png"
                alt="Product 1"
                fill={true}
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>

            <div className="space-y-2 px-4 pt-4 pb-8 item">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">Potty</h3>
              <p className="font-medium text-[#898989]">Minimalist loveseat</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">$500</p>
            </div>
          </div>
        </article>

        <article className="flex justify-center">
          <button className="border text-[#B88E2F] font-semibold border-[#B88E2F] py-3 px-20 hover:underline">
            Show More
          </button>
        </article>
      </section>
    </main>
  );
}
