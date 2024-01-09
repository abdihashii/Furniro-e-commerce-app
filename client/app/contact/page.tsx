import MainHeroSection from '@/components/MainHeroSection';

export default function AboutPage() {
  return (
    <main>
      {/* Hero section */}
      <MainHeroSection title="Contact" path="Contact" />

      {/* Contact section */}
      <section className="flex flex-col gap-32 pt-24 pb-16">
        <article className="text-center w-1/4 mx-auto flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </article>

        <article className="flex flex-row gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <h3>Address</h3>
              <p>P. Sherman 42 Wallaby Way Sydney</p>
            </div>

            <div>
              <h3>Phone</h3>
              <p>012-345-6789</p>
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday - Sunday: 11am - 4pm</p>
            </div>
          </div>

          <form></form>
        </article>
      </section>
    </main>
  );
}
