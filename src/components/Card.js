import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";
import CardImage from "../image/img/card.jpg";

export default function Card() {
  const Card = [
    {
      image: CardImage,
      badge: "Budgeted",
      rating: "4.8 (243)",
      title: "6 Days Super Luxury Tanzania Safari",
      time: "6 Days / 5 Nights",
      start: "From",
      price: "$225",
      active: "Book Now",
    },
  ];

  const cards = Array(8).fill(Card[0]);

  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-bold">Featured Toures</h1>
          <button className="bg-[#7C9C3F] text-white py-2 px-6 flex items-center gap-2 rounded-full hover:bg-[#155B50] ease-in duration-300">
            View All
            <ArrowIcon className="w-4 h-4 fill-white" />
          </button>
        </div>
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {cards.map((i, index) => (
            <div key={index}>
              <div className="relative cursor-pointer w-96">
                <img
                  src={i.image}
                  alt=""
                  className=" object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 flex justify-between w-full z-10 px-2 py-2">
                  <p className="text-white bg-[#155B50] py-1 px-3 rounded-full">
                    {i.badge}
                  </p>
                  <p className="text-white bg-[#155B50] py-1 px-3 rounded-full">
                    {i.rating}
                  </p>
                </div>
              </div>
              <div className="border-r border-l border-b w-96 pb-4">
                <h1 className="text-black text-2xl font-semibold pl-4 pt-5">
                  {i.title}
                </h1>
                <p className="text-black pl-4 pt-5">{i.time}</p>
              </div>
              <div className="flex items-center justify-between w-96 border-r border-l border-b py-4 px-4 rounded-b-lg">
                <div className="flex items-center gap-1">
                  <p className="text-black">{i.start}</p>
                  <p className="text-black text-xl font-bold">{i.price}</p>
                </div>
                <p className="text-[#155B50]">{i.active}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
