import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
function Header(prop) {
  return (
    <>
      <div className="mx-auto py-10 px-14 flex justify-between items-center " >
        <h1 className="mx-auto text-white font-bold uppercase text-[2rem] sm:ml-0 z-[100]" >
          <Link to="/">Hubio</Link>
        </h1>
        <nav className="hidden sm:flex space-x-4 z-[100]">
          <button 
          className=
          "rounded-xl w-24 h-12 drop-shadow-2xl text-white text-base bg-rose-400 border-white border" >
            <Link to={auth.currentUser==null ? "/join":"/User"}>Join Us</Link>
          </button>
          <button className=
          "w-24 h-12 drop-shadow-2xl text-rose-400 bg-white rounded-xl" >
            <Link to={auth.currentUser==null ? "/login":"/User"}>Login</Link>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
