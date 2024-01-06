import Image from 'next/image';
import React from 'react';

const ProductCategories = () => {
  return (
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
  );
};

export default ProductCategories;
