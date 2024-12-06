import AmazonImage from "../image/img/amazon.png";
import Amdmage from "../image/img/amd.png";
import DropCamImage from "../image/img/dropcam.png";
import LogitechImage from "../image/img/logitech.png";
import SpotifyImage from "../image/img/spotify.png";

export default function Colab() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <h1 className="text-black text-center text-lg">
          Trusted by the world'’'s best
        </h1>
        <div className="flex items-center justify-around pt-10">
          <img src={AmazonImage} alt="" className="w-28 h-auto" />
          <img src={Amdmage} alt="" className="w-28 h-auto" />
          <img
            src={DropCamImage}
            alt=""
            className="w-28 h-auto filter grayscale brightness-0"
          />
          <img src={LogitechImage} alt="" className="w-28 h-auto" />
          <img src={SpotifyImage} alt="" className="w-28 h-auto" />
        </div>
      </div>
    </div>
  );
}
