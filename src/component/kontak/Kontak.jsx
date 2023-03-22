import React, {Component, Fragment} from 'react'
import People from './../../assets/people.jpg'
import {ImWhatsapp} from "react-icons/im"
import {FaLinkedinIn} from "react-icons/fa"
import {RxDiscordLogo} from "react-icons/rx"

const Kontak = () => {
  return (
    <>
    <div className="flex justify-center py-16 my-14 ">
  <div className=' flex  border-double border-4 p-20'>
  <div>
    <img src={People} className="w-65 h-96 pr-8"/>
  </div>
  <div >
  <div className='pb-20 text-center text-2xl text-bold'> Contact Us!</div>
  <div className='border-t border-l shadow-l shadow-t shadow-black w-96 h-80'>   
    <div className='pt-10 pl-4'>
    <div className='py-4'>Diva Agustin Purba
      <p>Asal Dari medan, sumatera utara.</p>
      <h1>DivaAgustin@gmail.com</h1>
    </div>
    <div className='pt-20 flex justify-end px-8'>  <a href="https://discord.gg/ygPM2zs2" target="_blank"> 
  <RxDiscordLogo className='p-4 h-16 w-16' /> 
  </a>
  <a href="http://wa.me/628527102779/?text=Hai%2CSaya%20mengetahui%20layanan%20dari%20diva" target="_blank"> 
  <ImWhatsapp className='p-4 h-16 w-16' /> 
  </a>
  <a href="https://www.linkedin.com/in/diva-agustin-purba-a6935a252/" target="_blank"> 
  <FaLinkedinIn className='p-4 h-16 w-16' /> 
  </a></div>
    </div>
  </div>

  </div>
  
  </div>






</div>
</>


  )
}

export default Kontak