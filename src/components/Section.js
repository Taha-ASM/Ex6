import React from "react";
import { ReactComponent as TowerIcon } from "../image/icon/tower.svg";
import { ReactComponent as BankIcon } from "../image/icon/bank.svg";

export default function Section() {
  const data = [
    {
      icon: BankIcon,
      title: "Cultural Tours",
      text: "100+ Tours",
    },
  ];

  const datas = [
    {
      icon: TowerIcon,
      title: "Honeymoon Tours",
      text: "100+ Tours",
    },
    ...Array(5).fill(data[0]),
  ];

  return (
    <div className="bg-[#C2E0CB] py-20">
      <div className="container mx-auto flex flex-wrap gap-20">
        <div className="flex-1 flex flex-col gap-10 max-w-md">
          <h1 className="text-[#05073C] text-4xl font-bold">
            Popular things to do
          </h1>
          <p className="text-[#05073C] text-lg">
            There are many variations of passages of Lorem Ipsum
            <br /> available, but the majority have suffered alteration in some
            <br /> form.
          </p>
          <button className="px-10 py-4 text-white rounded-lg bg-[#7C9C3F]">
            See All
          </button>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((i, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col"
            >
              <div className="flex items-center justify-center py-5 px-5 mx-28 my-6 bg-[#C2E0CB] rounded-full">
                <i.icon className="w-10 h-10 text-[#7C9C3F]" />
              </div>

              <div className="pb-5 text-center">
                <h1 className="text-xl font-semibold text-[#05073C]">
                  {i.title}
                </h1>
                <p className="text-[#7C9C3F]">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
