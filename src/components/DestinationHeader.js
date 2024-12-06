import { useState } from "react";
import Slid from "./Slid";
import DestinationHeaderImage from "../image/img/destinationheader.png";
import TrendingImage from "../image/img/trending.png";
import ProfileImage from "../image/img/profile.png";
import itineraryOneImage from "../image/img/itineraryone.png";
import itineraryTwoImage from "../image/img/itinerarytwo.png";
import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";

export default function DestinationHeader() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="flex flex-col gap-10 justify-center">
          <img src={DestinationHeaderImage} alt="" />
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-7">
                <p className="text-[#155B50] font-semibold">Budgeted </p>
                <p className="text-black font-semibold">Free cancellation</p>
              </div>
              <div className="flex gap-7">
                <p className="text-black font-semibold">4.8 (269)</p>
                <p className="text-black font-semibold">30K+ booked</p>
              </div>
              <div className="flex gap-7">
                <p className="text-black font-semibold">Share</p>
                <p className="text-black font-semibold">Wishlist</p>
              </div>
            </div>
            <h1 className="text-[#05073C] text-5xl font-semibold">
              6 Days Wildlife Amaizing Experience in Wildness
            </h1>
            <div className="flex items-center justify-around w-9/12">
              <div>
                <p className="text-[#05073C] font-semibold">Duration </p>
                <p className="text-[#717171] font-semibold">3 days</p>
              </div>
              <div>
                <p className="text-[#05073C] font-semibold">Group Size</p>
                <p className="text-[#717171] font-semibold">10 people</p>
              </div>
              <div>
                <p className="text-[#05073C] font-semibold">Ages</p>
                <p className="text-[#717171] font-semibold">18-99 yrs</p>
              </div>
              <div>
                <p className="text-[#05073C] font-semibold">Languages</p>
                <p className="text-[#717171] font-semibold">
                  English, Japanese
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-6 mt-10 flex-1">
            <h1 className="text-black text-3xl font-bold">Tour Overview</h1>
            <div className="flex flex-col gap-6 mb-10">
              <p className="text-black">
                The Phi Phi archipelago is a must-visit while in Phuket, and
                this speedboat trip whisks you around the islands in one day.
                Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi
                Leh, snorkel at Bamboo Island, and visit Monkey Beach and Maya
                Bay, immortalized in "The Beach." Boat transfers, snacks, buffet
                lunch, snorkeling equipment, and Phuket hotel pickup and
                drop-off all included.
              </p>
              <h3 className="text-black font-semibold text-2xl">
                Tour Highlights
              </h3>
              <ul className="flex flex-col gap-2 text-black text-md">
                <li>
                  Experience the thrill of a speedboat to the stunning Phi Phi
                  Islands
                </li>
                <li>
                  Be amazed by the variety of marine life in the archepelago
                </li>
                <li>
                  Enjoy relaxing in paradise with white sand beaches and azure
                  turquoise water
                </li>
                <li>Feel the comfort of a tour limited to 35 passengers</li>
                <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
              </ul>
            </div>
            <hr />
            <div>
              <h1 className="text-black text-4xl font-bold">Itinerary</h1>
              <div className="border rounded-xl p-10 flex flex-col gap-5 mt-10">
                <p className="text-black font-semibold">
                  Day 1: Airport Pick Up
                </p>
                <p className="text-black">
                  Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet
                  Lunch by Big Boat cancellation policy: For a full refund,
                  cancel at least 24 hours in advance of the start date of the
                  experience. Discover and book Phang Nga Bay Sea Cave Canoeing
                  & James Bond Island w/ Buffet Lunch by Big Boat
                </p>
                <div className="flex gap-10">
                  <div className="flex items-center gap-5">
                    <img src={itineraryOneImage} alt="" />
                    <img src={itineraryTwoImage} alt="" />
                  </div>
                  <div className="bg-[#7C9C3F] w-2"></div>
                  <div className="text-black flex flex-col gap-5">
                    <div>
                      <p className="font-bold">Activities</p>
                      <p className="font-semibold">Canoying, Hunting,</p>
                    </div>
                    <div>
                      <p className="font-bold">Accomodations</p>
                      <p className="font-semibold">Burudika Camp & Lodges</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 my-10 text-black font-semibold">
                <p className="border p-5 rounded-xl">
                  Day 2: Lake Manyara National Park
                </p>
                <p className="border p-5 rounded-xl">
                  Day 3: Serengeti National Park
                </p>
                <p className="border p-5 rounded-xl">
                  Day 5: Central Serengeti
                </p>
                <p className="border p-5 rounded-xl">Day 6: Departure date</p>
              </div>
            </div>
            <hr />
            <h1 className="text-black text-3xl font-bold">What's included</h1>
            <div className="flex justify-between">
              <ul className="text-black flex flex-col gap-4">
                <li>Beverages, drinking water, morning tea and buffet lunch</li>
                <li>Local taxes</li>
                <li>Hotel pickup and drop-off by air-conditioned minivan</li>
                <li>InsuranceTransfer to a private pier</li>
                <li>Soft drinks</li>
                <li>Tour Guide</li>
              </ul>
              <ul className="text-black flex flex-col gap-4">
                <li>Towel</li>
                <li>Tips</li>
                <li>Alcoholic Beverages</li>
              </ul>
            </div>
            <hr />
            <h1 className="text-black text-3xl font-bold">Tour Map</h1>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27594.996384438808!2d-9.500785121118167!3d30.169293028115224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1722840208897!5m2!1sen!2sma"
                width="1000"
                height="600"
              ></iframe>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-black text-3xl font-bold">
                Customer Reviews
              </h1>
              <button className="border border-[#155B50] px-5 py-2 rounded-full text-[#155B50] hover:bg-[#155B50] hover:text-white ease-in duration-300">
                Write A Review
              </button>
            </div>
            <div className="flex flex-col gap-10 justify-between">
              <div className="flex flex-col gap-3 bg-[#EFF7F1] p-10 rounded-3xl">
                <div className="flex items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={ProfileImage} atl="" />
                    <p className="text-[#05073C]">Ali Tufan</p>
                  </div>
                  <div className="flex justify-between flex-1">
                    <p className="text-[#05073C]">4.8 (269)</p>
                    <p>April 2023</p>
                  </div>
                </div>
                <p className="text-[#05073C] font-semibold">
                  Take this tour! Its fantastic!
                </p>
                <p className="text-[#05073C]">
                  Great for 4-5 hours to explore. Really a lot to see and tons
                  of photo spots. Even have a passport for you to collect all
                  the stamps as a souvenir. Must see for a Harry Potter fan.
                </p>
                <div className="flex items-center gap-5">
                  <img src={itineraryOneImage} alt="" />
                  <img src={itineraryTwoImage} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[#EFF7F1] p-10 rounded-3xl">
                <div className="flex items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={ProfileImage} atl="" />
                    <p className="text-[#05073C]">Ali Tufan</p>
                  </div>
                  <div className="flex justify-between flex-1">
                    <p className="text-[#05073C]">4.8 (269)</p>
                    <p>April 2023</p>
                  </div>
                </div>
                <p className="text-[#05073C] font-semibold">
                  Take this tour! Its fantastic!
                </p>
                <p className="text-[#05073C]">
                  Great for 4-5 hours to explore. Really a lot to see and tons
                  of photo spots. Even have a passport for you to collect all
                  the stamps as a souvenir. Must see for a Harry Potter fan.
                </p>
                <div className="flex items-center gap-5">
                  <img src={itineraryOneImage} alt="" />
                  <img src={itineraryTwoImage} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[#EFF7F1] p-10 rounded-3xl">
                <div className="flex items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={ProfileImage} atl="" />
                    <p className="text-[#05073C]">Ali Tufan</p>
                  </div>
                  <div className="flex justify-between flex-1">
                    <p className="text-[#05073C]">4.8 (269)</p>
                    <p>April 2023</p>
                  </div>
                </div>
                <p className="text-[#05073C] font-semibold">
                  Take this tour! Its fantastic!
                </p>
                <p className="text-[#05073C]">
                  Great for 4-5 hours to explore. Really a lot to see and tons
                  of photo spots. Even have a passport for you to collect all
                  the stamps as a souvenir. Must see for a Harry Potter fan.
                </p>
                <div className="flex items-center gap-5">
                  <img src={itineraryOneImage} alt="" />
                  <img src={itineraryTwoImage} alt="" />
                </div>
              </div>
              <button className="border border-[#155B50] w-36 px-5 py-2 rounded-full text-[#155B50] hover:bg-[#155B50] hover:text-white ease-in duration-300">
                More Review
              </button>
            </div>
            <hr />
          </div>
          <div className="flex-1 flex  items-end flex-col">
            <div className="flex flex-col items-center">
              <div className="border rounded-3xl p-10">
                <p className="flex items-center gap-1 text-black">
                  From <h1 className="font-semibold text-xl">$1,200</h1>
                </p>
                <div className="my-6">
                  <div className="border py-3 pl-16 rounded-t-xl text-black">
                    <p className="font-semibold">From</p>
                    <p>February 05 ~ March 14</p>
                  </div>
                  <div className="border py-3 pl-16 rounded-b-xl text-black">
                    <p className="font-semibold">Time</p>
                    <p>Choose time</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-xl font-semibold">Tickets</h1>
                  <div className="flex flex-col gap-5 py-6 text-black">
                    <div className="flex items-center justify-between gap-6">
                      <p className="flex items-center gap-1">
                        Adult (18+ years){" "}
                        <p className="font-semibold">$282.00</p>
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountOne(countOne - 1)}
                          disabled={countOne === 0}
                        >
                          -
                        </button>
                        <p>{countOne}</p>
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountOne(countOne + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <p className="flex items-center gap-1">
                        Youth (13-17 years){" "}
                        <p className="font-semibold">$168.00</p>
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountTwo(countTwo - 1)}
                          disabled={countTwo === 0}
                        >
                          -
                        </button>
                        <p>{countTwo}</p>
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountTwo(countTwo + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="flex items-center gap-1">
                        Children (0-12 years){" "}
                        <p className="font-semibold">$80.00</p>
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountThree(countThree - 1)}
                          disabled={countThree === 0}
                        >
                          -
                        </button>
                        <p>{countThree}</p>
                        <button
                          className="border rounded-full w-7 h-7"
                          onClick={() => setCountThree(countThree + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-6">
                  <h1 className="text-black text-xl font-semibold">
                    Add Extra
                  </h1>
                  <div className="flex items-center justify-between text-black py-6">
                    <p>Pick up from Airport</p>
                    <p className="font-semibold">$25</p>
                  </div>
                </div>
                <hr />
                <div className="my-6 flex flex-col gap-4">
                  <h1 className="flex items-center justify-between text-black text-xl font-semibold">
                    Total:<p>$530.00</p>
                  </h1>
                  <button className="bg-[#7C9C3F] text-white w-full p-6 rounded-2xl">
                    Book Now
                  </button>
                </div>
              </div>
              <button className="border border-[#155B50] px-20 py-2 rounded-full my-6 text-[#155B50] hover:bg-[#155B50] hover:text-white ease-in duration-300">
                Download Itinerary Now
              </button>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-black">
                  Trending Tours
                </h1>
                <div className="relative">
                  <img
                    src={TrendingImage}
                    alt="Trending Tour"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 p-8">
                    <p className="text-white text-sm pb-2">Luxury Safari</p>
                    <h1 className="text-white text-lg font-bold">
                      6 Days Wildbeast Migration Safari
                    </h1>
                  </div>
                  <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-white text-black py-2 px-5 rounded-lg">
                    Book Tour Now
                  </button>
                </div>
                <div className="flex items-start justify-center mt-7 gap-10">
                  <button className="bg-white rounded-full p-2 shadow-lg">
                    <ArrowIcon className="w-5 h-5 transform rotate-180" />
                  </button>
                  <button className="bg-white rounded-full p-2 shadow-lg">
                    <ArrowIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slid />
      </div>
    </div>
  );
}
