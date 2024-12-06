import LogoImage from "../image/img/Logo.png";

export default function Navbar() {
  return (
    <div className="bg-white py-4 my-10 mx-10 rounded-full">
      <nav className="container flex items-center justify-between">
        <div>
          <a href="./home">
            <img src={LogoImage} alt="" />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <a href="./home" className="Active text-black">
              <li>Home</li>
            </a>
            <a href="./About" className="text-[#155B50]">
              <li>About</li>
            </a>
            <a href="./Tour" className="text-[#155B50]">
              <li>Tour</li>
            </a>
            <a href="./Destinations" className="text-[#155B50]">
              <li>Destinations</li>
            </a>
            <a href="./Activities" className="text-[#155B50]">
              <li>Activities</li>
            </a>
            <a href="./Blog" className="text-[#155B50]">
              <li>Blog</li>
            </a>
          </ul>
        </div>
        <div>
          <button className="text-[#155B50] border border-[#155B50] py-3 px-6 rounded-full hover:bg-[#155B50] hover:text-white ease-in duration-300">
            Tailor Made
          </button>
        </div>
      </nav>
    </div>
  );
}
