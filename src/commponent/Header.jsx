import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Header() {
  let e = document.querySelector("body").className === "dark" ? <span>Light</span> : <span>Dark</span> ;
  return (
    <header className='bg-white shadow-md dark:bg-gray-700 p-1'>
      <div className="countiner flex justify-between items-center ">
        <Link to='/' className="logo text-3xl text-black dark:text-white cursor-pointer p-1 ">نرتقي</Link>

        <div className="mdoone text-black dark:text-white text-lg flex gap-2 items-center">
          Mode : 
          <div className="mode  " onClick={()=>{
            document.querySelector("body").classList.toggle("dark");
            document.querySelector(".divmod").classList.toggle("togle");
          }}>
            <div className="divmod togle">
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
