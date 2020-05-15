import React, { useMemo, useRef, useEffect } from "react";
import { Container, Graphics, Text } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js';

interface Props {
  text: string;
}

const labelMaxHeight = 150 + 60; // three lines plus padding
//const Label = (props: Props & React.ComponentProps<typeof Container>) => {
const Label = React.forwardRef<PIXI.Container, Props & React.ComponentProps<typeof Container>>((props, ref) => {

  const textRef = useRef<PIXI.Text>(null);
  const labelWidth = 500;
  const padding = 30;
  const borderRadius = 4;
  const roundRadius = 10;
  const {text} = props;

  const style = useMemo(() => {
    return new PIXI.TextStyle({
      align: 'center',
      lineHeight: 50,
      wordWrap: true,
      wordWrapWidth: labelWidth - 2 * padding,
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: 40,
      textBaseline: "alphabetic",
      fontWeight: "400"
    });
  }, []);

  const textBoxHeight = useMemo(() => {
    const metrics = PIXI.TextMetrics.measureText(text, style);
    const height = Math.min(metrics.height + 2 * padding, labelMaxHeight);
    return height;
  }, [text, style]);

  useEffect(() => {
    const textCmp = textRef.current as any as PIXI.Text;

    const maskGraphics = new PIXI.Graphics();
    maskGraphics.beginFill(0xBADA55);
    maskGraphics.drawRect(-labelWidth / 2 + padding, 0, labelWidth-padding * 2, textBoxHeight - padding * 2);
    maskGraphics.endFill(); 

    textCmp.mask = maskGraphics;
    textCmp.addChild(maskGraphics);
}, [textBoxHeight, textRef]);

  return (
    <Container 
      interactive
      buttonMode
      anchor={[0.5, 1]}
      ref={ref}
      {...props}
    >
      <Graphics
        draw={(g:PIXI.Graphics) => {
          g.lineStyle(borderRadius, 0x000000);
          g.beginFill(0xffffff);
          // x, y, width, height, radius
          g.drawRoundedRect(-labelWidth / 2, 0, labelWidth, -textBoxHeight, roundRadius);
          g.endFill();
        }
      }>
          <Text 
            ref={textRef}  
            text={text}
            anchor={[0.5, 0]}
            y={-textBoxHeight + padding}
            style={style}          
         />

      </Graphics>
      </Container>
  )
});
export default Label;