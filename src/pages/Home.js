import Header from "../components/Header";
import Card from "../components/Card";
import Section from "../components/Section";
import Slid from "../components/Slid";
import SectionAbout from "../components/SectionAbout";
import Place from "../components/Place";
import Login from "../components/Login";
import Articles from "../components/Articles";
import Colab from "../components/Colab";
import Footer from "../components/Footer";

import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Card />
      <Section />
      <Slid />
      <SectionAbout />
      <Place />
      <Login />
      <Articles />
      <Colab />
      <Footer />
    </div>
  );
}
