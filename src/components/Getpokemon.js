import React from 'react';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let url = `https://pokeapi.co/api/v2/pokemon/${random(1, 898)}/`;

// getting the data from the api
async function getPokemon() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

getPokemon()
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(err => {
    console.log(err);
  });

function Getpokemon() {
  return <></>;
}

export default Getpokemon;
