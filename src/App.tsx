import React, { useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Stage, Sprite } from '@inlet/react-pixi';
import Viewport from './components/pixi/Viewport';
import { Viewport as PixiViewport } from "pixi-viewport";
import Marker from './components/pixi/Marker';
import { PixiPlugin } from 'gsap/all';
import './App.css';
import ParticleEmitter from './components/pixi/ParticleEmitter';
import content from './content/content.json';
import ContentModal from './components/contentModal';
import Overview from './components/Overview';
import IntroModal from './components/introModal/introModal';
import Map from './components/Map';
import { ILabel } from './common/constants';

enum map {
  overview,
  warehouse
}

function App() {


  const [intro, setIntro] = useState(true);
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

  const handleOverviewLabelClicked = (content: ILabel) => {
    setCurrentMap(map.warehouse);
  }

  return (
    <>
      {/* { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)} */}
      { currentMap === map.overview && (
        <Overview 
          content={content}
          labelClicked={handleOverviewLabelClicked}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        /> )
      }
    </>  
  )
};

export default App;

