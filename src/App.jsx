import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "./assets/rick.webp";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <main
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[2rem] font-semibold text-center text-amber-300 mb-12">
        Rick and Morty Characters
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="font-semibold text-cyan-900">{character.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
