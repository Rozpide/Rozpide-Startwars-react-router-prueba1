/*import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/CardPeople";
import { CardVehicles } from "../component/CardVehicles";
import { CardPlanets } from "../component/CardPlanets";

const Home = () => {
  if (localStorage.getItem("favorites") === null) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
  else {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites);
  }
  const { actions } = useContext(Context);


  useEffect(() => {
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Star Wars Database</h1>
      <div className="d-flex justify-content-between mb-3">
        <h2>People</h2>
        <Link to="/favorites" className="btn btn-primary">
          Favorites
        </Link>
      </div>
      <CardPeople />
      <div className="d-flex justify-content-between mb-3">
        <h2>Vehicles</h2>
        <Link to="/favorites" className="btn btn-primary" />
      </div>
      <CardVehicles />
      <div className="d-flex justify-content-between mb-3">
        <h2>Planets</h2>
        <Link to="/favorites" className="btn btn-primary" />
      </div>
      <CardPlanets />
    </div>
  );
};

export { Home };*/
/*------------------------------------*/
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/CardPeople";
import { CardVehicles } from "../component/CardVehicles";
import { CardPlanets } from "../component/CardPlanets";

const Home = () => {
  if (localStorage.getItem("favorites") === null) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
  else {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites);
  }
  const { actions } = useContext(Context);


  useEffect(() => {
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Star Wars Database</h1>
      <div className="d-flex justify-content-between mb-3">
        <h2>People</h2>
        
      </div>
      <CardPeople />
      <div className="d-flex justify-content-between mb-3">
        <h2>Vehicles</h2>
        
      </div>
      <CardVehicles />
      <div className="d-flex justify-content-between mb-3">
        <h2>Planets</h2>
        
      </div>
      <CardPlanets />
    </div>
  );
};

export { Home };


/*------------------------------------*/



