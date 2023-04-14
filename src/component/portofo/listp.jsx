import React from "react";

export function Itemslistp({ judul, gambar, kalimat, suka, id, progres }) {
  return (
    <div className="flex border shadow-xl p-2 rounded-lg mx-auto m-4 shadow-orange-100 w-2/5">
      <img src={gambar} alt={judul} className="w-56 h-56 rounded" />
      <p className="text-2xl px-4 w-56 font-serif">
        {judul}
        <h1 className="text-xl py-4 w-96">{kalimat}</h1>
        <h2 className="py-4">
          <progress
            className="progress w-56 bg-neutral-content"
            value={progres}
            max="100"
          ></progress>
        </h2>
      </p>
      <p className=" items-end w-56 pt-48 pl-52">
        {" "}
        <button className="btn btn-primary">Kunjungi</button>
      </p>
    </div>
  );
}

export default Itemslistp;
