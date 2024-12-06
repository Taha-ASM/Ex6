import NavbarSimpl from "../components/NavbarSimpl";
import BannerTour from "../components/BannerTour";
import Footer from "../components/Footer";
import CardTourImage from "../image/img/cardtour.png";

export default function Tour() {
  const data = [
    {
      image: CardTourImage,
      badge: "Budgeted",
      rating: "4.8 (269)",
      title: "6 Days Wildlife Amaizing Experience in Wildness",
      text: "On this amazing safari we will observe all the experiences that chears up our clients non stop without hestance...",
      activityone: "Walking",
      activitytwo: "Canoying",
      activitythree: "Hunting",
      days: "2 Days 1 Nights",
      discountprice: "$1200",
      price: "From $114",
      buttontext: "View Details",
    },
  ];

  const datas = Array(6).fill(data[0]);
  return (
    <div>
      <NavbarSimpl />
      <BannerTour />
      <div className="bg-white py-20">
        <div className="container flex gap-10">
          <div className="flex-2">
            <div className="bg-[#7C9C3F] py-11 px-10 flex flex-col gap-3 rounded-t-xl">
              <h1 className="text-white">When are you traveling?</h1>
              <p className="text-black bg-white rounded-xl py-4 px-8">
                February 05 ~ March 14
              </p>
            </div>
            <div>
              <h1 className="text-black text-lg py-5 px-10 font-semibold">
                Tour Type
              </h1>
              <div className="py-5 flex flex-col items-start gap-3">
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Nature Tours</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Adventure Tours</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Cultural Tours</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Food Tours</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>City Tours</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Cruises Tours</p>
                </div>
                <button className="text-[#4A43C4] pt-5">See More</button>
              </div>
              <div className="text-black font-semibold text-lg">
                <p className="border-t py-3">Filter Price</p>
                <p className="border-t py-3">Duration</p>
                <p className="border-t py-3">Language</p>
                <p className="border-t py-3">Rating</p>
                <p className="border-t py-3">Specials</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between text-black">
              <h1>1362 results</h1>
              <p>Sort by: Featured</p>
            </div>
            <div className="flex flex-col gap-10 py-10">
              {datas.map((i) => (
                <div className="flex items-center gap-10 border p-5 rounded-xl">
                  <img src={i.image} alt="" />
                  <div className="flex gap-20">
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                          <p className="text-white bg-[#7C9C3F] py-2 px-3 rounded-xl">
                            {i.badge}
                          </p>
                          <p className="text-[#05073C]">{i.rating}</p>
                        </div>
                        <h1 className="text-[#05073C] text-xl">{i.title}</h1>
                        <p className="text-[#05073C]">{i.text}</p>
                        <div className="flex items-center gap-3">
                          <p className="text-[#7C9C3F]">{i.activityone}</p>
                          <p className="text-[#9CB56F]">{i.activitytwo}</p>
                          <p className="text-[#AFC38A]">{i.activitythree}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-between border-l">
                      <p className="text-[#05073C]">{i.days}</p>
                      <div className="flex items-center flex-col">
                        <p className="text-[#C6C6D2]">{i.discountprice}</p>
                        <p className="text-[#05073C] font-semibold">
                          {i.price}
                        </p>
                        <button className="py-4 px-10 mt-5 rounded-xl outline outline-1 outline-[#7C9C3F] text-[#7C9C3F] hover:bg-[#EB662B] hover:text-white hover:outline-none ease-in duration-200">
                          {i.buttontext}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center gap-10">
          <div className="join flex items-center justify-center gap-2">
            <button className="bg-[#7C9C3F] rounded-full btn-sm hover:bg-[#7C9C3F] text-white ease-in duration-200 btn-active">
              1
            </button>
            <button className="bg-none text-black rounded-full btn-sm hover:bg-[#7C9C3F] hover:text-white ease-in duration-200">
              2
            </button>
            <button className="bg-none text-black rounded-full btn-sm hover:bg-[#7C9C3F] hover:text-white ease-in duration-200">
              3
            </button>
            <button className="bg-none text-black rounded-full btn-sm hover:bg-[#7C9C3F] hover:text-white ease-in duration-200">
              4
            </button>
            <button className="bg-none text-black rounded-full btn-sm hover:bg-[#7C9C3F] hover:text-white ease-in duration-200">
              ...
            </button>
            <button className="bg-none text-black rounded-full btn-sm hover:bg-[#7C9C3F] hover:text-white ease-in duration-200">
              20
            </button>
          </div>
          <p className="text-black">Showing results 1-30 of 1,415</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
