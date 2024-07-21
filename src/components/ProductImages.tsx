"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/18460661/pexels-photo-18460661/free-photo-of-ciudad-viaje-viajar-callejon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/19820544/pexels-photo-19820544/free-photo-of-nieve-nevar-madera-paisaje.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/18939401/pexels-photo-18939401/free-photo-of-blanco-y-negro-ciudad-coches-trafico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/20877003/pexels-photo-20877003/free-photo-of-ciudad-edificios-pasos-urbano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
