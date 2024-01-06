'use client';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="px-[100px] py-12 gap-12 flex flex-col"
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.17)',
      }}
    >
      {/* Footer navigation section */}
      <section className="flex flex-row justify-between lg:w-3/4 mx-auto">
        <article className="flex flex-col gap-12">
          <h2 className="text-2xl font-bold">Funiro.</h2>

          <p className="text-[#9F9F9F]">
            P. Sherman 42 Wallaby Way
            <br />
            Sydney, Australia
            <br />
            +1 (555) 555-5555
          </p>
        </article>

        {/* Links */}
        <article className="flex flex-col gap-[55px]">
          <h2 className="text-[#9F9F9F] font-medium">Links</h2>

          <ul className="flex flex-col gap-12">
            <li className="font-medium">
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>

            <li className="font-medium">
              <Link className="hover:underline" href="/shop">
                Shop
              </Link>
            </li>

            <li className="font-medium">
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>

            <li className="font-medium">
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </article>

        {/* Help */}
        <article className="flex flex-col gap-[55px]">
          <h2 className="text-[#9F9F9F] font-medium">Help</h2>

          <ul className="flex flex-col gap-12">
            <li className="font-medium">
              <Link className="hover:underline" href="/payment-options">
                Payment Options
              </Link>
            </li>

            <li className="font-medium">
              <Link className="hover:underline" href="/returns">
                Returns
              </Link>
            </li>

            <li className="font-medium">
              <Link className="hover:underline" href="/privacy">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </article>

        {/* Newsletter */}
        <article className="flex flex-col gap-[55px]">
          <h2 className="text-[#9F9F9F] font-medium">Newsletter</h2>

          <form
            className="flex flex-row gap-4 text-sm"
            onSubmit={(e) => {
              e.preventDefault();

              alert('You have subscribed to our newsletter!');
            }}
          >
            <input
              className="text-black bg-white border-b border-b-black pb-2 focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />

            <button className="pb-2 bg-white text-black border-b border-b-black uppercase font-medium hover:bg-black hover:text-white">
              Subscribe
            </button>
          </form>
        </article>
      </section>

      {/* CopyRight section */}
      <section
        className="lg:w-3/4 flex flex-col gap-4 justify-center text-center mx-auto pt-9"
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.17)',
        }}
      >
        <p>Built by: Abdirahman Haji</p>
        <p>Designed by: UI/UX designer</p>

        <p>Copyright &copy;Furino. 2023. All right reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
