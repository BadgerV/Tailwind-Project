import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We are standing by</p>
      <div className="grid md:grid-col-1">
        <img
          src="/assets/image12.jpg"
          alt=""
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2 text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border m-2 p-2 text-sm"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border m-2 p-2 text-sm"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2 text-sm"
              type="tel"
              placeholder="Phone Number"
            />
            <input
              className="border col-span-2 p-2 m-2 text-sm  "
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2 text-sm"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
