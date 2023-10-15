import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FisrstSpaceSlider from "./FisrstSpaceSlider";
import SecondSpaceSlider from "./SecondSpaceSlider";
import ThirdSpaceSwiper from "./ThirdSpaceSwiper";
import { Link } from "react-router-dom";
import { Link as Lien } from "react-scroll";
import { auth } from "../config/firebase";
function Space() {
  const Info = [
    {
      url: "https://hubio-dev.web.app/stadying.8f8d9465.webp",
      title: "Studying Rooms",
    },
    {
      url: "https://hubio-dev.web.app/outdoor.602dc058.webp",
      title: "Outdoor Area",
    },
    {
      url: "https://hubio-dev.web.app/coffee%20and%20sandwich.0b3730fe.webp",
      title: "Coffee & Sandwich Bar",
    },
  ];
  const [isInView, setIsInView] = useState(false);
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  };
  console.log(auth.currentUser)
  var loadingFinalWidth = 100;
  if (window.innerWidth >= 768) loadingFinalWidth = 176;
  const loadingInitialWidth = 15;
  useEffect(() => {
    document.title = "Hubio Space";
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 1,
    });

    const targetElement = document.querySelector(".loading-bar");
    if (targetElement) {
      observer.observe(targetElement);
    }

    // Cleanup the observer
    return () => {
      observer.disconnect();
    };
  }, []);
  const elementRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth > 600) {
          if (!entry.isIntersecting) {
            // Element is not visible, hide it
            entry.target.style.display = "none";
          } else {
            // Element is visible, show it
            entry.target.style.display = "block";
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  return (
    <div>
      <section
        ref={elementRef}
        className="mx-auto h-screen w-[100vw] snap-end overflow-hidden bg-[#51c9ff] p-0"
      >
        <div className="mx-auto -mb-8 flex items-center justify-between px-14 pt-8 sm:py-10 ">
          <h1 className="z-[100] mx-auto text-[2rem] font-bold uppercase text-white sm:ml-0">
            <Link to="/">Hubio</Link>
          </h1>
          <nav className="z-[100] hidden space-x-4 sm:flex">
            <button className="h-12 w-24 rounded-xl border border-white bg-[#51c9ff] text-base text-white drop-shadow-2xl">
              <Link to={auth.currentUser==null ? "/join" : "/User"}>
                Join Us
              </Link>
            </button>
            <button className="h-12 w-24 rounded-xl bg-white text-blue-500 drop-shadow-2xl">
              <Link to={auth.currentUser==null ? "/login":"/User"}>Login</Link>
            </button>
          </nav>
        </div>
        <div className="mx-auto flex h-4/5 w-full max-w-sm flex-col  sm:max-w-full sm:flex-row sm:justify-between">
          <div className="relative left-0 right-0 mx-auto block h-3/5 w-full  sm:mr-0 sm:mt-[15vh] sm:h-[90%] sm:w-[22rem] lg:w-96 xl:w-[45rem] ">
            <img
              src="https://hubio-dev.web.app/Sans-titre-_4_.89c09d79.webp"
              alt="hubio cup"
              className="animate-float4 absolute -right-[12rem] top-0 z-20 min-w-[40rem] -translate-x-1/2 -translate-y-1/2 md:min-w-[43rem] lg:min-w-[45rem] xl:top-20"
            />
            <img
              src="https://hubio-dev.web.app/Loading-coffee-shadow.434373d3.webp"
              alt="shadow"
              className="absolute bottom-[5rem] hidden h-full w-80 lg:-bottom-20  lg:inline-block lg:w-[400px] xl:-bottom-40 xl:left-60"
            />
            <img
              src="https://hubio-dev.web.app/Calque%2017.6c108bcd.webp"
              alt="glace"
              className="animate-float4 absolute right-[12rem] top-0 z-[19] !w-[8.3rem] -translate-x-1/2 -translate-y-1/2 md:-top-24 md:!w-[10.5rem] lg:!w-[12rem]"
            />
            <img
              src="https://hubio-dev.web.app/Layer-9-copy.e3fa540f.webp"
              alt="cokkies left"
              className="animate-float3 absolute bottom-[10%] right-[65%] !w-24 sm:bottom-[38%] md:bottom-[41%] md:!w-32 xl:left-80 "
            />
            <img
              src="https://hubio-dev.web.app/Layer-9-copy.e3fa540f.webp"
              alt="cookies right"
              className="animate-float3 absolute right-6 top-[15%] z-[19] !w-[10rem] sm:right-0 sm:top-[2%] sm:!w-24 md:!w-32 lg:top-[15%]"
            />
          </div>
          <div className="relative flex h-2/5 flex-col items-center justify-center text-center sm:h-full sm:w-[55%] ">
            <img
              src="https://hubio-dev.web.app/Cozy.891664d2.png"
              alt="cozy"
              className="lg:left-30 absolute left-8 top-14 z-30 w-32 sm:left-11 sm:top-[30%] sm:w-[25vw] md:top-[45%] md:w-[15vw] xl:left-[15%] xl:top-[40%]"
            />
            <h1 className="animate-fadeout absolute -top-4 text-[4rem] font-bold text-white text-opacity-40 sm:-left-[23rem] sm:top-0 sm:text-[9rem] lg:-left-[31rem] lg:-top-[5rem] lg:text-[13rem] xl:left-[-80%] xl:top-[-5rem] xl:text-[16rem]">
              StudySpot
            </h1>
            <h1 className="absolute top-10 z-20 text-5xl font-bold text-violet-100 sm:left-9 sm:top-1/3 sm:text-[3.5rem] md:left-0 md:text-[4.8rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              Find Your StudySpot
            </h1>
            <div className="absolute -bottom-14 flex flex-col items-center space-y-2 sm:bottom-1/4 sm:left-1/3 md:bottom-[5%] lg:left-[40%]">
              <p className="text-2xl font-light tracking-wide text-white">
                Scroll Down
              </p>
              <KeyboardArrowDownIcon
                fontSize="large"
                className="animate-float2 text-white"
              />
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="relative">
          <div className="relative h-[50vh] bg-[url('https://hubio-dev.web.app/20211204_124934.898c2d47.webp')] bg-cover bg-bottom before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[rgb(0,0,0,0.5)] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]">
            <div className="relative mx-auto flex items-center justify-between px-10 py-12 sm:pb-2 lg:px-14">
              <h1 className="mx-auto text-[2rem] font-bold uppercase text-white sm:-ml-1">
                <Link to="/">Hubio</Link>
              </h1>
              <nav className="hidden w-full items-center sm:flex sm:flex-row-reverse">
                <div className="ml-3 flex items-center space-x-3 text-sm md:ml-10 md:space-x-5 md:text-base">
                  <button className="h-10 w-20 rounded-xl bg-[#51c9ff] text-base text-white drop-shadow-2xl md:h-12 md:w-24">
                    <Link to={auth.currentUser==null ? "/join":"/User"}>Join Us</Link>
                  </button>
                  <button className="h-10 w-20 rounded-xl bg-white text-[#51c9ff] drop-shadow-2xl md:h-12 md:w-24">
                    <Link to={auth.currentUser==null ? "/login":"/User"}>Login</Link>
                  </button>
                </div>
                <div className="flex space-x-3 text-sm text-white md:space-x-5 md:text-base">
                  <Lien
                    to="contactus"
                    className="cursor-pointer"
                    smooth={true}
                    duration={500}
                  >
                    Contact Us
                  </Lien>
                  <Lien
                    to="aboutus"
                    className="cursor-pointer"
                    smooth={true}
                    duration={1500}
                  >
                    About Us
                  </Lien>
                  <Lien
                    to="pricing"
                    className="cursor-pointer"
                    smooth={true}
                    duration={1700}
                  >
                    Pricing
                  </Lien>
                </div>
              </nav>
            </div>
            <h1 className="relative mx-auto h-1/4 text-center text-2xl font-bold text-white sm:text-4xl md:w-1/2 md:text-5xl lg:mt-4 lg:text-6xl">
              Find Your Cozy StudySpot
            </h1>
            <div
              className={`loading-bar relative ${
                isInView ? "animate-barappear" : ""
              } mx-auto -mt-3 h-2 bg-white sm:mt-0 md:mt-6`}
              style={{
                maxWidth: isInView ? loadingFinalWidth : loadingInitialWidth,
              }}
            ></div>
            <svg
              className="xs:block absolute -bottom-5 hidden w-[100%] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,122.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div
            id="aboutus"
            className=" mx-auto relative z-[100] flex flex-col sm:flex-row-reverse lg:w-[90vw]"
          >
            <div className="xs:w-[22rem] relative mx-auto mt-5 h-fit w-72 sm:min-w-[40%] md:ml-auto md:mt-9 md:min-w-[394px] lg:w-[42vw] lg:max-w-[28rem] xl:min-w-[31.5rem]">
              <img
                src="https://hubio-dev.web.app/Space%20Avatar.0de19aa9.webp"
                alt="man"
                className="mx-auto h-auto"
              />
              <img
                src="https://hubio-dev.web.app/Layer%204.f0010457.webp"
                alt="notebook"
                className="animate-float4 absolute -left-[5%] top-[10%] w-[35%] lg:left-[0%] lg:top-[10%] xl:left-[20%] xl:w-[26%]"
              />
              <img
                src="https://hubio-dev.web.app/Ellipse%201%20copy.dc1cfc76.webp"
                alt="ring"
                className="animate-rotation absolute right-10 top-0 z-[-1] w-[70%] lg:right-[15%] lg:top-0"
              />
              <img
                src="https://hubio-dev.web.app/Shadow%202.dc1533c5.webp"
                alt="shadow"
                className="xs:bottom-4 absolute bottom-3 sm:bottom-[5%] md:bottom-[6%]"
              />
            </div>
            <div className="mx-auto flex flex-col text-center sm:ml-6 sm:w-[60%] md:ml-14 lg:ml-20 lg:w-1/2 lg:items-start ">
              <img
                src="https://hubio-dev.web.app/Ahna%20Chkoun.113fc456.png"
                alt="ahna chkoun"
                className="-mb-6 ml-4 w-[48vw] !max-w-[14rem] sm:w-[31vw] md:min-w-[28vw]"
              />
              <h1 className="mb-4 max-w-[95vw] text-left text-2xl font-bold leading-relaxed sm:ml-4 sm:text-4xl md:w-[110%] md:text-5xl lg:text-6xl">
                What is Hubio
              </h1>
              <p className="xs:w-[60vw] mb-4 w-[70vw] font-extralight sm:w-[75%] sm:text-left md:w-[90%] md:text-xl md:leading-relaxed lg:w-[35vw]">
                HUBIO creates conductive studying spaces{" "}
                <b>specially crafted for students</b> to help them go further,
                faster by building a positive community dreaming of a better
                tomorrow.
              </p>
            </div>
          </div>
        </section>
        <div className='z-100 mx-auto my-16 flex h-14 w-64 cursor-pointer flex-row-reverse justify-between rounded-2xl bg-gradient-to-b from-blue-500 to-[#51c9ff] font-["Lato"] text-xl sm:w-72'>
          <button className="my-auto mr-1 h-[90%] w-[50%] rounded-xl bg-white px-2 text-blue-600">
            <Link to="/space">Hubio Space</Link>
          </button>
          <button className="mx-auto text-white">
            <Link to="/study">Hubio Study</Link>
          </button>
        </div>
        <h3 className="mx-auto mb-10 text-center text-3xl font-medium">
          What do we offer
        </h3>
        <div className="mx-auto mb-24 flex w-[90%] max-w-[65rem] flex-col gap-4 text-base font-extralight sm:w-full sm:flex-row sm:gap-7 sm:px-12">
          <img
            className="absolute right-0 top-[125%] z-[-1]"
            src="https://hubio-dev.web.app/Objet%20dynamique%20vectoriel%20copie%203.911c281d.webp"
            alt="blur"
          />
          {Info.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="mx-auto flex w-64 items-center justify-around rounded-2xl bg-white py-2 drop-shadow-xl sm:w-[30%]  sm:drop-shadow-2xl"
            >
              <img
                src={card.url}
                alt=""
                className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <h1 className="text-center text-xs font-medium sm:text-sm md:text-base">
                {card.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col sm:flex-row">
          <div className="relative flex flex-col sm:items-start ">
            <img
              src="https://hubio-dev.web.app/Hkeyetna.6ae56803.png"
              alt="hkeyetna"
              className="xs:-top-[25%] absolute  -top-[18%] right-[20%] w-[23.5vw] sm:-top-[17%] sm:right-[35%] sm:w-[11.25vw]"
            />
            <h1 className="mx-auto text-center text-4xl font-bold sm:ml-[5vw] sm:text-left sm:text-[3rem]">
              Our Story
            </h1>
            <p className="mx-auto mt-7 w-4/5 text-center font-light leading-relaxed sm:ml-[5vw] sm:w-[36vw] sm:text-left lg:text-lg">
              Where to study today ? Library or coffee shop ? That's the
              students' dilemma in Tunisia. Going through the eternal struggle
              of finding spaces dedicated for students to help them focus on
              their study sessions away from unwanted destruction made us pause
              and ask ourselves: "why not both ?"
            </p>
          </div>
          <img
            src="https://hubio-dev.web.app/Benefits-back.5697d192.webp"
            alt=""
            className="mx-auto mt-10 h-fit w-[61vw] rounded-lg sm:mt-0 sm:w-[40vw]"
          />
        </div>
        <div className="mx-auto mt-4 flex w-[90%] flex-col sm:mt-28 sm:flex-row-reverse xl:px-20">
          <div className="items-end sm:flex sm:w-[60vw] sm:flex-col sm:pr-8">
            <div className="-mb-14 hidden h-2 w-16 bg-[rgb(39,137,224)] sm:block"></div>
            <h3 className="mx-auto mt-20 w-[54.5vw] text-center text-2xl leading-loose sm:mx-0 sm:w-[36vw] sm:text-right sm:font-medium md:text-4xl">
              Create a healthier workplace
            </h3>
            <p className="mx-auto mt-6 w-[73vw] text-center font-extralight sm:mx-0 sm:w-[36vw] sm:text-right sm:text-sm sm:font-light md:text-base lg:text-lg lg:leading-relaxed">
              To keep a healthy environment that contributes in maximizing your
              productivity, the little owl decided to keep its nest smoking free
              and created a wonderful smoking area with a green corner to make
              you enjoy your rest after an intensive studying session.
            </p>
          </div>
          <img
            src="https://hubio-dev.web.app/student-yellow.4556af3e.webp"
            alt=""
            className="mx-auto mt-16 h-fit w-[50vw] max-w-[21rem] sm:mt-10 sm:w-[35vw] md:mt-0 lg:w-[26vw] lg:max-w-none"
          />
        </div>
        <div className="mx-auto mb-[60vw] mt-4 flex w-[90%] flex-col sm:mb-[20vw] sm:mt-28 sm:flex-row lg:px-16 xl:px-20">
          <div className="items-start sm:flex sm:w-[45vw] sm:flex-col sm:pr-8">
            <div className="-mb-14 hidden h-2 w-16 bg-[rgb(39,137,224)] sm:block"></div>
            <h3 className="mx-auto mt-20 w-[54.5vw] text-center text-2xl leading-loose sm:mx-0 sm:w-[36vw] sm:text-left sm:font-medium md:text-4xl lg:mb-5 lg:mt-24 lg:text-5xl">
              Your reliable dealer of Caffeine
            </h3>
            <p className="mx-auto mt-6 w-[73vw] text-center font-extralight sm:mx-0 sm:w-[36vw] sm:text-left sm:text-sm sm:font-light md:text-base md:leading-relaxed lg:text-lg">
              It is no secret that caffeine helps you study. In fact, it is used
              as the number one “smart drug” by students everywhere. And it
              happens that we are a very reliable dealer.
            </p>
          </div>
          <div className="relative mx-auto mt-10 h-max w-[65%] sm:-mt-10 sm:w-[45vw] lg:w-[40vw] xl:-mt-20">
            <img
              src="https://hubio-dev.web.app/Calque%2017.6c108bcd.webp"
              alt="milkshake"
              className="animate-float4 absolute left-[20%] h-auto w-[37%]"
            />
            <img
              src="https://hubio-dev.web.app/coffee.88f22e84.webp"
              alt="cup"
              className="animate-float2 absolute left-[25%] top-[22vw] z-[-1] h-auto w-[75%] lg:top-[15vw]"
            />
            <img
              src="https://hubio-dev.web.app/Objet%20dynamique%20vectoriel1.11d2842c.webp"
              alt="left"
              className="absolute left-0 z-[-2] w-[40%] -rotate-[35deg] sm:h-[38vw] lg:-bottom-[33vw]"
            />
            <img
              src="https://hubio-dev.web.app/Objet%20dynamique%20vectoriel.818eed33.webp"
              alt="right"
              className="absolute right-[20%] top-[15vw] z-[-2] h-auto w-[30%] rotate-[70deg] lg:top-[10vw]"
            />
            <img
              src="https://hubio-dev.web.app/Calque%2018.85331e6d.webp"
              alt="shadow"
              className="absolute -bottom-[58vw] -left-[10%] sm:-bottom-[46vw] lg:-bottom-[38vw]"
            />
          </div>
        </div>
        <div className="relative h-[30vh] border sm:h-[90vh]">
          <img
            src="https://hubio-dev.web.app/Space%20Parallax.3e0e5566.webp"
            alt=""
            className="absolute h-full w-full brightness-75 contrast-125 saturate-100 filter"
          />
          <img
            src="https://hubio-dev.web.app/Study%20differently.27a8e1a0.png"
            alt=""
            className="absolute left-[20%] top-[30%] w-[60%] sm:left-[30%] sm:top-[45%] sm:w-[40%]"
          />
        </div>
        <h3 className="mx-auto mt-16 text-center text-[1.3rem] font-medium sm:text-2xl md:text-4xl lg:w-[40%] lg:text-[2.5vw]">
          Benefits of Learning with Hubio
        </h3>
        <div className="mx-auto mb-8 mt-1 hidden h-1 w-16 bg-[rgb(39,137,224)] sm:block"></div>
      </main>
      <FisrstSpaceSlider />
      <div className="mt-28 flex flex-col-reverse sm:flex-row">
        <div className="relative mx-auto my-[20vw] h-fit w-[55vw] sm:mt-[10vw] sm:w-[40%]">
          <img
            src="https://hubio-dev.web.app/laptop-3.796ba606.webp"
            alt="laptop"
            className="absolute !w-[120%]"
          />
          <img
            src="https://hubio-dev.web.app/Books.I15.2k.27268e60.webp"
            alt="books"
            className="absolute right-0 z-[-1] w-1/2"
          />
          <img
            src="https://hubio-dev.web.app/Objet%20dynamique%20vectoriel.818eed33.webp"
            alt="left"
            className="absolute left-0 z-[-1] w-[35%]"
          />
          <svg
            id="leaf1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1483.97 1744.14"
            className="absolute -bottom-[20vw] right-0 z-[-2] w-1/2"
          >
            <path
              d="M2136.3,1267.84c-1.14-8.48-4-18.47-12.06-22.91-7.75-4.28-16.33-1-21.62,5.47-6.83,8.37-6.5,18.92-4,28.92,3.55,14.06,8.38,26.89,9.2,41.59a122.18,122.18,0,0,1-3.54,36.77,165.28,165.28,0,0,1-22.83,24c-43.31,37.41-101.9,47.67-157.56,46.56-31.13-.62-61.78-5.11-92.62-8.91-30-3.7-60.61-5.37-89.56,4.63a161.73,161.73,0,0,0-31.23-49.14c-1.84-2-4.67-.27-4.89,2a123.88,123.88,0,0,0,10,62.14c-52.49,63.44-138.79,76-214.62,92.34-21.77,4.71-43.47,9.93-64.57,17.1-15.44,5.24-33.14,10.81-44.87,22.74-11.89,12.11-16,29.27-21.46,44.76a362.15,362.15,0,0,1-22.72,51c-34.84,64.46-90.32,116.15-163.92,129.9-15.83,3-31.56,5.22-46.77,8.63a151.63,151.63,0,0,0-66.42,28.85c14.49-23,32.2-44,49.37-64.92,22.58-27.47,43.18-56.77,67.36-82.86,27.2-29.36,57.22-56.09,85.72-84.16,29.24-28.81,58.25-58.09,89.55-84.68,58.56-49.76,129.49-84.37,197.06-120,69.41-36.62,144.63-65.49,222.29-78.37,88-14.6,179,5.24,265.54-20.91,4.13-1.24,2.37-7.74-1.79-6.48-79,23.88-162.07,9.18-242.91,17.77-76.56,8.15-152.05,35.49-220.91,69-35.51,17.3-70.14,36.69-104.78,55.66-33.83,18.54-67.23,38.11-98.06,61.39-32,24.14-60.69,52.42-89.25,80.4-29.47,28.9-59.58,57.19-88.84,86.29-29.45,29.29-53.44,62.46-79.74,94.45-24.42,29.71-50.57,59.43-68.17,93.89,0,0-9.89,11.46-17.13,18.85a299,299,0,0,0-23.75,26.6c-21.44,27.84-39.36,58.41-54.78,89.94-12.27,25.06-23.76,51.75-28.66,79.46,1-5.73-2.07-14.64-2.85-20.47q-1.49-10.92-2.85-21.86-2.65-21.18-4.93-42.41c-2.84-26.49-5.91-51.9-2.42-78.33q2-15,4.91-29.93a489.44,489.44,0,0,1,15.44-59.11c12.68-38.52,30.16-75.58,52.7-109.32,40.85-61.15,99.58-107.2,146.06-163.66,18.94-23,37.7-45.43,58.25-67.08,21.06-22.18,42.26-44.46,60.22-69.28,14.75-20.39,28.63-44,30.3-69.7,1.48-22.71-9.27-43.29-23.82-60-20.3-23.31-47.54-40.58-75-54.24-24.18-12-49.85-21.89-76.28-27.78q64-38.91,128-77.79l67.7-41.13c18.37-11.16,37.24-22,53.54-36.11a113.69,113.69,0,0,0,33.2-47.83c7.62-21.14,10.41-43.9,14.32-65.93q13-73.34,26.37-146.61,14.58-80.67,28.94-161.37c52.26-3.51,104.17-10.73,154.31-26.33a435.33,435.33,0,0,0,118.91-57.54c21.13-14.65,39.39-31.55,58.37-48.72q9.07-8.2,18.39-16.25a482.18,482.18,0,0,0,65.3,7.48c18.28.73,41,1.24,57.08-9.08,13.87-8.91,14.14-24.43,8.28-38.47-22.21-53.23-90.72-1.06-117.32,19.94q-7.93,6.25-15.6,12.81c-23.73-4.37-47.26-10.05-70.38-16-73.36-18.88-146.75-38.05-223.28-33-46.93,3.12-92.64,15.56-133.91,38.27-39.32,21.64-77.52,45.43-114.88,70.29-75.61,50.31-149.06,105.5-214.6,168.53q-19.39,18.66-37.52,38.58c-2.76,2.13-5.53,4.28-8.25,6.46-24.22,19.41-51.67,43.39-61,74.26a51.49,51.49,0,0,0-13.51-1.44c-35.53.67-53.88,37.18-73.95,60.87-62.64,73.94-122.5,152.38-160.91,242.1-38.17,89.17-46.53,185.08-40.76,281,3.51,58.48,4.46,122.88,29.36,177,5.57,12.12,13,24.1,23.94,32.1s23.85,9.1,36.83,9.62c19,.76,37.94-.46,56.87-1.13,8.87-.32,20.33-1.87,30.54-1-26,9.06-53.32,16.05-77.6,28.69-6.87,3.58-13.86,8.14-17.08,15.47-5.52,12.57-4.63,28.32-2.19,41.46,5.84,31.44,23.41,60.27,36.6,89,16.68,36.39,34.2,72.38,51.79,108.34,2.37,4.83,9.58.6,7.22-4.23-15.32-31.31-30.61-62.64-45.33-94.24-13.08-28.05-29-56.16-38.39-85.72-4.6-14.53-7.29-30.16-3.89-45.25,2.35-10.47,9.11-14.76,18.43-19.24,27.25-13.09,57.51-20.14,85.63-31.2,2.81-1.11,4.59-6,1-7.48-9.21-3.9-20.24-3.33-30-3.23-16.06.16-32.1,1.17-48.16,1.58-14.18.37-29.14,1.09-43.12-1.79-11-2.27-19.39-9.26-25.91-18.18-16.67-22.86-22.95-53.18-27.71-80.5-5.3-30.32-7.72-61.07-9.57-91.76-2.19-36.37-4.31-72.61-2.49-109.06,2.45-49.19,10.64-98.18,25.77-145.1,29.3-90.88,85.65-173.48,145.51-246.93,13.68-16.79,28.39-32.69,41.39-50,11.49-15.33,24.28-33.66,43-40.61,8-3,17.09-3.61,24.81-1.29C940,825.94,941,869.63,962.65,857.6c8.22-4.56,7.49-14.65,5.62-22.32-1.24-5.08-2.42-10.21-5.07-14.78a27.34,27.34,0,0,0-11.85-10.87c6.64-19.49,22.34-37.71,35.31-50.19,24.71-23.79,53.62-42.64,80.32-64,40.56-32.48,83.08-59.75,135-69.1,49.48-8.9,100.81-6.52,150.88-7.1,33.26-.39,66.77-1,100.15-3-16.43,92.32-33.37,184.55-49.92,276.85-4.09,22.82-7.66,45.79-12.38,68.48-4.8,23.09-12.61,44.76-29.14,62.12-14.71,15.45-33.12,26.67-51.2,37.7q-32.12,19.59-64.27,39.15-74.43,45.33-148.85,90.65c-2.32,1.41-2.18,5.63.81,6.19,52,9.87,106.92,34.36,145.72,70.84,17.85,16.78,33.58,38.64,32.72,64.21-.9,27-17,51.94-32.73,72.85-18.61,24.81-40.36,47.11-61.67,69.58-19.73,20.82-37.22,42.86-55.62,64.79-44.61,53.17-99.33,97.51-139.36,154.57-30.71,43.78-53,94.73-66.68,147.42,14.52-146.32,35.49-292,64.14-436.23,16.94-85.29,36.81-169.9,58.63-254.06,20.82-80.35,42-160.67,67-239.83,28.6-90.43,62.25-179.26,106-263.52,1.19-2.3-1.51-4.09-3.4-2.62-75.72,58.74-113.16,153.52-148.18,239.63a2233.59,2233.59,0,0,0-97.47,298.57,2269,2269,0,0,0-67,616.62c1.15,39.34,4.1,73.9,6.59,117.86.94,16.71,3.2,36.06,5,53.09q3.21,29.88,7.26,59.66,7.93,58.22,19.19,115.91c.37,1.91,3.23,1.09,2.9-.8q-6.71-37.56-12.2-75.31c4.53-27.18,15.78-53.47,27.75-78a513.76,513.76,0,0,1,49.58-82c17.7-23.72,39.07-42.35,60.59-62.47,23.28-21.77,52.56-36.33,85.09-37.12,17.54-.42,32.28,5.32,48,12.12,20.19,8.72,41.62,15.11,62.87,20.64,76.82,20,166,19.9,228.54-35.88,26.35-23.52,41.22-54.71,49.53-88.6,4.1-16.69,8.54-37.48,7.45-56.67,24.88,22,37,56.09,33.41,89.4-.26,2.47,3,4.19,5,2.87q70.44-47.41,143.2-91.22c1.11-.67,2.06-2.38,1.5-3.7a172.39,172.39,0,0,1-10-102.14,297.28,297.28,0,0,0,21.61,33.61c6.67,8.92,14.13,21.09,24.38,26.3,11.2,5.69,23-.59,32.44-6.75,12.58-8.2,24-18.1,35.1-28.15,23.94-21.63,48-42.33,75.44-59.54a436.14,436.14,0,0,1,87.2-42,3,3,0,0,0,2.11-2.76,91.49,91.49,0,0,0-6.91-37.49c41.93,5.47,84.37-16.12,105.22-53.12a115.39,115.39,0,0,0,11.54-29.41C2129,1332.37,2140.67,1300.42,2136.3,1267.84ZM959,831.56c1.36,4.63,8.94,20.28-2.1,18.32-7.65-1.35-8.3-13.88-8.66-19.36-.08-1.27,1.07-12.28.85-12.43A23.62,23.62,0,0,1,959,831.56Zm900.4-401.87c16.15-10.14,43.85-27.17,63.14-15.43,12.7,7.72,22,32.07,8.86,43.28-13.65,11.66-37.61,10.54-54.27,10a452.12,452.12,0,0,1-60.24-6.39A390.7,390.7,0,0,1,1859.39,429.69ZM1226.84,553.42c39.66-27.91,80.36-54.4,122.13-79,21.4-12.62,42.92-25.48,66-34.87a310.34,310.34,0,0,1,73-19.57c83.27-11.93,164.57,8.39,244.54,29.3,22.62,5.92,45.62,11.55,68.82,16C1789,476,1777,487,1764.89,498c-29.37,26.75-64.33,48.1-100.41,64.47-69.79,31.68-145.83,42.44-221.81,46.38-50.47,1.2-101,.47-151.48,2.57-16.72.31-33.42.9-50.08,2.08-26,1.84-52,5.61-76.75,14a226.25,226.25,0,0,0-26.64,11A230.72,230.72,0,0,0,1090.8,665c-15.13,11.09-29.48,23.2-43.87,35.25C1101.7,645.56,1163.87,597.74,1226.84,553.42Zm-313.3,975.77c18.69-205.46,65.27-408.54,138.81-601.32,20.08-52.64,41.36-105.34,67.19-155.46,22.62-43.88,50.35-85.56,88.27-117.48-74.82,146.78-120.27,305.81-162,464.56-44.36,168.63-81.23,338.66-106.28,511.29Q921,1758.46,909.53,1887A2275.41,2275.41,0,0,1,913.54,1529.19ZM2113,1324a136.46,136.46,0,0,0-6.37-34.44c-1.95-6.25-4.42-12.59-5-19.18-.88-10.82,9.13-31.61,22.75-19.63,8.9,7.83,8.35,24.21,7.86,35.07a116.94,116.94,0,0,1-8.55,38.31,137.31,137.31,0,0,1-11.88,22.86A122.83,122.83,0,0,0,2113,1324Zm-37.59,84.35c-22.83,21.72-55.35,32.24-86.45,26.38a2.86,2.86,0,0,0-3.18,4.14,85.59,85.59,0,0,1,8.25,37.62,440.43,440.43,0,0,0-139.6,80.64c-11.2,9.63-21.85,19.88-33,29.52-11,9.47-24.14,22-38.42,26.07-16.4,4.71-28.36-16.18-36.48-27.35A303.56,303.56,0,0,1,1723,1547.2c-1.28-2.45-5.18-1.83-5.85.76a177.82,177.82,0,0,0,7.17,111.42q-68.7,41.37-135.35,86c1.5-28.49-7.39-56.06-26.56-77.72a121.2,121.2,0,0,0-15-14.37,61.41,61.41,0,0,0-5.47-17.57c-9.43-18.78-26.56-40.16-46.33-48.56-7.31-3.1-15.56-3.81-22.12,1.34s-10.5,14.19-7.12,22.1c4.64,10.87,18,17.64,27.88,22.74,11.78,6.08,24.45,10.41,36.13,16.63a93.26,93.26,0,0,1,10.08,6.22,127.3,127.3,0,0,1,.36,16,217.9,217.9,0,0,1-8,51c-9.31,34.23-25.81,64.15-54.13,86.24-67.08,52.31-157.26,45-234,21.78-19.75-6-38.26-14.06-57.45-21.38a89.3,89.3,0,0,0-17.82-4.71c3.43-.55,6.85-1.11,10.25-1.7,68.55-11.93,122.55-53.73,159.79-111.62,18.85-29.32,30.41-60.58,42.25-93.09,3.49-9.57,8-19,15.73-25.9,8.42-7.48,19.46-11.63,29.84-15.54,19.69-7.41,40-12.87,60.53-17.6,81.7-18.86,175.91-28.83,232.76-98.27a2.87,2.87,0,0,0,.42-3.26,118.2,118.2,0,0,1-10.16-54.23,156.66,156.66,0,0,1,26.56,44.4c.52,1.33,1.94,2.57,3.51,2,29.72-11,61.29-9,92.18-5.19s61.49,8.16,92.62,8.62c54.08.8,110.36-9.16,153.55-43.75a172.81,172.81,0,0,0,21.31-20.32A102.65,102.65,0,0,1,2075.42,1408.36Zm-536.5,238.89a75.83,75.83,0,0,0-7.48-4.21c-9.83-4.78-20.06-8.71-29.87-13.54-9.41-4.63-22.55-10.38-28.09-19.84-5.72-9.77,5.17-19.73,14.88-17.8,10.35,2.05,19.44,10.89,26.47,18.2a123.72,123.72,0,0,1,20.5,27.72A43.89,43.89,0,0,1,1538.92,1647.25Z"
              transform="translate(-653.24 -403.61)"
            ></path>
          </svg>
          <img
            src="https://hubio-dev.web.app/Shadow%20(1).cb406059.webp"
            alt="glow-effect"
            className="absolute -bottom-[40vw] right-[30%] z-[-2] w-1/2 opacity-80 sm:-bottom-[28vw]"
          />
        </div>
        <div className="flex flex-col sm:w-[45%]">
          <div className="mb-4 ml-auto mr-[5vw] hidden h-2 w-16 bg-[rgb(39,137,224)] sm:block"></div>
          <h3 className="mx-auto mb-3 w-4/5 text-center text-2xl font-medium sm:w-4/5 sm:text-right lg:text-4xl xl:text-[3vw]">
            Get rid of distraction & stay on track
          </h3>
          <p className="mx-auto w-4/5 text-center text-sm font-light sm:text-right sm:text-base lg:text-lg xl:text-2xl">
            We create and build every space utilising calm natural light and
            comfort for leisure activities. A study space that by its very
            nature, demands minimal distraction with a very sophisticated
            soundproof system, whilst at the same time provides the opportunity
            for low-level collaborative interaction.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mx-auto mt-[20vw] text-center text-2xl font-semibold sm:mt-[5vw] md:text-4xl lg:text-[2.5vw]">
          Our Space
        </h2>
        <div className="xs:block mx-auto mb-4 mt-2 hidden h-2 w-14 bg-[rgb(39,137,224)]"></div>
        <SecondSpaceSlider />
      </div>
      <div className="relative">
        <div className="flex flex-col space-y-8 sm:flex-row ">
          <img
            alt=""
            src="https://hubio-dev.web.app/Student%20female.fa3543f4.webp"
            className="mx-auto w-[15rem] sm:w-[24rem]"
          />
          <div className="flex flex-col space-y-12 sm:w-[38%] sm:justify-around">
            <div className="-mb-14 hidden h-2 w-16 bg-[rgb(39,137,224)] sm:block"></div>
            <h1 className="mx-auto w-4/5 text-center text-[2rem] font-semibold sm:ml-0 sm:text-left sm:text-4xl sm:leading-relaxed">
              Or if you're interested in a study booster
            </h1>
            <button className="self-center rounded-lg bg-[rgb(39,137,224)] px-5 py-3 text-base text-white drop-shadow-2xl sm:self-start ">
              <Link to={auth.currentUser==null ? "/join":"/User"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative" id="pricing">
        <img
          src="https://hubio-dev.web.app/Shadow%20(1).cb406059.webp"
          alt="blue shadow"
          className="absolute -top-[80%] z-[-1] opacity-40"
        />
        <img
          src="https://hubio-dev.web.app/Shadow%20(1).cb406059.webp"
          alt="blue shadow "
          className="absolute z-[-1] opacity-40"
        />
        <h3 className="mx-auto mt-[max(5vw,_10rem)] text-center text-4xl font-bold lg:text-[3vw]">
          Choose your plan
        </h3>
        <ThirdSpaceSwiper />
      </div>
      <footer
        id="contactus"
        className="mx-auto my-[5vw] flex w-[90%] flex-wrap items-baseline justify-between space-y-10 text-xs font-medium leading-relaxed"
      >
        <div className="space-y-5 sm:w-[30%]">
          <h2 className="mx-auto text-[1.5rem] font-bold uppercase text-[#e2386c] sm:ml-0 xl:text-[2vw]">
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
        <div className="xs:w-fit xs:space-x-[2vw] flex w-full justify-between xl:w-[40%]">
          <div className="w-[28%] space-y-5">
            <h2 className="text-[1.1rem] font-medium xl:text-[1.3vw]">
              About Us
            </h2>
            <p className="font-normal xl:text-[1vw]">HUBIO Study</p>
          </div>
          <div className="w-[28%] space-y-5">
            <h2 className="text-[1.1rem] font-medium xl:text-[1.3vw]">
              Quick Links
            </h2>
            <p className="font-normal xl:text-[1vw]">
              Pricing <br />
              Workplace
            </p>
          </div>
          <div className="w-min space-y-5">
            <h2 className="text-[1.1rem] font-medium xl:text-[1.3vw]">
              Address
            </h2>
            <p className="font-normal xl:text-[1vw]">
              03, Rue habib bougatfa,Bab Saadoun,Tunis,
              <br />
              Tunisie
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Space;
