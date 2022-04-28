import "../styles/globals.css";
import { Nav } from "../components/Nav";
import { useState, useEffect, useCallback } from "react";

const useMediaQueryWidth = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

function MyApp({ Component, pageProps }) {
  const isSmall = useMediaQueryWidth(1024);

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {!isSmall ? (
        <>
          <Nav />
          <div className="absolute overflow-y-scroll right-0 w-[75%] h-[100%]">
            <Component {...pageProps} />
          </div>
        </>
      ) : (
        <div className=" grid place-items-center h-screen">
          <img className=" w-[40vw]" src="/mobile.jpg"></img>
        </div>
      )}
      <img
        className="cursor"
        src="/cursor.png"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
    </>
  );
}

export default MyApp;
