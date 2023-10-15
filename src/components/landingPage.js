import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
function LandingPage() {
  useEffect(() => {
    document.title = "Hubio";
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(auth.currentUser);
  console.log(auth?.currentUser);
  return (
    <section className="max-h-[100vh] overflow-hidden text-white">
      <div className="mx-auto flex items-center justify-between bg-transparent px-14 py-10">
        <h1 className="z-[100000] mx-auto text-[2rem] font-bold uppercase text-white sm:ml-0">
          <Link to="/">Hubio</Link>
        </h1>
        {!isLogged && (
          <nav className="z-[100000] hidden space-x-4 sm:flex">
            <button className="h-12 w-24 rounded-xl border border-white bg-[#51c9ff] text-base text-white drop-shadow-2xl">
              <Link to="/join">Join Us</Link>
            </button>
            <button className="h-12 w-24 rounded-xl bg-white text-[#51c9ff] drop-shadow-2xl">
              <Link to="/login">Login</Link>
            </button>
          </nav>
        )}
        {isLogged && (
          <nav className="z-[100000] hidden space-x-4 sm:flex">
            <button
              className="h-12 w-24 rounded-xl drop-shadow-2xl"
              onClick={() => {
                navigate("/User");
              }}
            >
              {auth?.currentUser?.photoURL ? (
                <img
                  src={auth?.currentUser?.photoURL}
                  alt="user"
                  className="mx-auto animate-bounce h-full rounded-full border"
                />
              ) : (
                <img
                  src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999"
                  alt=""
                  className="mx-auto animate-bounce h-full rounded-full border"
                />
              )}
            </button>
            <button
              onClick={() => {
                signOut(auth);
                setIsLogged(false);
              }}
              className="h-12 w-24 rounded-xl bg-white text-[#51c9ff] drop-shadow-2xl"
            >
              Log Out
            </button>
          </nav>
        )}
      </div>
      <h1 className="absolute left-[5%] z-[10000] mx-auto w-[90%] text-center text-4xl font-bold leading-relaxed sm:text-4xl md:text-5xl xl:text-6xl">
        The Ultimate Studying Partner
      </h1>
      <img
        className="absolute bottom-[1%] z-[-1] h-[100vh] min-w-[100vw]"
        alt="glow-effect"
        src="https://hubio-dev.web.app/Layer%205.9253412e.webp"
      />
      <img
        className="absolute bottom-[1%] h-[100vh] min-w-[100vw]"
        alt=""
        src="https://hubio-dev.web.app/Layer%205.9253412e.webp"
      />
      <div className="relative flex">
        <div className="relative h-[80vh] w-1/2">
          <button className="absolute right-[7%] top-[43%] rounded-lg border border-white p-3 text-lg transition-colors hover:bg-white hover:text-[#ff5f5f] focus:bg-white focus:text-[#ff5f5f] sm:right-[15%] sm:top-[20%] sm:px-5 sm:py-3 sm:text-xl lg:right-[8%] lg:py-4 lg:text-2xl lg:font-light">
            <Link to="/study">Hubio Study</Link>
          </button>
          <img
            src="https://hubio-dev.web.app/left%20brain%20shadow.307bc994.webp"
            alt="left-shadow"
            className="absolute -bottom-[2%] right-0 z-[500] opacity-90 sm:opacity-80 md:opacity-70"
          />
          <img
            src="https://hubio-dev.web.app/left%20brain%20shadow.307bc994.webp"
            alt="left-shadow"
            className="absolute -bottom-[2%] right-0 z-[500] opacity-90 sm:opacity-80 md:opacity-70"
          />
        </div>
        <div className="relative h-[80vh] w-1/2">
          <button className="absolute left-[7%] top-[43%] rounded-lg border border-white bg-white p-3 text-lg text-[#51c9ff] transition-colors hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white sm:left-[15%] sm:top-[20%] sm:px-5 sm:py-3 sm:text-xl lg:left-[8%] lg:py-4 lg:text-2xl lg:font-light">
            <Link to="/space">Hubio Space</Link>
          </button>
          <img
            src="https://hubio-dev.web.app/Right%20Brain%20shadow.25b4c85c.webp"
            alt="right-shadow"
            className="absolute -bottom-[2%] z-50 opacity-90 sm:opacity-80 md:opacity-70"
          />
          <img
            src="https://hubio-dev.web.app/Right%20Brain%20shadow.25b4c85c.webp"
            alt="right-shadow"
            className="absolute -bottom-[2%] z-50 opacity-90 sm:opacity-80 md:opacity-70"
          />
        </div>
        <img
          src="https://hubio-dev.web.app/Layer%203.9b28ae80.webp"
          alt="brain"
          className="animate-float4 absolute bottom-[10vw] left-0 right-0 mx-auto h-auto w-[11rem] sm:w-52 md:w-56 lg:w-60 xl:w-64"
        />
      </div>
      <div className="relative -top-[60.5rem] z-[-1] inline-block h-[calc(100vh+60rem)] w-[50vw] bg-[#ff5f5f]"></div>
      <div className="relative -top-[60rem] z-[-1] inline-block h-[calc(100vh+60rem)] w-[50vw] bg-[#51c9ff]"></div>
    </section>
  );
}

export default LandingPage;
