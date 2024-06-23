import React from "react";
import Intro from "../../Components/Intro/Intro";
import Search from "../../Components/Search/Search";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <br />
      <br />
      <Search />
      <Footer />
    </>
  );
};

export default Home;
