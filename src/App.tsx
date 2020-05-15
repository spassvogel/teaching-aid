import React, { useEffect, useState } from 'react';
import './App.css';
import overview from './content/overview.json';
import warehouse from './content/warehouse.json';
import Overview from './components/Overview';
import Warehouse from './components/Warehouse';

enum map {
  overview,
  warehouse
}

function App() {

  const [currentMap, setCurrentMap] = useState(map.overview);
  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(600);

  useEffect(() => {
    // This will set the dimensions of the canvas to that of the window
    const resize = () => {
      const width = Math.min(window.innerWidth, window.outerWidth);
      const height = Math.min(window.innerHeight, window.outerHeight);
      setCanvasWidth(width);
      setCanvasHeight(height); 
    }
    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleOverviewLabelClicked = () => {
    setCurrentMap(map.warehouse);
  }

  const handleBackClicked = () => {
    setCurrentMap(map.overview);
  }

  return (
    <>
      {/* { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)} */}
      { currentMap === map.overview && (
        <Overview 
          content={overview}
          labelClicked={handleOverviewLabelClicked}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        /> )
      }
      { currentMap === map.warehouse && (
        <Warehouse 
          content={warehouse}
          labelClicked={handleOverviewLabelClicked}
          goBack={handleBackClicked}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        /> )
      }
    </>  
  )
};

export default App;

