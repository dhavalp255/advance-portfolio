import React, { useEffect, useRef } from "react";

function HomeSvgLoding({ loding }) {
  const lodingRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const text = document.getElementById("text");

      text.innerHTML = `Loding... ${Math.floor(scroll / 7)}%`;

      lodingRef.current.style.transform = `translateX(${scroll * 7}px)`;
    });
  }, []);

  return (
    <svg
      ref={lodingRef}
      style={{
        position: "absolute",
        right: "2vw",
      }}
      width="140"
      height="31"
      viewBox="0 0 150 31"
    >
      <text
        id="Loding..._:_0_"
        data-name="Loding... : 0%"
        transform="translate(0 25)"
        fill="#ee3d11"
        font-size="23"
        font-family="SegoeUI, Segoe UI"
      >
        <tspan id="text" x="0" y="0">
          Loding... : 0%
        </tspan>
      </text>
    </svg>
  );
}

export default HomeSvgLoding;
