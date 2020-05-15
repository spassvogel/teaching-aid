import React, { useState } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from 'pixi.js';
import { ILabel } from "../common/constants";
import Map from "./Map";
import './warehouse.css';
import ContentModal from "./contentModal";

interface Props {
  content: ILabel[];
  children?: React.ReactNode;
  canvasWidth: number;
  canvasHeight: number;
  labelClicked: (contentItem: ILabel) => void;
  goBack: () => void;
}

const Warehouse = (props: Props) => {
  const {content, canvasWidth, canvasHeight} = props;
  const [selectedLabel, setSelectedLabel] = useState<ILabel | null>(null);

  const handleLabelClick = (label: ILabel) => {
    setSelectedLabel(label);
    // const filter = new ZoomBlurFilter(0.05, [canvasWidth / 2, canvasHeight / 2], 300)
    // background.filters = [filter];
    // gsap.to(filter, {
    //   duration: .8,
    //   strength: .2
    // });
    // const localPos = new PIXI.Point(contentItem.position[0], contentItem.position[1] - 30);
    
    // gsap.to(viewport, {
    //   duration: .8,
    //   onUpdate: () => {
    //     viewport.moveCenter(localPos);  
    //   },
    //   pixi: {
    //     scale: 1
    //   },
    //   onComplete: () => {
    //     props.labelClicked(contentItem);
    //   }
    //});
  }

  const handleClose = () => {
    setSelectedLabel(null);
  }

  return (
    <>
      <div className="button-home" onClick={props.goBack}/>
      <Map
        content={content}
        image="images/map/zalmweg.png"
        worldWidth={5487}
        worldHeight={2707}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        labelClick={handleLabelClick}
      >
      </Map>
      { selectedLabel && (
      <ContentModal 
        content={selectedLabel} 
        onClose={handleClose} 
      /> 
    )}

    </>
  )
};

export default Warehouse;