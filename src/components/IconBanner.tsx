import { useCallback, useEffect, useRef, useState } from "react";

import { Bugulug, Heiniger, LoviFood, NylaFood, TropiClean } from "../assets/logoBrands/logos.ts";

const IconBanner = () => {
  const [translation, setTranslation] = useState(0);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const trans = useCallback(() => {
    if (sliderRef1.current && sliderRef2.current) {
      const elem1 = sliderRef1.current as HTMLElement;
      const elem2 = sliderRef2.current as HTMLElement;

      if (elem1.getBoundingClientRect().right < -window.innerWidth) {
        console.log("reset elem 1");
        elem1.style.transition = "0ms linear";
        elem1.style.transform = `translateX(0px)`;
        elem1.style.transition = "500ms linear";
        setTranslation(0);
      } else {
        elem1.style.transform = `translateX(${translation}px)`;
      }

      if (elem2.getBoundingClientRect().right < -window.innerWidth * 2) {
        console.log("reset elem 2");
        elem2.style.transition = "0ms linear";
        elem2.style.transform = `translateX(0px)`;
        elem2.style.transition = "500ms linear";
        setTranslation(0);
      } else {
        elem2.style.transform = `translateX(${translation}px)`;
      }
      setTranslation((prev) => prev - 10);
    }
  }, [translation]);

  useEffect(() => {
    const interval = setInterval(() => {
      trans();
    }, 500);

    return () => clearInterval(interval);
  }, [translation, trans]);

  return (
    <section className="bg-purple-300 overflow-hidden flex justify-start items-center">
      <div
        ref={sliderRef1}
        className="p-10 duration-500 ease-linear min-w-full flex justify-evenly items-center gap-x-10"
      >
        <img src={Bugulug} alt="logo" className="h-[30px] opacity-50" />
        <img src={NylaFood} alt="logo" className="h-[30px] opacity-50" />
        <img src={TropiClean} alt="logo" className="h-[30px] opacity-50" />
        <img src={Heiniger} alt="logo" className="h-[30px] opacity-50" />
        <img src={LoviFood} alt="logo" className="h-[30px] opacity-50" />
      </div>
      <div
        ref={sliderRef2}
        className="p-10 ml-50 duration-500 ease-linear min-w-full flex justify-evenly items-center gap-x-10"
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
