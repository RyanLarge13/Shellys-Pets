import { useCallback, useEffect, useRef, useState } from "react";

import { Bugulug, Heiniger, LoviFood, NylaFood, TropiClean } from "../assets/logoBrands/logos.ts";

const IconBanner = () => {
  const [translation1, setTranslation1] = useState(0);
  const [translation2, setTranslation2] = useState(0);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const trans = useCallback(() => {
    if (sliderRef1.current && sliderRef2.current) {
      const elem1 = sliderRef1.current as HTMLElement;
      const elem2 = sliderRef2.current as HTMLElement;

      const elem1Right = elem1.getBoundingClientRect().right;
      const elem2Right = elem2.getBoundingClientRect().right;

      if (elem1Right <= 0) {
        elem1.style.transition = "none";
        elem1.style.transform = `translateX(${0 + window.innerWidth}px)`;
        setTranslation1(elem2.getBoundingClientRect().width);

        // Wait until right before smooth animations are needed again before resetting
        setTimeout(() => {
          elem1.style.transition = "500ms linear";
        }, 499);
      } else {
        elem1.style.transform = `translateX(${translation1}px)`;
      }

      if (elem2Right <= 0) {
        elem2.style.transition = "none";
        elem2.style.transform = `translateX(0px)`;
        setTranslation2(0);

        // Wait until right before smooth animations are needed again before resetting
        setTimeout(() => {
          elem2.style.transition = "500ms linear";
        }, 499);
      } else {
        elem2.style.transform = `translateX(${translation2}px)`;
      }
      setTranslation1((prev) => prev - 10);
      setTranslation2((prev) => prev - 10);
    }
  }, [translation1, translation2]);

  useEffect(() => {
    const interval = setInterval(() => {
      trans();
    }, 500);

    return () => clearInterval(interval);
  }, [translation1, translation2, trans]);

  return (
    <section className="bg-purple-300 overflow-hidden flex justify-start items-center relative">
      {/* Decorative element for fading icons in and out of view gently */}
      <div className="icon-banner-side-shadow"></div>
      <div
        ref={sliderRef1}
        className="min-w-max duration-500 ease-linear flex justify-start items-center gap-10 p-10"
      >
        <img src={Bugulug} alt="logo" className="h-[30px] opacity-50" />
        <img src={NylaFood} alt="logo" className="h-[30px] opacity-50" />
        <img src={TropiClean} alt="logo" className="h-[30px] opacity-50" />
        <img src={Heiniger} alt="logo" className="h-[30px] opacity-50" />
        <img src={LoviFood} alt="logo" className="h-[30px] opacity-50" />
      </div>
      <div
        ref={sliderRef2}
        className="duration-500 min-w-max ease-linear flex justify-start items-center gap-10 p-10 pl-0"
      >
        <img src={Bugulug} alt="logo" className="h-[30px] opacity-50" />
        <img src={NylaFood} alt="logo" className="h-[30px] opacity-50" />
        <img src={TropiClean} alt="logo" className="h-[30px] opacity-50" />
        <img src={Heiniger} alt="logo" className="h-[30px] opacity-50" />
        <img src={LoviFood} alt="logo" className="h-[30px] opacity-50" />
      </div>
    </section>
  );
};

export default IconBanner;
