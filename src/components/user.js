import React, { useEffect, useState } from "react";
import Dashbord from "./dashbord";
import Tasks from "./Tasks";
import Membership from "./membership";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

function User() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = auth.currentUser?.displayName || "user";
  }, []);
  const [isDashbord, setIsDashbord] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isMembership, setIsMembership] = useState(true);
  const [imgUrl, setImgUrl] = useState(auth.currentUser?.photoURL);
  const changeImg = () => setImgUrl(auth.currentUser?.photoURL);
  return (
    <div className="flex">
      <div className="bg-radialgradient flex h-[100vh] w-[9vw] flex-col justify-between rounded-r-lg md:mx-2 md:mt-[1vh] md:h-[98vh] md:w-[18vw] md:rounded-xl">
        <div className="flex flex-col space-y-14">
          <div
            onClick={() => {
              setIsDashbord(false);
              setIsMembership(true);
              setIsTasks(false);
            }}
            className="mx-auto cursor-pointer mt-5 flex w-[7vw] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white"
          >
            <img
              src={
                !auth.currentUser || !auth.currentUser.photoURL
                  ? "https://hubio-dev.web.app/member.02d8a8ef.png"
                  : imgUrl
              }
              alt="member"
              className="w-[7.5vw]"
            />
          </div>
          <div className="flex flex-col space-y-10 text-xs text-white md:space-y-0 lg:text-base">
            <button
              className={
                "relative ml-1 flex items-center rounded-l-lg px-4 py-2 md:ml-0 md:rounded-l-3xl " +
                (isDashbord
                  ? "before:bg-radialgradient1 after:bg-radialgradient2 before:pointer-events-none before:absolute before:right-[0%] before:block before:h-[40%] before:w-[max(10%,1rem)] after:pointer-events-none after:absolute after:-bottom-[30%] after:-right-[13%] after:block after:h-[40%] after:w-[max(10%,1rem)] sm:before:-top-[35%] sm:after:-bottom-[22.1%] md:before:-top-[34%] md:after:-bottom-[22%] md:after:-right-[5%] lg:before:-top-[37%] lg:before:right-0 lg:after:-bottom-[23%] lg:after:-right-[4.5%] xl:before:-top-[39.8%] xl:after:-bottom-[22%] "
                  : "") +
                (isDashbord
                  ? "bg-white text-black "
                  : " transition-all hover:pl-[2.5vw] ")
              }
              onClick={() => {
                setIsDashbord(true);
                setIsMembership(false);
                setIsTasks(false);
              }}
            >
              {isDashbord && (
                <svg
                  className="w-[3.6vw] !max-w-[3rem] md:mr-4 md:w-[2.8vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path>
                </svg>
              )}
              {!isDashbord && (
                <svg
                  className="w-[3.6vw] !max-w-[3rem] md:mr-4 md:w-[2.8vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              )}
              <p className="hidden md:block">Dashbord</p>
            </button>
            <button
              className={
                "relative ml-1 flex items-center rounded-l-lg px-4 py-2 md:ml-0 md:rounded-l-3xl " +
                (isTasks
                  ? "bg-white text-black"
                  : " transition-all hover:pl-[2.5vw] ") +
                (isTasks
                  ? " before:bg-radialgradient1 after:bg-radialgradient2 before:pointer-events-none before:absolute before:right-[0%] before:block before:h-[40%] before:w-[max(10%,1rem)] after:pointer-events-none after:absolute after:-bottom-[30%] after:-right-[13%] after:block after:h-[40%] after:w-[max(10%,1rem)] sm:before:-top-[35%] sm:after:-bottom-[22.1%] md:before:-top-[34%] md:after:-bottom-[22%] md:after:-right-[5%] lg:before:-top-[37%] lg:before:right-0 lg:after:-bottom-[23%] lg:after:-right-[4.5%] xl:before:-top-[39.8%] xl:after:-bottom-[22%] "
                  : "")
              }
              onClick={() => {
                setIsDashbord(false);
                setIsMembership(false);
                setIsTasks(true);
              }}
            >
              {isTasks && (
                <svg
                  className="w-[3.6vw] !max-w-[3rem] md:mr-4 md:w-[2.8vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                </svg>
              )}
              {!isTasks && (
                <svg
                  className="w-[3.6vw] !max-w-[3rem] md:mr-4 md:w-[2.8vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              )}
              <p className="hidden md:block">Tasks</p>
            </button>
            <button
              className={
                "relative ml-1 flex items-center rounded-l-lg px-4 py-2 md:ml-0 md:rounded-l-3xl " +
                (isMembership ? "" : " transition-all hover:pl-[2.5vw] ")
              }
              onClick={() => {
                setIsDashbord(false);
                setIsMembership(true);
                setIsTasks(false);
              }}
            >
              <svg
                className="w-[3.6vw] !max-w-[3rem] md:mr-4 md:w-[2.8vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>

              <p className="hidden md:block">Membership</p>
            </button>
          </div>
        </div>
        <h1 className="font-azonix mx-auto mb-6 hidden text-[min(2.5vw,2rem)] uppercase text-white md:block">
          <Link to="/">Hubio</Link>
        </h1>
      </div>
      <div className="mx-auto w-[90vw] pt-7 md:w-[78vw] lg:w-[70vw]">
        <div
          className={
            "mb-14 flex " +
            (isTasks
              ? " flex-row-reverse items-center justify-between"
              : " justify-end")
          }
        >
          <div className="mr-10 flex w-[25%] items-center space-x-2 md:mr-0">
            <button
              onClick={() => {
                setIsDashbord(false);
                setIsMembership(true);
                setIsTasks(false);
              }}
              className="flex items-center justify-center space-x-0.5 rounded-xl border bg-white py-3 text-xs drop-shadow-lg md:space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[20%] min-w-[1rem]"
              >
                <path d="M2.21329 14.0601C1.92026 12.6755 1.93213 11.2743 2.21413 9.94038C3.32405 10.0711 4.29284 9.7035 4.60963 8.93871C4.92641 8.17392 4.50129 7.22896 3.62405 6.53655C4.36788 5.3939 5.35029 4.39471 6.53651 3.62289C7.22898 4.50059 8.17422 4.92601 8.9392 4.60914C9.70418 4.29227 10.0717 3.32308 9.94077 2.21281C11.3253 1.91977 12.7265 1.93164 14.0605 2.21364C13.9298 3.32356 14.2973 4.29235 15.0621 4.60914C15.8269 4.92593 16.7719 4.5008 17.4643 3.62356C18.6069 4.36739 19.6061 5.3498 20.3779 6.53602C19.5002 7.22849 19.0748 8.17373 19.3917 8.93871C19.7086 9.70369 20.6778 10.0713 21.788 9.94028C22.0811 11.3248 22.0692 12.726 21.7872 14.06C20.6773 13.9293 19.7085 14.2969 19.3917 15.0616C19.0749 15.8264 19.5 16.7714 20.3773 17.4638C19.6335 18.6064 18.651 19.6056 17.4648 20.3775C16.7724 19.4998 15.8271 19.0743 15.0621 19.3912C14.2971 19.7081 13.9296 20.6773 14.0606 21.7875C12.676 22.0806 11.2748 22.0687 9.94087 21.7867C10.0716 20.6768 9.70399 19.708 8.9392 19.3912C8.17441 19.0744 7.22945 19.4995 6.53703 20.3768C5.39439 19.633 4.3952 18.6506 3.62338 17.4643C4.50108 16.7719 4.92649 15.8266 4.60963 15.0616C4.29276 14.2967 3.32356 13.9291 2.21329 14.0601ZM4.00073 12.2104C5.10054 12.5148 6.00815 13.2117 6.45739 14.2963C6.90662 15.3808 6.75764 16.5154 6.19519 17.5083C6.29175 17.61 6.39096 17.7092 6.4927 17.8056C7.48558 17.2432 8.6201 17.0943 9.70456 17.5435C10.789 17.9927 11.4859 18.9002 11.7904 19.9999C11.9305 20.0037 12.0707 20.0038 12.2109 20.0001C12.5153 18.9003 13.2122 17.9927 14.2968 17.5435C15.3813 17.0942 16.5159 17.2432 17.5088 17.8057C17.6105 17.7091 17.7096 17.6099 17.806 17.5081C17.2437 16.5153 17.0947 15.3807 17.5439 14.2963C17.9931 13.2118 18.9007 12.5149 20.0004 12.2105C20.0042 12.0704 20.0043 11.9301 20.0006 11.7899C18.9008 11.4856 17.9932 10.7886 17.5439 9.70407C17.0947 8.61953 17.2437 7.48494 17.8061 6.49204C17.7096 6.39031 17.6104 6.2912 17.5086 6.19479C16.5158 6.75717 15.3812 6.9061 14.2968 6.4569C13.2123 6.0077 12.5154 5.10016 12.211 4.00044C12.0709 3.99666 11.9306 3.99659 11.7904 4.00024C11.486 5.10005 10.7891 6.00767 9.70456 6.4569C8.62002 6.90613 7.48543 6.75715 6.49252 6.1947C6.39079 6.29126 6.29169 6.39047 6.19528 6.49222C6.75766 7.48509 6.90659 8.61961 6.45739 9.70407C6.00819 10.7885 5.10065 11.4855 4.00092 11.7899C3.99715 11.93 3.99708 12.0702 4.00073 12.2104ZM12.0007 15.0002C10.3438 15.0002 9.00066 13.657 9.00066 12.0002C9.00066 10.3433 10.3438 9.00018 12.0007 9.00018C13.6575 9.00018 15.0007 10.3433 15.0007 12.0002C15.0007 13.657 13.6575 15.0002 12.0007 15.0002ZM12.0007 13.0002C12.5529 13.0002 13.0007 12.5525 13.0007 12.0002C13.0007 11.4479 12.5529 11.0002 12.0007 11.0002C11.4484 11.0002 11.0007 11.4479 11.0007 12.0002C11.0007 12.5525 11.4484 13.0002 12.0007 13.0002Z"></path>
              </svg>
              <p>Settings</p>
            </button>
            <button
              onClick={async () => {
                await signOut(auth);
                navigate("/");
              }}
              className="flex items-center justify-center space-x-0.5 rounded-xl border bg-white py-3 text-xs drop-shadow-lg md:space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[20%] min-w-[1rem]"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
              </svg>
              <p>Logout</p>
            </button>
          </div>
          {isTasks && (
            <div className="flex w-[60%] items-center justify-between">
              <button className="flex w-[20vw] max-w-[7rem] items-center space-x-0.5 rounded-md bg-white px-2 py-3 text-xs drop-shadow-lg hover:shadow-2xl hover:shadow-yellow-700 md:space-x-2">
                <img
                  src="https://hubio-dev.web.app/mind-mapping.5cc14980.png"
                  alt=""
                  className="w-[20%] min-w-[1rem]"
                />
                <p>Study Map</p>
              </button>
              <button className="flex w-min items-center space-x-0.5 rounded-md bg-white px-2 py-3 text-xs drop-shadow-lg md:space-x-2">
                <img
                  src="https://hubio-dev.web.app/tomato.3b4d865d.png"
                  alt=""
                  className="w-[80%] min-w-[1rem]"
                />
                <p>0</p>
              </button>
              <svg height="40" width="40">
                <circle
                  cx="50%"
                  cy="50%"
                  r="15"
                  stroke="black"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
              <button className="flex w-[7vw] max-w-[7rem] items-center justify-center space-x-0.5 rounded-md bg-white px-2 py-3 text-xs drop-shadow-lg md:space-x-2">
                <p className="text-red-400">start</p>
              </button>
            </div>
          )}
        </div>
        {isMembership && <Membership changeImg={changeImg} />}
        {isDashbord && <Dashbord />}
        {isTasks && <Tasks />}
      </div>
    </div>
  );
}

export default User;
