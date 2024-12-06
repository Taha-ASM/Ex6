import NavbarSimpl from "../components/NavbarSimpl";
import BlogImage from "../image/img/blog.png";
import Slid from "../components/Slid";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div>
      <NavbarSimpl />
      <div className="bg-white">
        <div className="container flex flex-col">
          <img src={BlogImage} alt="" />
          <div className="flex flex-col gap-10 py-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-7">
                <p className="text-[#05073C]">4.8 (269)</p>
                <p className="text-[#05073C]">30K+ tours</p>
              </div>
              <div className="flex items-center gap-7">
                <button className="text-[#05073C]">Share</button>
                <button className="text-[#05073C]">Wishlist</button>
              </div>
            </div>
            <h1 className="text-[#05073C] text-6xl font-bold">
              Serengeti National Park
            </h1>
          </div>
        </div>
        <div className="flex items-center bg-[#F0F5F1]">
          <div className="container flex items-center py-20">
            <div className="flex flex-col gap-10 w-3/4">
              <div className="flex flex-col gap-5">
                <h1 className="text-[#05073C] text-xl font-bold">Overview</h1>
                <p className="text-[#05073C]">
                  Gombe National Park covers an area of 52 sq. km. and was first
                  recognized as an important wildlife and chimpanzee habitat in
                  1943 when it was designated a Game Reserve. It has mountainous
                  forested terrain that slopes steeply down to its sandy
                  shoreline on Lake Tanganyika, and the defining attraction for
                  the visitor are the chimpanzees living there.
                </p>
                <p className="text-[#05073C]">
                  The chimpanzees were originally the object of research by the
                  renowned scientist and conservationist Dr. Jane Goodall, who
                  was herself the protégé of the yet more celebrated
                  anthropologist Dr. Louis Leakey. Her studies started in 1960,
                  and she later married Derek Bryceson who was a Tanzanian MP
                  and the second Director of National Parks after independence
                  in 1961. Gombe was upgraded to National Park status by the
                  Tanzania Government in 1968.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#05073C] text-xl font-bold">Wildlife</h1>
                  <p className="text-[#05073C]">
                    BThe Park can be accessed by boat from Kigoma, and boat
                    bookings are done through the Park or with private boat
                    owners Kigoma is a substantial town and is accessible by air
                    from the larger Tanzanian towns. There is a rail link from
                    Kigoma to Dar es Salaam and a ferry service from Zambia.
                    Access by road is of course possible but the distances are
                    large.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#05073C] text-xl font-bold">When to visit</h1>
                  <p className="text-[#05073C]">
                    Gombe fits easily into one’s safari plans as it is possible
                    to fly from Kigoma to almost anywhere else in Tanzania.
                    Being so close to Kigoma Gombe can become an extension visit
                    to a regular southern circuit safari. It is a lot less
                    expensive than a visit to Mahale Mountains for those wanting
                    chimp viewing on a budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 ml-10 bg-white py-6 px-6 w-1/3 rounded-xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#05073C] text-xl font-bold">Activities</h1>
                <p className="text-[#05073C]">
                  Gombe fits easily into one’s safari plans as it is possible to
                  fly from Kigoma to almost anywhere else in Tanzania. Being so
                  close to Kigoma Gombe can become an extension visit to a
                  regular southern circuit safari. It is a lot less expensive
                  than a visit to Mahale Mountains for those wanting chimp
                  viewing on a budget.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[#05073C] text-xl font-bold">Safari Ideas</h1>
                <p className="text-[#05073C]">
                  Gombe fits easily into one’s safari plans as it is possible to
                  fly from Kigoma to almost anywhere else in Tanzania. Being so
                  close to Kigoma Gombe can become an extension visit to a
                  regular southern circuit safari. It is a lot less expensive
                  than a visit to Mahale Mountains for those wanting chimp
                  viewing on a budget.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[#05073C] text-xl font-bold">Accomodations</h1>
                <p className="text-[#05073C]">
                  Gombe fits easily into one’s safari plans as it is possible to
                  fly from Kigoma to almost anywhere else in Tanzania. Being so
                  close to Kigoma Gombe can become an extension visit to a
                  regular southern circuit safari. It is a lot less expensive
                  than a visit to Mahale Mountains for those wanting chimp
                  viewing on a budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slid />
      <Footer />
    </div>
  );
}
