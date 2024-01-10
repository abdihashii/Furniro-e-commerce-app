import React from 'react';

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
