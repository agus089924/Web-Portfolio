import { useState } from 'react'
import './App.css'
import BodyBeranda from './component/beranda/BodyBeranda'
import Popup from './component/beranda/Popup'
import Header from './component/main/Header'
import Footer from './component/main/footer'

import Itemsp from './component/portofo/Itemsp'
import Kontak from './component/kontak/Kontak'

import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {


  return (
      <>
      
      <Header/>
      <Popup/>


        <Routes>
        <Route path='/' element={<BodyBeranda/>}/>
        <Route path='/Itemsp' element={<Itemsp/>}/>
        <Route path='/Kontak' element={<Kontak/>}/>
        </Routes>
       




      <div className="grid item "><Footer/></div> 

      </>
  )
}

export default App
