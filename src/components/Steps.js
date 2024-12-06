import { ReactComponent as DiamondIcon } from "../image/icon/diamond.svg.svg";
import { ReactComponent as AirBallonIcon } from "../image/icon/hot-air-balloon.svg.svg";
import { ReactComponent as TicketIcon } from "../image/icon/ticket.svg.svg";

export default function Steps() {
  const about = [
    {
      icon: DiamondIcon,
      title: "Quality at our core",
      text: "High quality standards. Millions of reviews.",
    },
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
  ];
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="container flex items-center justify-around mt-10 gap-8">
          {about.map((i, index) => (
            <div className="bg-white w-72 h-60 py-10 px-7 rounded-xl">
              <i.icon className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {i.title}
              </h3>
              <p className="text-gray-700">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
