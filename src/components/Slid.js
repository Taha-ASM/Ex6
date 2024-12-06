import SlidImage from "../image/img/slid.png";
import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";

export default function Slid() {
  const slid = [
    {
      image: SlidImage,
      badge: "Budgeted",
      rating: "4.8 (243)",
      title: "6 Days The Ultimate Shira Route Experince",
      time: "6 Days / 5 Nights",
      start: "From",
      price: "$189.25",
    },
  ];

  const slids = Array(4).fill(slid[0]);

  return (
    <div className="bg-white py-20">
      <div className="container">
        <h1 className="text-black text-3xl font-bold">
          Best of Mount Kilimanjaro
        </h1>
        <div>
          <div className="flex items-center gap-10 pt-10">
            {slids.map((i) => (
              <div className="w-96">
                <div className="relative w-full object-cover h-auto">
                  <img
                    src={i.image}
                    alt=""
                    className="w-full object-cover h-auto"
                  />
                  <div className="bg-white rounded-full py-2 px-2 mr-5 mt-5 w-6 h-6 absolute top-0 right-0"></div>
                </div>
                <div className="bg-[#F0F5F1] py-6 rounded-b-2xl">
                  <div className="flex items-center justify-between pb-4 px-5">
                    <p className="text-[#155B50]">{i.badge}</p>
                    <p className="text-[#155B50]">{i.rating}</p>
                  </div>
                  <h1 className="text-black text-xl font-semibold px-4 pb-10">
                    {i.title}
                  </h1>
                  <hr className="w-80 pb-5 ml-8" />
                  <div className="flex items-center justify-between px-4">
                    <p className="text-black">{i.time}</p>
                    <div className="flex items-center gap-1">
                      <p className="text-black">{i.start}</p>
                      <p className="text-black font-semibold text-lg">
                        {i.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10 flex items-center gap-10">
            <div className="bg-[#F0F5F1] py-5 px-5 rounded-full cursor-pointer hover:bg-[#b8b8b8] ease-in duration-300">
              <ArrowIcon className="w-4 h-4 fill-[#88c811] transform rotate-180 " />
            </div>
            <div className="bg-[#F0F5F1] py-5 px-5 rounded-full cursor-pointer hover:bg-[#b8b8b8] ease-in duration-300">
              <ArrowIcon className="w-4 h-4 fill-[#88c811]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
