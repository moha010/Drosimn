import React from 'react'
import { date } from '../date'
import {useParams } from 'react-router-dom';
import Header from './Header';
import YouTube from 'react-youtube';
import Videodetils from './Videodetils';
function Video() {
  const parems = useParams();
  let loction = window.location.pathname ;
  let regl =loction.match(/[a-z]{2,}/ig);
  let dat ;
  date.map(e=>{
    if(e.name === regl[0]){
      dat = e.videos[parems.id - 1]
    }
  })
  return (
    <>
      <Header />

      <div className="video bg-slate-100 dark:bg-gray-800 pt-4">
        <div className="countiner  flex gap-2 flex-col md:flex-row lg:flex-row pt-4">
          <div className='newvideo'>
            <YouTube videoId={dat.v}/>
            <div className="date">
              <h2 className='p-2 mt-3 text-lg text-black dark:text-white text-right '>{dat.name}</h2>
              <pre className='p-4 mt-3 text-lg  text-black dark:text-white text-right '>{dat.pragrav}</pre>
            </div>
          </div>
          <Videodetils datea = {regl[0]}/>
        </div>
      </div>
    </>
  )
}

export default Video
