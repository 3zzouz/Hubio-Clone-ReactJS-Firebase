import React, { useEffect, useRef } from "react";
import Header from "./header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PageSwitcher from "./PageSwitcher";
import Cards from "./Cards";
import Wave from "../svgs/Wave";
import brain from "../images/Math.2a9c3ce8 (1) (3).webp";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

function Study() {
  const elementRef = useRef(null);
  useEffect(() => {
    document.title = "Hubio Study";
    window.scrollTo(0, 0);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth >= 1280) {
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
    const current = elementRef.current;
    const observer = new IntersectionObserver(callback, options);
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return (
    <>
      <section
        ref={elementRef}
        className="bg-rose_100 mx-auto h-screen w-[100vw] snap-end overflow-hidden p-0"
      >
        <Header className="h-1/5" />
        <div className="mx-auto flex h-4/5 w-full max-w-sm flex-col sm:max-w-full sm:flex-row-reverse sm:justify-between">
          <div className="relative block h-3/5 sm:mr-1 sm:mt-10 sm:h-[90%] sm:w-[22rem] lg:mr-12 lg:w-96 xl:mr-44 xl:w-[45rem] ">
            <img
              src="https://hubio-dev.web.app/Screen%20Specular.e65461a5.webp"
              alt="laptop"
              className="absolute -top-16 left-1/2 z-20 h-96 w-80 -translate-x-1/2 lg:h-[456px] lg:w-96"
            />
            <img
              src="https://hubio-dev.web.app/shadow%202.864bf403.webp"
              alt="shadow"
              className="absolute bottom-[5rem] hidden h-full w-80 sm:-left-8 sm:bottom-[18%] sm:inline-block lg:-left-10 lg:bottom-[2%] lg:w-[400px] xl:bottom-12 xl:left-10"
            />
            <img
              src="https://hubio-dev.web.app/Layer%206.01446148.webp"
              alt="red-book"
              className="animate-float4 absolute bottom-1/4 left-[9%] z-30 h-28 w-20 sm:bottom-1/2 lg:bottom-[40%] lg:h-32 lg:w-28 xl:left-24"
            />
            <img
              src="https://hubio-dev.web.app/Layer%207.821fdd8e.webp"
              alt="left-notebook"
              className="animate-float3 absolute left-[-16%] top-[-22%] h-36 w-48 lg:left-[-32%] lg:h-52 lg:w-64 xl:left-0"
            />
            <img
              src="https://hubio-dev.web.app/book.b233fa6e.webp"
              alt="grey-book"
              className="animate-float2 absolute -right-8 top-[-15%] z-[19] h-28 w-40 lg:h-28 lg:w-44 xl:top-0 xl:h-auto xl:w-52"
            />
          </div>
          <div className="relative flex h-2/5 flex-col items-center justify-center text-center sm:h-full sm:w-2/3 ">
            <img
              src="https://hubio-dev.web.app/Layer%205.9253412e.webp"
              alt="white effect"
              className="absolute -top-36 left-0 right-0 z-[0] min-w-[100vw]"
            />
            <img
              src="https://hubio-dev.web.app/Superboosted.236094cb.png"
              alt="superboosted"
              className="absolute top-4 z-30 w-48 sm:left-11 sm:top-[30%] sm:w-[25vw] lg:left-36 xl:top-[27%]"
            />
            <h1 className="animate-fadeout absolute top-0 text-[3.5rem] font-bold text-white text-opacity-40 sm:left-7 sm:top-[17%] sm:text-[6rem] lg:left-32 lg:top-[4rem] lg:text-[9rem] xl:top-[2rem] xl:text-[12rem]">
              Productivity
            </h1>
            <h1 className="absolute top-8 z-20 text-5xl font-bold text-violet-100 sm:left-9 sm:top-1/3 sm:text-[3.5rem] lg:left-32 lg:text-[5.5rem]">
              Productivity
            </h1>
            <div className="absolute bottom-0 flex flex-col items-center space-y-2 sm:bottom-1/4 sm:left-1/3 lg:left-1/2">
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
      <main className="snap-start">
        <section className="relative">
          <div className="relative mx-auto mb-8 flex items-center justify-between px-14 py-12">
            <img
              src="https://hubio-dev.web.app/Ellipse%201%20copie%202.be9e4740.webp"
              alt="ellipse"
              className="absolute -top-[40%] left-0 z-[-1] min-w-[90vw] opacity-30 "
            />
            <h1 className="mx-auto text-[2rem] font-bold uppercase text-[#e2386c] sm:ml-0">
              <Link to="/">Hubio</Link>
            </h1>
            <nav className="hidden space-x-4 sm:flex">
              <button className="h-12 w-24 rounded-xl bg-[#ff3b4f] text-base text-white drop-shadow-2xl">
                <Link to={auth.currentUser==null ? "/join":"/User"}>Join Us</Link>
              </button>
              <button className="h-12 w-24 rounded-xl bg-white text-[#ff3b4f] drop-shadow-2xl">
                <Link to={auth.currentUser==null ? "/login":"/User"}>Login</Link>
              </button>
            </nav>
          </div>
          <div className=" mx-auto flex flex-col lg:w-[85vw] lg:flex-row-reverse">
            <div className="relative mx-auto w-[50vw] lg:my-auto lg:w-[50vw] xl:ml-auto ">
              <img
                src="https://hubio-dev.web.app/Student.eaa1dbe7.webp"
                alt="man"
                className="mx-auto max-w-full xl:w-[32vw]"
              />
              <img
                src="https://hubio-dev.web.app/layout.48824834.webp"
                alt="dashbord"
                className="animate-float4 absolute left-0 top-[22%] w-[18vw] lg:left-[8%] lg:top-[20%] lg:w-[12vw] xl:left-[20%] xl:w-[26%]"
              />
              <img
                src="https://hubio-dev.web.app/88.cf499228.webp"
                alt="88%"
                className="animate-float3 absolute left-[18%] top-[40%] w-[30%] lg:top-[38%] lg:w-[10.3vw] xl:left-[20%] xl:top-[40%] xl:w-[22%]"
              />
              <img
                src="https://hubio-dev.web.app/+.51187db4.webp"
                alt="todo"
                className="animate-float4 absolute right-[15%] top-[55%] w-[18vw] lg:top-[52%] lg:w-[12vw] xl:right-[25%] xl:top-[53%] xl:w-[25%]"
              />
              <img
                src="https://hubio-dev.web.app/Prognosis.d0a08fa0.webp"
                alt="chart"
                className="animate-float3 absolute -right-[0] top-[15%] w-[20vw] lg:right-0 lg:top-[2%] lg:w-[14vw] xl:right-[10%] xl:w-[33%]"
              />
            </div>
            <div className="mx-auto flex flex-col items-center text-center lg:items-start lg:text-start ">
              <h1 className="mb-4 max-w-[95%] text-4xl font-bold leading-relaxed sm:text-5xl lg:mb-6 lg:text-left lg:text-[4rem] lg:leading-loose">
                SuperBoosted
                <br /> Productivity
              </h1>
              <p className="mb-4 max-w-[80vw] text-2xl font-light lg:mb-6 lg:max-w-[75%] lg:leading-[2.5rem]">
                We are crafting the ultimate productivity booster for students.
              </p>
              <Link to={auth.currentUser==null ? "/join":"/User"} className="cursor-pointer">
                <button className="rounded-2xl bg-[#ff254c] px-6 py-3 text-xl text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative">
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="right-glow-effect"
            className="absolute -top-[50%] right-0 z-[-1] h-[300vh] w-[200vw] opacity-[0.25]"
          />
          <div className="mt-20 text-center">
            <img
              src="https://hubio-dev.web.app/ahna%20chnowa.bce657c7.png"
              alt="ahna-chnoua"
              className="mx-auto w-72"
            />
            <h1 className="mb-10 text-5xl font-semibold sm:text-6xl">
              What is Hubio
            </h1>
            <p className="mx-auto mt-2 max-w-[91%] text-2xl font-light leading-relaxed sm:max-w-[55%]">
              Hubio study is an all-in-one platform built for students to help
              them boost their efficiency and productivity by organizing their
              academic journey and providing them with the right metrics to stay
              on track.
            </p>
          </div>
        </section>
        <PageSwitcher />
        <Cards />
        <Wave position="start" />
        <div className="relative space-y-32 bg-gradient-to-b from-[#E74A3E] to-[#F6603B] text-center text-white xl:space-y-0 xl:text-left">
          <div className="flex flex-col -space-y-7 xl:mx-auto xl:w-[85%] xl:flex-row-reverse">
            <img
              src="https://hubio-dev.web.app/Laptop_Screen%20study.c140ca81.png"
              alt=""
              className="mx-auto w-80 sm:-mt-[15vw] sm:w-[55%]"
            />
            <div className="flex flex-col xl:space-y-9">
              <h1 className="mx-auto w-72 text-4xl font-medium leading-relaxed sm:-mt-16 sm:w-[60%] lg:-mt-20 lg:mb-5 xl:ml-0">
                We are changing the game rules of productivity
              </h1>
              <p className="mx-auto w-[80%] font-light leading-8 sm:text-xl lg:text-2xl lg:leading-relaxed xl:ml-0 xl:w-[34vw] xl:font-extralight xl:leading-relaxed">
                Finding the balance between “hsutling” and really being
                productive is the true secret of success. Hubio study is here to
                change the game rules, by providing you with the right toolbox
                to tackle your studying sessions with a “bring it on” mindset.
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:mx-auto xl:w-[85%] xl:flex-row">
            <div className="relative mx-auto w-[70vw] md:w-[42vw] lg:w-[42vw] xl:ml-0 xl:w-[115vw] xl:max-w-[50%] ">
              <img
                src="https://hubio-dev.web.app/tablette.e3ea8c5c.png"
                alt="tablettes"
                className="w-full"
              />
              <img
                src="https://hubio-dev.web.app/Calque-10.c9f39be4.webp"
                alt="todo"
                className="animate-float2 absolute -top-[10%] left-[38%] z-30 w-[24vw] md:w-[15vw] lg:w-[14vw]"
              />
              <img
                src="https://hubio-dev.web.app/Prognosis%20copie.d1d2790a.png"
                alt="chart"
                className="animate-float2 absolute bottom-[24%] left-[30%] w-[36vw] md:w-[22vw] lg:w-[21vw] xl:left-[30%]"
              />
              <img
                src="https://hubio-dev.web.app/100.97bc379a.webp"
                alt="100%"
                className="animate-float2 absolute -right-[10%] top-[25%] w-[32vw] md:-right-[13%] md:top-[22%] md:w-[20vw] lg:-right-[6%] lg:top-[27%] lg:w-[18vw] xl:right-0 xl:w-[15vw]"
              />
              <img
                src="https://hubio-dev.web.app/Customer%20File.604460fb.png"
                alt="customer"
                className="animate-float2 absolute right-[5%] top-0 w-[12vw] md:right-[15%] md:top-[5%] md:w-[8vw] lg:w-[5vw] xl:right-[15%]"
              />
            </div>
            <div className="flex flex-col xl:text-right">
              <h1 className="mx-auto mb-5 mt-24 w-64 text-4xl font-medium leading-relaxed sm:w-[60%] lg:mb-5 lg:leading-relaxed xl:mb-5 xl:mr-0 xl:w-[38vw]">
                Track & Monitor !
              </h1>
              <p className="mx-auto mb-20 w-[80%] font-light leading-8 sm:text-xl lg:text-2xl xl:mr-0 xl:w-[34vw] xl:font-extralight xl:leading-relaxed">
                To go faster & further, Hubio study provides you with a clear
                dashboard that helps you keep an eye on your progress speed and
                other metrics so that you can adjust your sails when needed to.
              </p>
            </div>
          </div>
        </div>
        <div className="rotate-180">
          <Wave position="" />
        </div>
        <div className="max-w-[100vw] overflow-hidden text-center">
          <div className="flex flex-col items-center space-y-5">
            <div className="relative flex flex-col items-center space-y-5">
              <h2 className="w-[95%] max-w-[500px] text-4xl font-semibold leading-normal sm:w-[75%] sm:max-w-none sm:text-[2.7rem] sm:leading-relaxed">
                Built for students, Designed for You
              </h2>
              <div className="h-2 w-28 bg-[#f11759]"></div>
            </div>
            <p className="w-[93%] text-lg font-light md:w-[75%] md:text-xl md:leading-relaxed">
              We all know that our brains and neurones are made and trained to
              store information and process them in many different ways. And we
              are aware that we all have different study preferences. Hubio
              study allows you to create, edit and play with your to-do lists
              just like you do with your legos.
            </p>
          </div>
          <div className="bg-[https://hubio-dev.web.app/Math.2a9c3ce8.webp]"></div>
          <img
            src={brain}
            alt="brain"
            className="relative right-[3%] my-16 h-auto max-h-full scale-[1.3] sm:mt-0 sm:scale-105 md:scale-[1.01] lg:right-[1%] lg:scale-[0.90]"
          />
        </div>
        <div className="mx-auto w-[85%] text-left sm:text-center">
          <div className="flex flex-col items-center space-y-5">
            <div className="relative flex flex-col items-center space-y-5">
              <h2 className="w-[95%] max-w-[500px] text-4xl font-semibold leading-normal sm:w-[75%] sm:max-w-none sm:text-[2.7rem] sm:leading-relaxed">
                Craft your To-Do list in record time
              </h2>
              <div className="ml-2 mr-auto h-2 w-28 bg-[#f11759] sm:ml-auto"></div>
            </div>
            <p className="w-[93%] text-lg font-light sm:w-4/5 md:w-[75%] md:text-xl md:leading-relaxed">
              We put everything you need to create your customized to-do list
              right in the palm of your hand. Whether you want to create your
              plans on a daily basis or you want to plan ahead and craft an
              entire revision plan, we will equip you with the right tools to
              get you ready for the road.
            </p>
          </div>
          <div className="bg-[https://hubio-dev.web.app/Math.2a9c3ce8.webp]"></div>
          <img
            src="https://hubio-dev.web.app/Calque%2024.4b5995f0.webp"
            alt="dashbord"
            className="mx-auto mt-8 h-[272px] w-full max-w-[435.2px]"
          />
        </div>
        <div className="relative mx-auto w-[85%] text-left sm:text-center">
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -top-[110%] right-[10%] z-[-1] h-[180vh] min-w-[100vw] rotate-180 opacity-40 "
          />
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -right-[67%] -top-[10%] z-[-1] min-w-[150vw]  rotate-180 opacity-40 "
          />
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -top-[20%] right-[19%] z-[-1] min-w-[100vw] rotate-180 opacity-40 "
          />
          <div className="flex w-full flex-col items-center space-y-5 sm:items-start sm:text-left">
            <div className="relative flex w-full flex-col items-center space-y-5 sm:flex-col-reverse sm:items-start sm:text-left">
              <h2 className="w-[95%] max-w-[500px] text-4xl font-semibold leading-normal sm:w-[75%] sm:max-w-none sm:text-[2.7rem] sm:leading-relaxed">
                Time & Track
              </h2>
              <div className="ml-2 mr-auto h-2 w-28 bg-[#f11759]"></div>
            </div>
            <p className="w-[93%] text-lg font-light md:w-[75%] md:text-xl md:leading-relaxed">
              Keeping track of your studying sessions is a very important task.
              It gives you a clear idea of where you stand and how much more you
              need to work in order to be able to achieve your academic goals.
              And for that, HubioStudy got you all covered with the Pomodoro
              Timer or the normal timer that we have on our platform.
            </p>
          </div>
          <div className="bg-[https://hubio-dev.web.app/Math.2a9c3ce8.webp]"></div>
          <img
            src="https://hubio-dev.web.app/Calque%2025.9053ce8a.webp"
            alt="dashbord"
            className="z-50 mx-auto mt-8 h-[272px] w-full max-w-[435.2px]"
          />
        </div>
        <div className="relative">
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -top-[90%] right-[0%] z-[-1] w-[120vw] opacity-40 "
          />
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -top-[40%] right-[0%] z-[-1]  w-[150vw] opacity-30 md:opacity-20 "
          />
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -top-[30%] right-[0%] z-[-1] min-w-[100vw] opacity-30 md:opacity-10 "
          />
          <div className="mx-auto flex w-[85%] flex-col items-center space-y-5 text-center sm:w-1/2">
            <h2 className="w-[95%] max-w-[500px] text-4xl font-semibold leading-normal sm:w-[70%] sm:max-w-none sm:text-[2.7rem] sm:leading-relaxed">
              Everything in one Place
            </h2>
            <p className="text-lg font-light md:text-xl md:leading-relaxed">
              Hubio Study helps you create your own customized study plan based
              on your exam time, subjects importance and your vibes.
            </p>
          </div>
        </div>
        <img
          src="https://hubio-dev.web.app/257690345_639159823920140_506064057453917209_n.c7edc95c.webp"
          alt=""
          className="mx-auto mt-8 h-[272px] w-full max-w-[435.2px] lg:h-auto lg:max-w-[900px]"
        />
        <div className="relative">
          <div className="flex flex-col space-y-8 sm:flex-row ">
            <img
              alt=""
              src="https://hubio-dev.web.app/Student%20female.aafd32aa.png"
              className="mx-auto w-[15rem] sm:w-[24rem]"
            />
            <div className="flex flex-col space-y-12 sm:w-[38%] sm:justify-around">
              <h1 className="mx-auto w-4/5 text-center text-[2rem] font-semibold sm:ml-0 sm:text-left sm:text-4xl sm:leading-relaxed">
                if you're interested in a study booster then
              </h1>
              <button className="self-center rounded-xl bg-[#ff254c] px-1 py-2 text-lg text-white drop-shadow-2xl sm:self-start ">
                <Link to={auth.currentUser==null ? "/join":"/User"}>Let's get Started</Link>
              </button>
            </div>
          </div>
          <img
            src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
            alt="ellipse"
            className="absolute -bottom-[10%] right-[0%] z-[-1] h-[100%] min-w-[145vw] opacity-40 sm:top-0 md:opacity-0 "
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Study;
