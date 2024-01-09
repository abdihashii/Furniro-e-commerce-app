import Location from '@/components/Icons/Location';
import Phone from '@/components/Icons/Phone';
import Time from '@/components/Icons/Time';
import MainHeroSection from '@/components/MainHeroSection';

export default function AboutPage() {
  return (
    <main>
      {/* Hero section */}
      <MainHeroSection title="Contact" path="Contact" />

      {/* Contact section */}
      <section className="flex flex-col gap-20 pt-24 pb-16">
        <article className="text-center xl:w-5/12 2xl:w-3/12 mx-auto flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </article>

        <article className="flex flex-row justify-between w-9/12 mx-auto p-14">
          <div className="flex flex-col gap-12 w-1/3">
            <div className="flex flex-row gap-5">
              <Location />
              <div>
                <h3 className="text-2xl font-medium">Address</h3>
                <p>P. Sherman 42 Wallaby Way</p>
                <p>Sydney, Australia</p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <Phone />
              <div>
                <h3 className="text-2xl font-medium">Phone</h3>
                <p>Mobile: (+1) 123-456-7890</p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <Time />
              <div>
                <h3 className="text-2xl font-medium">Working Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: 11am - 4pm</p>
              </div>
            </div>
          </div>

          <form className="space-y-9 w-1/2">
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Your name</label>
              <input
                className="border border-[#9F9F9F] px-6 py-4 rounded-lg"
                type="text"
                id="name"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="email">Your email</label>
              <input
                className="border border-[#9F9F9F] px-6 py-4 rounded-lg"
                type="email"
                id="email"
                placeholder="john.doe@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="subject">Subject</label>
              <input
                className="border border-[#9F9F9F] px-6 py-4 rounded-lg"
                type="text"
                id="subject"
                placeholder='e.g. "Product Inquiry"'
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="message">Your message</label>
              <textarea
                className="border border-[#9F9F9F] px-6 py-4 rounded-lg"
                id="message"
                placeholder="Hi! I'd like to ask about"
              />
            </div>

            <button className="bg-[#B88E2F] border border-[#B88E2F] text-white px-24 py-4 rounded-md hover:text-[#B88E2F] hover:bg-white">
              Submit
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
