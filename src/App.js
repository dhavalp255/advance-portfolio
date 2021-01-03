import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const scrollX = window.scrollX;

      if (scroll < 700) {
        appRef.current.style.transform = `translate(-${
          scroll * 7
        }px, ${scroll}px)`;
      }

      
    });
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Home />
    </div>
  );
}

export default App;
