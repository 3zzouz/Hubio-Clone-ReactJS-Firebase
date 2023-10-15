import React from "react";

function Footer() {
  return (
    <footer className="mx-auto my-[5vw] flex w-[90%] flex-wrap items-baseline justify-between space-y-10 text-xs font-medium leading-relaxed">
    <div className="space-y-5 sm:w-[30%]">
      <h2 className="mx-auto text-[1.5rem] xl:text-[2vw] font-bold uppercase text-[#e2386c] sm:ml-0">
        Hubio
      </h2>
      <p className="font-normal xl:text-[1.3vw]">
        Contact us
        <br />
        +216 27 160 699
        <br />
        contact@hubio.tn
      </p>
    </div>
    <div className="flex justify-between xl:w-[40%] space-x-3">
      <div className="w-[28%] space-y-5">
        <h2 className="text-[1.1rem] xl:text-[1.3vw] font-medium">About Us</h2>
        <p className="font-normal xl:text-[1vw]">HUBIO Study</p>
      </div>
      <div className="w-[28%] space-y-5">
        <h2 className="text-[1.1rem] xl:text-[1.3vw] font-medium">Terms & Conditions</h2>
        <p className="font-normal xl:text-[1vw]">
          Terms <br />
          Policy
        </p>
      </div>
      <div className="w-min space-y-5">
        <h2 className="text-[1.1rem] xl:text-[1.3vw] font-medium">Address</h2>
        <p className="font-normal xl:text-[1vw]">
          03, Rue habib bougatfa,Bab Saadoun,Tunis,
          <br />
          Tunisie
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
