import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-ful h-80">
        <Image
          src="https://images.pexels.com/photos/13144285/pexels-photo-13144285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
};

export default ProductList;
