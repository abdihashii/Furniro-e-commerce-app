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
    </main>
  );
}
