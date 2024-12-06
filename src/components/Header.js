import Navbar from "./Navbar";
import HeaderImage from "../image/img/Header.jpg";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
        <div className="container flex flex-col items-center justify-center">
          <div className="mt-20 flex-col flex">
            <h1 className="text-7xl text-white font-semibold text-center">
              Best destinations with lot <br /> of experiences
            </h1>
            <p className="text-white text-center text-sm py-16">
              There are many variations of passages of Lorem Ipsum available,
              but <br /> the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="bg-white flex items-center justify-evenly gap-40 py-3  w-3/5 rounded-full">
            <div className="flex items-center gap-20">
              <div>
                <h1 className="text-lg text-black">Where</h1>
                <p className="text-xs">Search destinations</p>
              </div>
              <div>
                <h1 className="text-lg text-black">When</h1>
                <p className="text-xs text-black">February 05 ~ March 14</p>
              </div>
              <div>
                <h1 className="text-lg text-black">Tour Type</h1>
                <p className="text-xs">All tour</p>
              </div>
            </div>
            <button className="text-white bg-[#7C9C3F] py-3 px-10 rounded-full hover:bg-[#155B50] ease-in duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
      <img src={HeaderImage} alt="" className="w-full h-[58rem] object-cover" />
    </div>
  );
}
