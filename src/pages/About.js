import NavbarSimpl from "../components/NavbarSimpl";
import BannerAbout from "../components/BannerAbout";
import CEO from "../components/CEO";
import Section from "../components/Section";
import Steps from "../components/Steps";
import Login from "../components/Login";
import Slid from "../components/Slid";
import Colab from "../components/Colab";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <NavbarSimpl />
      <BannerAbout />
      <CEO />
      <Section />
      <Steps />
      <Login />
      <Slid />
      <Colab />
      <Footer />
    </div>
  );
}
