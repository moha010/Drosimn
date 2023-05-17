import React from 'react'
import { date } from '../date';
import Header from './Header';
import Front from './Front';
import All from './All';
import About from './About';
import Fotter from './Fotter';

function Home() {
  const dat = date;
  console.log(dat)
  return (
    <div>
      <Header />
      <Front/>
      <All />
      <About />
      <Fotter />
      {/* <Fotter /> */}
    </div>
  )
}

export default Home
