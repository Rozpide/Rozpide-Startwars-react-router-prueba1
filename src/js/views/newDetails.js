/*import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item = 
      category === "people"
        ? store.people.find(p => p.url.split('/').slice(-2, -1)[0] === id)
        : category === "vehicles"
        ? store.vehicles.find(v => v.url.split('/').slice(-2, -1)[0] === id)
        : store.planets.find(pl => pl.url.split('/').slice(-2, -1)[0] === id);

    setDetails(item);
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`}
          className="card-img-top"
          alt={details.name || details.title}
        />
        <div className="card-body">
          <h1 className="card-title">{details.name || details.title}</h1>
          {category === "people" && (
            <>
              <p className="card-text">Height: {details.height}</p>
              <p className="card-text">Mass: {details.mass}</p>
              <p className="card-text">Hair Color: {details.hair_color}</p>
              <p className="card-text">Skin Color: {details.skin_color}</p>
              <p className="card-text">Eye Color: {details.eye_color}</p>
              <p className="card-text">Birth Year: {details.birth_year}</p>
              <p className="card-text">Gender: {details.gender}</p>
            </>
          )}
          {category === "planets" && (
            <>
              <p className="card-text">Climate: {details.climate}</p>
              <p className="card-text">Diameter: {details.diameter}</p>
              <p className="card-text">Gravity: {details.gravity}</p>
              <p className="card-text">Orbital Period: {details.orbital_period}</p>
              <p className="card-text">Population: {details.population}</p>
              <p className="card-text">Rotation Period: {details.rotation_period}</p>
              <p className="card-text">Surface Water: {details.surface_water}</p>
              <p className="card-text">Terrain: {details.terrain}</p>
            </>
          )}
          {category === "vehicles" && (
            <>
              <p className="card-text">Model: {details.model}</p>
              <p className="card-text">Manufacturer: {details.manufacturer}</p>
              <p className="card-text">Cost in Credits: {details.cost_in_credits}</p>
              <p className="card-text">Length: {details.length}</p>
              <p className="card-text">Max Atmosphering Speed: {details.max_atmosphering_speed}</p>
              <p className="card-text">Crew: {details.crew}</p>
              <p className="card-text">Passengers: {details.passengers}</p>
              <p className="card-text">Cargo Capacity: {details.cargo_capacity}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewDetails };*/
/*----------------------------------------------*/
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item = 
      category === "people"
        ? store.people.find(p => p.url.split('/').slice(-2, -1)[0] === id)
        : store.planets.find(pl => pl.url.split('/').slice(-2, -1)[0] === id);

    setDetails(item);

    // Generar la URL de la imagen
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
    setImageUrl(imageUrl);
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={details.name || details.title}
        />
        <div className="card-body">
          <h1 className="card-title">{details.name || details.title}</h1>
          {category === "people" && (
            <>
              <p className="card-text">Height: {details.height}</p>
              <p className="card-text">Mass: {details.mass}</p>
              <p className="card-text">Hair Color: {details.hair_color}</p>
              <p className="card-text">Skin Color: {details.skin_color}</p>
              <p className="card-text">Eye Color: {details.eye_color}</p>
              <p className="card-text">Birth Year: {details.birth_year}</p>
              <p className="card-text">Gender: {details.gender}</p>
            </>
          )}
          {category === "planets" && (
            <>
              <p className="card-text">Climate: {details.climate}</p>
              <p className="card-text">Diameter: {details.diameter}</p>
              <p className="card-text">Gravity: {details.gravity}</p>
              <p className="card-text">Orbital Period: {details.orbital_period}</p>
              <p className="card-text">Population: {details.population}</p>
              <p className="card-text">Rotation Period: {details.rotation_period}</p>
              <p className="card-text">Surface Water: {details.surface_water}</p>
              <p className="card-text">Terrain: {details.terrain}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewDetails };

