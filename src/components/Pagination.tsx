"use client";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-lama text-white p-2 text-sm  w-24 cursor-pointer disabled:bg-pink-200 "
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-lama text-white p-2 text-sm  w-24 cursor-pointer disabled:bg-pink-200"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};
//3:32
export default Pagination;
