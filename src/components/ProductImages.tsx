import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://www.pexels.com/es-es/foto/ciudad-viaje-viajar-callejon-18460661/",
  },
  {
    id: 2,
    url: "https://www.pexels.com/es-es/foto/madera-verano-animal-mono-27000642/",
  },
  {
    id: 3,
    url: "https://www.pexels.com/es-es/foto/resfriado-frio-nieve-nevar-19342868/",
  },
  {
    id: 4,
    url: "https://www.pexels.com/es-es/foto/mariposa-16741638/",
  },
];

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="">
        <div className="w-1/4 h-32 relative gap-4 mt-8">
          <Image
            src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
