import React, { useState, useEffect } from 'react';

function Weather() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            const url = 'https://api.weatherapi.com/v1/current.json?key=9c9978c931164bb095a82121251302&q=London';

            // Configuración de la solicitud
            const headers = {
                'Authorization': '9c9978c931164bb095a82121251302',  // Pasa la API key en los headers
                'Content-Type': 'application/json',
            };

            // Hacemos la solicitud con fetch y pasamos los headers
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setData(data);  // Almacenamos los datos
                    setLoading(false);  // Ya no está cargando
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    };

  if (loading) {
    return <div className='loading_div'>Loading...</div>;
  }

  return (
    <div>
      <h1>Datos obtenidos con API Key</h1>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Weather;
