import React, {  } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from 'pixi.js';
import { gsap } from 'gsap'
import { ILabel } from "../common/constants";
import Map from "./Map";
import ParticleEmitter from "./pixi/ParticleEmitter";
import {ZoomBlurFilter} from '@pixi/filter-zoom-blur';
import smoke from './../smoke.json';

interface Props {
  content: ILabel[];
  children?: React.ReactNode;
  canvasWidth: number;
  canvasHeight: number;
  labelClicked: (contentItem: ILabel) => void;
}

const Overview = (props: Props) => {
  const {content, canvasWidth, canvasHeight} = props;
  
  const handleLabelClick = (contentItem: ILabel, viewport: PixiViewport, background: PIXI.Sprite ) => {
    const filter = new ZoomBlurFilter(0.05, [canvasWidth / 2, canvasHeight / 2], 300)
    background.filters = [filter];
    gsap.to(filter, {
      duration: .8,
      strength: .09
    });
    const localPos = new PIXI.Point(contentItem.position[0], contentItem.position[1] - 30);
    
    gsap.to(viewport, {
      duration: .8,
      onUpdate: () => {
        viewport.moveCenter(localPos);  
      },
      pixi: {
        scale: 1
      },
      onComplete: () => {
        props.labelClicked(contentItem);
      }
    });
  }

  console.log('overview')

  return ( 
    <Map
      content={content}
      image="images/map/landscape.png"
      worldWidth={6528}
      worldHeight={2202}
      canvasWidth={canvasWidth}
      canvasHeight={canvasHeight}
      labelClick={handleLabelClick}
    >
       <ParticleEmitter
          name="smoke"
          x={2491}
          y={793}
          image={`${process.env.PUBLIC_URL}/images/map/smoke.png`} 
          config={smoke} 
        />
    </Map>
  )
};

export default Overview;