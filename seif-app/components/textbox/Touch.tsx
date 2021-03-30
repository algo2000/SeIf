import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type PosXY = {
  x : Number,
  y : Number,
}

type TouchState = {
  start : PosXY,
  move : PosXY,
  end : PosXY,
  isTouch: Boolean,
}

type TouchSpaceType = {
  left: number;
  isTouch: Boolean;
};

const TouchSpace = styled.div<TouchSpaceType>`
  width: 100%;
  height: 100%;
  background-color: blue;
  position: absolute;
  left: ${props => props.left}px;
  top: 0;
  transition: all ${props => props.isTouch ? '0.05s' : '0.5s ease-in-out'};
  z-index:0;
`;

const Temp = styled.div`
  overflow:hidden;
`;

const eventToPos = (e: TouchEvent): PosXY  => {
  return {x : Number(e.touches[0]?.clientX), y : Number(e.touches[0]?.clientY)}
}

type Props = {
  children?: ReactNode
}

const Touch = ({children}: Props) => {

  const touchSpace:RefObject<HTMLDivElement>= useRef(null);

  const [touch, setTouch] = useState<TouchState>({
    start : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    move : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    end : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    isTouch : false,
  });

  const initPos:PosXY = {
    x: Number(touchSpace.current?.offsetLeft),
    y: Number(touchSpace.current?.offsetTop),
  }

  const [left, setLeft] = useState<Number>(0);

  useEffect(() => {
    const element = touchSpace.current;

    const handleTouchStart = (e: TouchEvent) => {

      setTouch({
        ...touch,
        start : eventToPos(e),
        isTouch : true,
      });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      let pos : Number = Number(e.touches[0]?.clientX) - Number(touch.start.x);
      console.log(pos);
      setLeft(Number(pos));

      setTouch({
        ...touch,
        move : eventToPos(e),
      });
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      setTouch({
        ...touch,
        end : eventToPos(e),
        isTouch : false,
      });
      setLeft(0);
    };
    element?.addEventListener('touchstart', handleTouchStart);
    element?.addEventListener('touchmove', handleTouchMove);
    element?.addEventListener('touchend', handleTouchEnd);
    return () => {
      element?.removeEventListener('touchstart', handleTouchStart);
      element?.removeEventListener('touchmove', handleTouchMove);
      element?.removeEventListener('touchend', handleTouchEnd);
    };
}, [touch,left])

  return (
    <>
      <Temp>
        <TouchSpace left={Number(left)} isTouch={touch.isTouch} ref={touchSpace}>
          <a>start : {touch.start.x.toFixed(3) + ',' + touch.start.y.toFixed(3)}</a><br/>
          <a>move : {touch.move.x.toFixed(3) + ',' + touch.move.y.toFixed(3)}</a><br/>
          <a>end : {touch.end.x.toFixed(3) + ',' + touch.end.y.toFixed(3)}</a><br/>
          <a>isTouch : {String(touch.isTouch)}</a><br/>
          {children}
        </TouchSpace>
      </Temp>
    </>
  );
}

export default Touch;