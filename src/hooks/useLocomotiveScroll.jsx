import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        getDirection: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      setScrollInstance(scroll);

      const handleResize = () => {
        scroll.update();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        scroll.destroy();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [scrollRef]);

  return { scrollRef, scrollInstance };
};
