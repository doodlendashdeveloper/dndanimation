// Home.tsx

import AnimationPage from "./AnimationPage/AnimationPage.tsx";
import ContactUs from "./contact/ContactUs.tsx";
import Footer from "./footer/Footer.tsx";
// import Banner from "../components/banners/banner-one/Banner.tsx";
import BannerTwo from "../components/banners/banner-two/BannerTwo.tsx";
import LetsTalk from "./letstalk/LetsTalk.tsx";
// import HomeTopSection from "../components/HomeTopSection.tsx";
// import Video from "../../src/assets/videos/video.mp4";
import Portfolio from "../components/portfolio/Portfolio.tsx";
import Herosection from "../components/hero/Herosection.tsx";
// import BannerThree from "../components/banners/banner-three/BannerThree.tsx";
const Home = () => {
  return (
    <div>
      {/* <HomeTopSection image={Video} /> */}
      <Herosection />
      <BannerTwo />

      {/* <BannerThree /> */}
      <AnimationPage />
      {/* <Banner /> */}

      <Portfolio />

      <LetsTalk />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Home;
