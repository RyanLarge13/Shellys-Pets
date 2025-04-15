import { useState, useEffect } from "react";
import {
  Bugulug,
  Heiniger,
  LoviFood,
  NylaFood,
  TropiClean
} from "../assets/logoBrands/logos.ts";

const IconBanner = () => {
  const [translation, setTranslation] = useState(0);

  useEffect(() => {
    setInterval(() => {
      trans();
    }, 500);
  }, []);

  const trans = () => {
    setTranslation(prev => {
      if (Math.abs(prev - 10) < window.innerWidth) {
        return prev - 10;
      } else {
        return 0;
      }
    });
  };

  return (
    <section className="bg-purple-300 p-10 overflow-hidden flex justify-start items-center">
      <div
        style={{ transform: `translateX(${translation}px)` }}
        className="min-w-full flex justify-evenly ease-linear duration-[500ms] items-center gap-x-10"
      >
        <img src={Bugulug} alt="logo" className="h-[30px] opacity-50" />
        <img src={NylaFood} alt="logo" className="h-[30px] opacity-50" />
        <img src={TropiClean} alt="logo" className="h-[30px] opacity-50" />
        <img src={Heiniger} alt="logo" className="h-[30px] opacity-50" />
        <img src={LoviFood} alt="logo" className="h-[30px] opacity-50" />
      </div>
      <div
        style={{ transform: `translateX(${translation}px)` }}
        className="min-w-full flex justify-evenly ease-linear duration-[500ms] items-center gap-x-10"
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
