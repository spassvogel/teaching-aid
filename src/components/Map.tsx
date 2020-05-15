import React, { useState, useRef, useEffect, useMemo } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import sound from 'pixi-sound';
import Marker from "./pixi/Marker";
import { Stage, Sprite, Text, Container, Graphics } from "@inlet/react-pixi";
import ContentModal from "./contentModal";
import Viewport from "./pixi/Viewport";
import * as PIXI from 'pixi.js';
import { PixiPlugin } from 'gsap/all';
import { gsap } from 'gsap'
import Conveyor from "./pixi/Conveyor";
import Label from "./pixi/Label";
import { ILabel } from "../common/constants";

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}

interface Props {
  content: ILabel[];
  image: string;
  children?: React.ReactNode;
  worldWidth: number;
  worldHeight: number;
  canvasWidth: number;
  canvasHeight: number;
  blur?: boolean;
  labelClick: (label: ILabel, viewport: PixiViewport, background: PIXI.Sprite) => void;
}

const Map = (props: Props) => {
  const { 
    content,
    image, 
    children,
    worldWidth, 
    worldHeight, 
    canvasWidth, 
    canvasHeight, 
    blur = false } = props;
  const viewportRef = useRef<PixiViewport>(null);
  const backgroundRef = useRef<PIXI.Sprite>(null);

  useEffect(() => {
    // Center the map
    if (viewportRef.current) {
      const viewport = viewportRef.current;
      viewport.resize(canvasWidth, canvasHeight, worldWidth, worldHeight);
      viewport.scale = new PIXI.Point(.5, .5);
      viewport.moveCenter(worldWidth / 2, worldHeight / 2);


      return () => {
        // tween.kill(viewport);
      }
    }
  }, [canvasWidth, canvasHeight, worldWidth, worldHeight]);

//   useEffect(() => {
//     viewportRef.current?.on("zoomed", (event) => { 
//       const factor = 1 / (event.viewport as any).lastViewport.scaleX;;
//       labelRef.current!.scale = new PIXI.Point(factor, factor);
// //      console.log(labelRef)
//     });
//     // todo normalize zoom on labels
//   }, [viewportRef])

  useEffect(() => {
    // Blur the map when situation is selected
    if (blur) {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:20}});
    } else {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:0}});
    }
  }, [blur]);

  const handleLabelClick = (label: ILabel) => {
    props.labelClick(label, viewportRef.current!, backgroundRef.current!);
  }

  const renderLabel = (label: ILabel, index: number) => {
    const position = new PIXI.Point(label.position[0], label.position[1]);

    return (
      <Label
        key={label.text}
        text={label.text}
        position={position}
        pointertap={() => handleLabelClick(label)}
        interactive={true}
      />
    ); 
  }

  return (
      <Stage width={canvasWidth} height={canvasHeight} options={{transparent: true}} >
      <Viewport 
        screenWidth={canvasWidth} screenHeight={canvasHeight} worldWidth={worldWidth} worldHeight={worldHeight} ref={viewportRef} >
        <Sprite image={`${process.env.PUBLIC_URL}/${image}`} ref={backgroundRef} >
          {children}
          {content.map((label, index) => renderLabel(label, index))}
        </Sprite>
      </Viewport>
    </Stage>
  )
};

export default Map;