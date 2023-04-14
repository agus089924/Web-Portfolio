import React from "react";
import { Itemslist } from "./../portofo/list";
import datap from "./../../data/list-porto.json";

const Items = () => {
  return (
    <div className="flex justify-center">
      {datap.map((v, i) => (
        <Itemslist
          key={i}
          judul={v.judul}
          gambar={v.gambar}
          suka={v.suka}
          kalimat={v.kalimat}
          progres={v.progres}
          id={v.id}
        />
      ))}
    </div>
  );
};

export default Items;
