import VisaImage from "../image/img/visa.png";
import MasterImage from "../image/img/master.png";
import PayImage from "../image/img/pay.png";
import PaypalImage from "../image/img/paypal.png";
import DiscoverImage from "../image/img/discover.png";
import AmexImage from "../image/img/amex.png";
import LogoImage from "../image/img/Logo.png";

export default function Footer() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="flex items-center justify-around">
          <h1 className="text-[#05073C] text-lg cursor-pointer">
            Speak to our expert at
            <span className="text-[#EB662B]"> +255 756 941 443</span>
          </h1>
          <p className="text-[#05073C] text-lg cursor-pointer">Follow Us</p>
        </div>
        <div className="flex items-center justify-around py-20">
          <div className="flex flex-col items-start gap-2">
            <img src={LogoImage} alt="" />
            <h1 className="text-[#05073C] text-xl">
              Serengeti Wildlife Safaris
            </h1>
            <p className="text-[#05073C] pb-4">
              3Best tour company accross africa{" "}
            </p>
            <p className="text-[#05073C]">info@serengetiwildlife Safaris</p>
          </div>
          <div className="flex items-center justify-between gap-20">
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-2xl font-semibold pb-3">
                Company
              </h1>
              <p className="text-black cursor-pointer">About Us</p>
              <p className="text-black cursor-pointer">Contact Us</p>
              <p className="text-black cursor-pointer">Data Policy</p>
              <p className="text-black cursor-pointer">Cookie Policy</p>
              <p className="text-black cursor-pointer">Legal</p>
              <p className="text-black cursor-pointer">Sitemap</p>
            </div>
            <div className="flex flex-col gap-1 pb-7">
              <h1 className="text-black text-2xl font-semibold pb-3">
                Support
              </h1>
              <p className="text-black cursor-pointer">Get in Touch</p>
              <p className="text-black cursor-pointer">Help center</p>
              <p className="text-black cursor-pointer">Live chat</p>
              <p className="text-black cursor-pointer">How it works</p>
              <p className="text-black cursor-pointer">Travel Guides</p>
            </div>
            <div className="flex flex-col gap-1 pb-20">
              <h1 className="text-black text-2xl font-semibold pb-3">
                Newsletter
              </h1>
              <p className="text-black pb-3">
                Subscribe to the free newsletter and stay up to date
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="px-6 py-2 bg-white border outline-none text-black"
                />
                <button className="text-black border-r border-t border-b rounded-r-lg py-2 px-6">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#05073C]">
            © Copyright Serengeti Wildlife Safari 2024
          </p>
          <div className="flex items-center">
            <img src={VisaImage} alt="" className="cursor-pointer" />
            <img src={MasterImage} alt="" className="cursor-pointer" />
            <img src={PayImage} alt="" className="cursor-pointer" />
            <img src={PaypalImage} alt="" className="cursor-pointer" />
            <img src={DiscoverImage} alt="" className="cursor-pointer" />
            <img src={AmexImage} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
