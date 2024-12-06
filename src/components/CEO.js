import CeoImage from "../image/img/CEO.png";

export default function CEO() {
  return (
    <div className="bg-white py-20">
      <div className="container flex flex-col gap-20">
        <div className="flex items-center">
          <div className="flex-1">
            <img src={CeoImage} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-16">
            <div className="flex flex-col gap-10">
              <h1 className="text-black text-3xl font-bold">
                About Serengeti Wildlife Safaris
              </h1>
              <p className="text-black">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <p className="text-black">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="flex flex-col items-start gap-10">
              <h1 className="text-black text-3xl font-bold">Our CEO</h1>
              <p className="text-black">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <p className="text-black">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <button className="bg-[#7C9C3F] text-white px-20 py-5 rounded-xl">
                Book With Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-3xl font-bold">
              Sales and Marketing
            </h1>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-3xl font-bold">
              Booking & Operation
            </h1>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-3xl font-bold">
              Our Staffs & Guides
            </h1>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-black text-2xl py-10 text-center font-bold">
            Our Team
          </h1>
          <div className="flex items-center justify-around">
            <div>
              <img src={CeoImage} alt="" className="w-64" />
              <div className="px-5 py-10 rounded-xl flex flex-col gap-0.5">
                <h1 className="text-black font-semibold">John Danford</h1>
                <p className="text-[#155B50]">CEO & Tour Operator</p>
                <p className="text-black">Speakes Japanes, French</p>
              </div>
            </div>
            <div>
              <img src={CeoImage} alt="" className="w-64" />
              <div className="px-5 py-10 rounded-xl flex flex-col gap-0.5">
                <h1 className="text-black font-semibold">John Danford</h1>
                <p className="text-[#155B50]">CEO & Tour Operator</p>
                <p className="text-black">Speakes Japanes, French</p>
              </div>
            </div>
            <div>
              <img src={CeoImage} alt="" className="w-64" />
              <div className="px-5 py-10 rounded-xl flex flex-col gap-0.5">
                <h1 className="text-black font-semibold">John Danford</h1>
                <p className="text-[#155B50]">CEO & Tour Operator</p>
                <p className="text-black">Speakes Japanes, French</p>
              </div>
            </div>
            <div>
              <img src={CeoImage} alt="" className="w-64" />
              <div className="px-5 py-10 rounded-xl flex flex-col gap-0.5">
                <h1 className="text-black font-semibold">John Danford</h1>
                <p className="text-[#155B50]">CEO & Tour Operator</p>
                <p className="text-black">Speakes Japanes, French</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
