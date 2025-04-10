import React, { useState, useEffect } from 'react';
import { getCities, deleteCity } from '../models/favorites';
import '../css/favorites.css';

function Favorites() {
  // Utiliza el estado para almacenar las ciudades
  const [cities, setCities] = useState(getCities());

  // Función para eliminar una ciudad
  const handleDeleteCity = (id) => {
    deleteCity(id); // Elimina la ciudad del almacenamiento
    setCities((prevCities) => prevCities.filter((city, index) => index !== id)); // Actualiza el estado con un nuevo array
  };

  // Opcional: Si las ciudades pueden cambiar externamente, puedes usar useEffect para actualizar el estado
  useEffect(() => {
    setCities(getCities());
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div className='favoriteslist'>
      {cities.map((city, index) => (
        <div key={index} className="card text-bg-dark m-2 favoriteCard">
          <img src="https://i.pinimg.com/736x/22/0a/a4/220aa415fa17d0d5af90f2a42cea978c.jpg" className="card-img" alt="..." />
          <div className="card-img-overlay">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <h5 className="card-title favoriteName">{city.location.name}</h5>
                  <p className="card-text"><small>{city.current.condition.text}</small></p>
                </div>
                <div className="col-4">
                  <h5 className="card-title favoriteTemperature">{city.current.temp_c}°C</h5>
                </div>
                <div className="col-4">
                  <button className="delete-button" onClick={() => handleDeleteCity(index)}>Delete</button>
                  <p className="card-text"><small>{city.location.localtime}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;