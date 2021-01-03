import React, { useEffect, useRef } from "react";

function HomeSvgLevel() {
  const levelRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      levelRef.current.style.transform = `translateX(${scroll * 7}px)`;
      const levelText = document.getElementById("levelText");

      if (scroll < 180) {
        levelText.innerHTML = "Home";
      } else if (519 > scroll && scroll > 181) {
        levelText.innerHTML = "My Skill";
      } else if (700 > scroll && scroll > 520) {
        levelText.innerHTML = "Contact Me";
      }
    });
  }, []);

  return (
    <svg
      style={{
        marginLeft: "2vw",
        position:'absolute'
      }}
      ref={levelRef}
      width="206"
      height="31"
      viewBox="0 0 206 31"
    >
      <text
        id="Level_:_Landing_Page"
        data-name="Level : Landing Page"
        transform="translate(0 25)"
        fill="#ee3d11"
        font-size="23"
        font-family="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0" id="levelText">
          Home
        </tspan>
      </text>
    </svg>
  );
}

export default HomeSvgLevel;
