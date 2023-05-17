import React from 'react'
import { date } from '../date'
import {useParams } from 'react-router-dom';
import Header from './Header';
import { Link } from "react-router-dom";

function Mohaderh() {
  const parems = useParams();
  let ele ;
  date.map((e) =>{
    if(e.name === parems.id){
      ele = e ;
    }
  })
  console.log(ele)
  return (
    <div>
      <Header />
      <div className='all bg-slate-200 dark:bg-slate-800 pt-10 '>
      <div className="heading text-black dark:text-white p-2 text-center text-2xl p-3 ">{ele.title}</div>
      <div className="countiner grid tem gap-2">
      {
        ele.videos.map((e) =>{
          return(
            <div className="course shadow-2xl  p-1 border-black dark:border-white rounded-md overflow-hidden">
              <div className="img w-full relative">
                <img src={e.img} alt="" />
                {/* <div className="tex bg-slate-500 text-white flex justify-center items-center p-2">{e.discrap}</div> */}
              </div>
              <div className="text w-full">
                <div className="title text-right p-2 mb-2 text-black dark:text-white text-lg">
                  {e.name}
                </div>
                <Link to={ `/${parems.id}${e.path}`} className='pt-1 pb-1 pr-4 pl-4 rounded-lg w-fit m-auto text-xl bg-slate-600 text-white block mt-3 mb-2'>شاهد الدرس</Link>
              </div>
            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Mohaderh
