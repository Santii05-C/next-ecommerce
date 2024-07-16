import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className=""></div>
    </div>
  );
};

export default SinglePage;
