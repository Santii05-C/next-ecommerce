import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-ful h-80">
            <Image
              src="https://images.pexels.com/photos/26690666/pexels-photo-26690666/free-photo-of-resfriado-frio-nieve-nevar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/20852606/pexels-photo-20852606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500 ">My description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
