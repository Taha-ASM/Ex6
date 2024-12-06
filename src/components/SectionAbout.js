import { ReactComponent as DiamondIcon } from "../image/icon/diamond.svg.svg";
import { ReactComponent as AirBallonIcon } from "../image/icon/hot-air-balloon.svg.svg";
import { ReactComponent as TicketIcon } from "../image/icon/ticket.svg.svg";
import SectionAboutImage from "../image/img/sectionabout.png";

export default function SectionAbout() {
  const about = [
    {
      icon: TicketIcon,
      title: "Ultimate flexibility",
      text: "You're in control, with free cancellation and payment.",
    },
    {
      icon: AirBallonIcon,
      title: "Memorable experiences",
      text: "Browse and book tours and activities so incredible.",
    },
    {
      icon: DiamondIcon,
      title: "Quality at our core",
      text: "High quality standards. Millions of reviews.",
    },
  ];

  return (
    <div className="bg-white py-12 relative">
      <div className="container absolute top-0 left-0 right-0 bottom-0 bg-[#F0F5F1] rounded-lg z-0"></div>
      <div className="container relative z-10 flex items-start">
        <div className="flex-none w-96">
          <img
            src={SectionAboutImage}
            alt="Safari Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-grow bg-white p-10 rounded-lg ml-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Serengeti Wildlife Safaris
          </h2>
          <p className="text-gray-700 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the
            <br /> majority have suffered alteration in some form.
          </p>
          <p className="text-gray-700 mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the
            <br /> majority have suffered alteration in some form.
          </p>
          <a
            href="#"
            className="bg-[#7C9C3F] text-white py-5 px-4 w-52 text-center rounded-md"
          >
            More About Us
          </a>
        </div>
      </div>
      <div className="container relative z-10 flex items-center mt-10 gap-8">
        {about.map((i, index) => (
          <div
            key={index}
            className="bg-white border-2 w-72 h-60 py-10 px-7 rounded-xl"
          >
            <i.icon className="mb-4 h-12 w-12 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {i.title}
            </h3>
            <p className="text-gray-700">{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
