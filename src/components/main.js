import React, { useState, useEffect } from 'react';
import '../css/Main.css';
import Swal from 'sweetalert2'
import {createCity} from '../models/favorites';

function Main() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isCelsius, setIsCelsius] = useState(true);
    const [error, setError] = useState(null); // Estado para manejar errores

    const handleReset = () => {
        setInputValue("");
        setData([]);
        setError(null);
    };

    const handleClick = (unit) => {
        if (unit === "Celsius") {
            setIsCelsius(true);
        } else {
            setIsCelsius(false);
        }
    };

    const favoriteClick = () => {
        createCity(data);
    }; 

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            setLoading(true);
            setError(null);
            const url = `https://api.weatherapi.com/v1/current.json?key=9c9978c931164bb095a82121251302&q=${inputValue}`;

            // Configuración de la solicitud
            const headers = {
                'Authorization': '9c9978c931164bb095a82121251302',  // Pasa la API key en los headers
                'Content-Type': 'application/json',
            };
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then((response) => {
                    if (!response.ok) {
                        Swal.fire({
                            title: "City not found!",
                            icon: "warning",
                            draggable: true,
                            confirmButtonColor: "#00b1d0"
                          });
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    console.log(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setError(error.message || 'Something went wrong. Please try again.');
                    setLoading(false);
                });
        }
    };

    if (loading) {
        return (
            <div className="loading_div">
                <div className="spinner-border text-secondary" role="status"></div>
                <div className='loading'>Loading...</div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="form__group field">
                    <input
                        type="input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleEnterPress}
                        className="input-field"
                        placeholder="Choose city..."
                        name="name"
                        id="name"
                        required
                        autoComplete="off"
                    />
                    {inputValue && (
                        <button className="reset-button" onClick={handleReset}>
                            X
                        </button>
                    )}
                </div>
                <div>
                    {data && data.location && data.current ? (
                        <div className="weather-container">
                            <div className="location">
                                <h2>{data.location.name}</h2>
                                <p className='local-time'>{data.location.localtime}</p>
                                <p>Current weather</p>
                            </div>
                            <div className="weather-info">
                                <div className="temperature">
                                    <h3>{isCelsius ? `${data.current.temp_c}°C` : `${data.current.temp_f.toFixed(1)}°F`}</h3>
                                </div>
                                <div className="weather-icon">
                                    <img
                                        src={`https://${data.current.condition.icon}`}
                                        alt={data.current.condition.text}
                                    />
                                </div>
                                <div className="condition">
                                    <p>{data.current.condition.text}</p>
                                </div>
                                <div>
                                <button type="button" className="btn btn-outline-primary"
                                onClick={() => favoriteClick()}
                                >Add to my favorites</button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className='temp_buttons'>
                    <div className="temperature-toggle">
                        <button
                            className={`toggle-button ${isCelsius ? "active" : ""}`}
                            onClick={() => handleClick("Celsius")}
                        >
                            °C
                        </button>
                        <button
                            className={`toggle-button ${!isCelsius ? "active" : ""}`}
                            onClick={() => handleClick("Fahrenheit")}
                        >
                            °F
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;