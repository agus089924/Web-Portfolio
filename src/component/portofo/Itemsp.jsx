import React from "react";
import { Itemslistp } from "./../portofo/listp";
import datap from "./../../data/list-porto.json";
const Itemsp = () => {
  return (
    <div className="grid">
      {datap.map((v, i) => (
        <Itemslistp
          key={i}
          judul={v.judul}
          gambar={v.gambar}
          kalimat={v.kalimat}
          progres={v.progres}
          id={v.id}
        />
      ))}
    </div>
  );
};

export default Itemsp;
