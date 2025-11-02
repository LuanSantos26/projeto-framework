"use client";

import { useState, useEffect } from "react";

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/animes")
      .then((response) => response.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error("Error fetching animes:", error));
  }, []);
}
return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Listar meus animes (fetch)</h1>
    <ul>
      {animes.map((p) => (
        <li key={p.id}>
          {p.nome} - {p.genero}
        </li>
      ))}
    </ul>
  </div>
);
