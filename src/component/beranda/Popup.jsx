import React, { useEffect, useRef } from 'react'


function Popup ()  {
const ref = useRef (null);
  useEffect(() => {
    ref.current.checked = true; }, []);
  return(
    <>

        <input ref={ref} type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative">
              <h3 className="text-lg text-center font-bold">Selamat Datang di Website Saya!</h3>
              <p className="py-4 text-center">Silahkan Melihat dan Menilai.</p>
            </label>
          </label>

    </>
  )
  }
export default Popup

