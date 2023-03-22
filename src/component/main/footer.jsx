import React from 'react'
import {ImWhatsapp} from "react-icons/im"
import {FaLinkedinIn} from "react-icons/fa"
import {RxDiscordLogo} from "react-icons/rx"

const Footer = () => {
  return (
<footer className="footer items-center p-4 bg-neutral text-neutral-content bottom-0 ">
  <div className="items-center grid-flow-col pl-24 ">
  <p>Copyright © 2023 - create by Diva Agustin</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center pr-20">
  <a href="https://discord.gg/ygPM2zs2" target="_blank"> 
  <RxDiscordLogo className='p=0 h-8 w-8' /> 
  </a>
  <a href="http://wa.me/628527102779/?text=Hai%2CSaya%20mengetahui%20layanan%20dari%20diva" target="_blank"> 
  <ImWhatsapp className='p=0 h-8 w-8' /> 
  </a>
  <a href="https://www.linkedin.com/in/diva-agustin-purba-a6935a252/" target="_blank"> 
  <FaLinkedinIn className='p=0 h-8 w-8' /> 
  </a>
  </div>
</footer>
  )
}

export default Footer