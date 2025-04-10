import './App.css';
import { useState } from 'react';
import { FaCog, FaStar, FaHome } from 'react-icons/fa';
import Main from './components/main'
import Settings from './components/settings';
import Favorites from './components/favorites';

function App() {

  const [brightness, setBrightness] = useState(100);
  const [fontSize, setFontSize] = useState(16);
  const [currentComponent, setCurrentComponent] = useState('main');

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="App" style={{ filter: `brightness(${brightness}%)`, fontSize: `${fontSize}px` }}>
      <header className="App-header">
        <button className="header-button config-btn">
          <FaCog size={24} onClick={() => handleButtonClick('settings')} />
        </button>
        <button className="header-button config-btn">
          <FaHome size={24} onClick={() => handleButtonClick('main')} />
        </button>
        <button className="header-button favorites-btn">
          <FaStar size={24} onClick={() => handleButtonClick('favorites')} />
        </button>
      </header>
      <main className='App-main'>
        {currentComponent === 'main' && <Main />}
        {currentComponent === 'settings' && (
          <Settings
            brightness={brightness}
            fontSize={fontSize}
            onBrightnessChange={handleBrightnessChange}
            onFontSizeChange={handleFontSizeChange}
          />
        )}
        {currentComponent === 'favorites' && <Favorites />}
      </main>
    </div>
  );
}

export default App;