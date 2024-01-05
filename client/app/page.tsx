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
    </main>
  );
}
