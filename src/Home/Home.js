import React, { useEffect, useRef } from "react";
import "./Home.css";
import HomeSvg from "./HomeSvg";
import HomeSvgCharacter from "./HomeCharacter/HomeSvgCharacter";
import HomeSvgStart from "./HomeCharacter/HomeSvgStart";
import HomeSvgScroll from "./HomeCharacter/HomeSvgScroll";
import AboutSvgMech from "../About/AboutSvgMech";
import AboutSvgFull from "../About/AboutSvgFull";
import HomeSvgLevel from "./HomeCharacter/HomeSvgLevel";
import HomeSvgLoding from "./HomeCharacter/HomeSvgLoding";
import AboutSvgHtml from "../About/AboutSvgHtml";
import AboutSvgReact from "../About/AboutSvgReact";
import AboutSvgSeo from "../About/AboutSvgSeo";
import StartSvgOne from "../start/StartSvgOne";
import StartSvgTwo from "../start/StartSvgTwo";
import StartSvgThree from "../start/StartSvgThree";
import ContactSvgPlante from "../contact/ContactSvgPlante";
import Contact from "../contact/Contact";

function Home() {


  // const homeRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scroll = window.scrollY;
     

  //     // console.log(scroll);
  //   });
  // }, []);

  return (
    <div className="home" >
      <div className="home__svgBase">
        <HomeSvg />
        <HomeSvg />
        <HomeSvg />
        <HomeSvg />
      </div>
      <HomeSvgLevel/>
      <HomeSvgLoding/>
      <HomeSvgCharacter />
      <HomeSvgStart />
      <HomeSvgScroll />


      <AboutSvgMech/>
      <AboutSvgFull/>

      <AboutSvgHtml/>
      <AboutSvgReact/>
      <AboutSvgSeo/>

      <StartSvgOne/>
      <StartSvgTwo/>
      <StartSvgThree/>

      <ContactSvgPlante/>

        <Contact/>
      
    </div>
  );
}

export default Home;
