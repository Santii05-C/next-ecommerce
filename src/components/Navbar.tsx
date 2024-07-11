import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xlg:px-64 relative">
      <div className="h-full flex items-center justify-between">
        {/* MOBILE */}
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="">
          {/* LEFT */}
          <div className="w-1/3">
            <div className="text-2xl tracking-wide">LAMA</div>
          </div>
          {/* RIGHT */}
          <div className="w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
