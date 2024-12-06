import NavbarSimpl from "../components/NavbarSimpl";
import BannerActivities from "../components/BannerActivites";
import ActivitesImage from "../image/img/activities.png";
import Footer from "../components/Footer";

export default function Activities() {
  const Activities = [
    {
      tours: "12 Tours",
      title: "Serengeti National Park",
      img: ActivitesImage,
      textbutton: "Get to know",
    },
  ];

  const repeatedActivities = new Array(9).fill(Activities[0]);

  return (
    <div>
      <NavbarSimpl />
      <BannerActivities />
      <div className="bg-white">
        <div className="container py-20 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-10">
            {repeatedActivities.map((activity) => (
              <div className="activity-card relative">
                <img src={activity.img} alt={activity.title} />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex justify-between flex-col p-4">
                  <div className="py-10">
                    <h3 className="text-sm font-medium text-white mb-2">
                      {activity.tours}
                    </h3>
                    <p className="text-2xl font-semibold text-white mb-4">
                      {activity.title}
                    </p>
                  </div>
                  <button className="bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-100 w-44">
                    {activity.textbutton}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
