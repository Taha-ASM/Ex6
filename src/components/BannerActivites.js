import BannerAboutImage from "../image/img/bannerabout.png";
import React from "react";

export default function BannerActivites() {
  return (
    <div className="relative">
      <img src={BannerAboutImage} alt="Banner" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white">
        <p className="text-lg">
          <span className="text-white">Home > Activites</span>
        </p>
        <p className="text-4xl font-bold mt-2">Activites</p>
      </div>
    </div>
  );
}
