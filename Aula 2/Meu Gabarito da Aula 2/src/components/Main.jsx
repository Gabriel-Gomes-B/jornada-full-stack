import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Nosso ItemList de Artistas*/}
      <ItemList title="Artistas" items={10} itemsArray={artistArray} path='/artists' idPath='/artist' />

      {/* Nosso ItemList de Músicas*/}
      <ItemList title="Músicas" items={25} itemsArray={songsArray} path='/songs' idPath='/song'  />
    </div>
  );
};

export default Main;
