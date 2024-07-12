"use client";

import Image from "next/image";

const CarModal = () => {
  const cartItems = false;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Card is Empty</div>
      ) : (
        <div className="">
          <Image
            src="https://www.pexels.com/es-es/foto/madera-paisaje-agua-verano-24245175/"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          {/* TOP */}
          {/* TITLE */}

          {/* DESC */}
          {/* BOTTOM */}
        </div>
      )}
    </div>
  );
};

export default CarModal;
