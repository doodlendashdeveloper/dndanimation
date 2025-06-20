// Home.tsx

// import AnimationPage from "./AnimationPage/AnimationPage.tsx";
import React from "react";
import ContactUs from "./contact/ContactUs.tsx";
// import Footer from "./footer/Footer.tsx";
import Footertwo from "../components/footertwo/Footertow.tsx";
import Banner from "../components/banners/banner-one/Banner.tsx";
// import BannerTwo from "../components/banners/banner-two/BannerTwo.tsx";
import LetsTalk from "./letstalk/LetsTalk.tsx";
// import HomeTopSection from "../components/HomeTopSection.tsx";
// import Video from "../../src/assets/videos/video.mp4";
import Portfolio from "../components/portfolio/Portfolio.tsx";
import Herosection from "../components/hero/Herosection.tsx";
// import Bannerfive from "../components/banners/bannerthree/BannerFive.tsx";
import Bannerfour from "../components/banners/bannerfour/Bannerfour.tsx";
// import BannerThree from "../components/banners/banner-three/BannerThree.tsx";
import IdeasToLife from "../components/ideas-to-life/IdeasToLife.tsx";
import TopPic from "../components/toppic/TopPic.tsx";
const Home = ({ headerRef }) => {
  return (
    <div>
      {/* <HomeTopSection image={Video} /> */}

      <TopPic />
      <Herosection />
      <Bannerfour />
      {/* <BannerTwo /> */}

      {/* <BannerThree /> */}

      {/* <AnimationPage /> */}
      <Banner />
      <LetsTalk />
      <IdeasToLife />
      {/* <Bannerfive /> */}
      <Portfolio />

      <ContactUs />

      {/* <Footer /> */}
      <Footertwo scrollToRef={headerRef} />
    </div>
  );
};

export default Home;
