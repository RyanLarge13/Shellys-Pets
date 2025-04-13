import {
  Bugulug,
  Heiniger,
  LoviFood,
  NylaFood,
  TropiClean,
} from "../assets/logoBrands/logos.ts";

const IconBanner = () => {
  return (
    <section className="bg-purple-300 p-10 flex justify-evenly items-center gap-x-10">
      <img src={Bugulug} alt="logo" className="h-[30px] opacity-50" />
      <img src={NylaFood} alt="logo" className="h-[30px] opacity-50" />
      <img src={TropiClean} alt="logo" className="h-[30px] opacity-50" />
      <img src={Heiniger} alt="logo" className="h-[30px] opacity-50" />
      <img src={LoviFood} alt="logo" className="h-[30px] opacity-50" />
    </section>
  );
};

export default IconBanner;
