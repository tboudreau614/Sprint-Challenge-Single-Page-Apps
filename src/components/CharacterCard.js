import React from "react";

export default function CharacterCard({name, image}) {
  return (
    <div className="char-card">
      <p>Name: {name}</p>
      <img src={image} alt="Rick and Morty character picture"/>
    </div>
  );
}
