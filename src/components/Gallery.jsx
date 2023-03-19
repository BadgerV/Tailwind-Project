import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-col-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="/assets/image12.jpg"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/image13.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/image14.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/image15.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/image16.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
