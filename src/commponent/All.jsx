import React from 'react'
import { date } from '../date'
import { Link } from "react-router-dom";

function All() {
  return (
    <div className='all bg-slate-200 dark:bg-slate-800 pt-10 '>
      <div className="heading text-black dark:text-white p-2 text-center">All courses</div>
      <div className="countiner grid tem gap-2">
        {
          date.map(ele=>{
            return(
              <div className="course shadow-lg p-1 border-black dark:border-white rounded-md overflow-hidden">
                <div className="img w-full relative">
                  <img src={ele.img} alt="" />
                  <div className="tex bg-slate-500 text-white flex justify-center items-center p-2">{ele.discrap}</div>
                </div>
                <div className="text w-full">
                  <div className="title text-right p-2 mb-2 text-black dark:text-white text-lg">
                    {ele.title}
                  </div>
                  <Link to={ `/${ele.name}`} className='pt-1 pb-1 pr-4 pl-4 rounded-lg w-fit m-auto text-xl bg-slate-600 text-white block mt-3 mb-2'>شاهد الدؤره</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default All
