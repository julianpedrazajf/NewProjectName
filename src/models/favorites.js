// src/cityModel.js

// Array to store cities (simulating a local database)
let cities = [];

// Function to create a city
export const createCity = (city) => {
  if (!city) {
    throw new Error('Invalid city name.');
  } else {
    console.log('added');
  }

  // Add the city to the array
  cities.push(city);

  return city; // Return the created city
};

// Function to delete a city by its ID
export const deleteCity = (id) => {
  if (id === -1) {
    throw new Error('City not found.');
  }

  // Remove the city from the array
  const deletedCity = cities.splice(id, 1)[0];

  return deletedCity; // Return the deleted city
};

// Function to get all cities
export const getCities = () => {
  return [...cities]; // Devuelve una copia del array para evitar problemas de referencia
};

// (Optional) Function to reset the cities array (useful for testing)
export const resetCities = () => {
  cities = [];
  console.log('Cities list reset.');
};