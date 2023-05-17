import React from 'react'
import { date } from '../date';
import { Link } from "react-router-dom";
function Videodetils(props) {
  let dat ;
  date.map(ele=>{
    if(ele.name === props.datea){
      dat = ele ;
    }
  })
  console.log(dat)
  return (
    <div className='videosho flex flex-col pt-3 pb-3 pr-1 pl-1 '>
    {  dat.videos.map(e =>{
      return(
        <Link href={`/${dat.name}/${e.id}`} className="show flex shadow-md  rounded-sm mb-2 cursor-pointer">
          <div className="video overflow-hidden rounded-lg p-1">
            <img src={e.img} alt="not" className='img rounded-lg'/>
          </div>
          <div className="text">
            <h3 className='p-2 text-lg text-black dark:text-white tracking-tight text-right'>{e.name}</h3>
            <h4 className='p-2 text-sm text-black dark:text-white tracking-tight text-right '>{dat.title}</h4>
            <h4 className='p-2 text-sm text-black dark:text-white tracking-tight text-right '>مهندس : ايمن عبج الرحيم</h4>
          </div>
        </Link>
      )
    })}
    </div>
  )
}

export default Videodetils
