import { useEffect, useState } from "react";

function getWindowWidth() {
  if (typeof window === "undefined") {
    return 1024;
  }

  return window.innerWidth;
}

function useViewport() {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}

export default useViewport;