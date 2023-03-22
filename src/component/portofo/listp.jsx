import React, {Component, useState, useEffect, useRef} from 'react';

export function Itemslistp ({judul,gambar,kalimat,suka,id,progres}){
  const [count, setCount] = useState(Number(suka));
    return(

        <div className='flex justify-center py-2 pr-4 '> 
        <div className="card card-compact w-96 border shadow-xl pt-2 shadow-orange-100">
          <figure className='w-80 px-4'><img className='py-4 h-40 ' src={gambar} alt="html" /></figure>
          <div className="card-body">
            <h2 className="card-title">{judul}</h2>
            <p>{kalimat} </p>
            <div className='pb-14'>
            <div>
              <progress className="progress w-56 bg-neutral-content" value={progres} max="100"></progress><p>{count} orang menyukai ini</p>
            </div>
            <div className="card-actions justify-end pt-2">
        
              <button className="btn btn-primary"
              onClick={()=>{
                setCount(count +1);
                console.log(count)
              }}
              >suka</button>
            </div>
            </div>
        </div>
        </div>
        </div>

    )
}

export default Itemslistp;