import React from 'react';
import '../css/settings.css'; // Para aplicar los estilos adicionales

function Settings({ brightness, fontSize, onBrightnessChange, onFontSizeChange }) {
  // Función para manejar el cambio de brillo
  const handleBrightnessChange = (e) => {
    onBrightnessChange(e.target.value);
  };

  // Función para manejar el cambio de tamaño de fuente
  const handleFontSizeChange = (e) => {
    onFontSizeChange(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Configuration</h2>
      <div className="settings-item">
        <label htmlFor="brightness">Brightness</label>
        <input
          id="brightness"
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={handleBrightnessChange}
          className="input-range"
        />
        <div className="value-container">
          <span>{brightness}%</span>
        </div>
      </div>

      <div className="settings-item">
        <label htmlFor="fontSize">Font Size</label>
        <input
          id="fontSize"
          type="range"
          min="10"
          max="40"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="input-range"
        />
        <div className="value-container">
          <span>{fontSize}px</span>
        </div>
      </div>

      <div className="preview mt-4">
        <p style={{ filter: `brightness(${brightness}%)`, fontSize: `${fontSize}px` }}>
          E.g. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius.
        </p>
      </div>

      {/* <div class="card text-bg-dark copyright">
          <div class="card-img-overlay">
            <h5 class="card-title">© 2025 ABC Solutions. All Rights Reserved.</h5>
            <p class="card-text">Unauthorized use and/or duplication of this material without express and written permission from ABC Solutions is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to ABC Solutions with appropriate and specific direction to the original content.</p>
            <p class="card-text"><small>Developers: Daniel Sarmiento. Julian Avila.</small></p>
          </div>
      </div> */}

      <div class="card mt-2">
        <div class="card-body">
          <h5 class="card-title">© 2025 ABC Solutions. All Rights Reserved.</h5>
          <p class="card-text">Unauthorized use and/or duplication of this material without express and written permission from ABC Solutions is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to ABC Solutions with appropriate and specific direction to the original content.</p>
          <p class="card-text">Thank you for purchasing Weather Time. If you have any issues or feedback, please contact: 1800 123 456.
          Data provided by © Weather API. Best efforts are taken to ensure accuracy of the data, but no guarantees are made. To view the official data, please visit the website of https://www.weatherapi.com/.</p>
          <p class="card-text"><small>Developers: Daniel Sarmiento. Julian Avila.</small></p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
