import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";
import SerengetiImage from "../image/img/serengeti.png";
import LakeImage from "../image/img/lake.png";
import NgorongoroImage from "../image/img/ngorongoro.png";
import MikumiImage from "../image/img/mikumi.png";
import ZanzibarImage from "../image/img/zanzibar.png";
import ArushaImage from "../image/img/arusha.png";
import Slid from "./Slid";

export default function Place() {
  const destinations = [
    { image: SerengetiImage, name: "Serengeti NP" },
    { image: LakeImage, name: "Lake Manyara NP" },
    { image: NgorongoroImage, name: "Ngorongoro NP" },
    { image: MikumiImage, name: "Mikumi NP" },
    { image: ZanzibarImage, name: "Zanzibar Beach" },
    { image: ArushaImage, name: "Arusha National Park" },
  ];

  return (
    <div className="bg-[#F0F5F1] py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-black text-3xl font-bold">
            Trending Destinations
          </h1>
          <button className="bg-[#7C9C3F] text-white py-2 px-6 flex items-center gap-2 rounded-full hover:bg-[#155B50] ease-in duration-300">
            View All
            <ArrowIcon className="w-4 h-4 fill-current" />
          </button>
        </div>
        <div className="grid grid-cols-4 justify-center gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg flex-none w-64 h-40"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2 text-center">
                {destination.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between bg-[#7C9C3F] py-10 px-20 text-black my-20 rounded-xl">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">4.9</h1>
            <p className="text-xs">
              1000+ reviews on TripAdvisor. Certificate of Excellence
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">16M</h1>
            <p className="text-xs">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">Award winner</h1>
            <p className="text-xs">G2's 2021 Best Software Awards</p>
          </div>
        </div>
      </div>
      <Slid />
    </div>
  );
}
