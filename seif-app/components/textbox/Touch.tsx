import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type PosXY = {
  x : number,
  y : number,
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
  /* left: ${props => props.left}px; */
  transform:translateX(${props => props.left -8}px);
  top: 0;
  transition: all ${props => props.isTouch ? '0.05s' : '0.5s ease-in-out'};
  z-index:0;
`;

const Temp = styled.div`
  overflow:hidden;
`;

const eventToPos = (e: TouchEvent): PosXY  => {
  return {x : e.touches[0]?.clientX, y : e.touches[0]?.clientY}
}

type Props = {
  children?: ReactNode,
}

const Touch = ({children}: Props) => {

  const touchSpace:RefObject<HTMLDivElement>= useRef(null);

  const [touch, setTouch] = useState<TouchState>({
    start : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    move : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    end : {y : Number(touchSpace.current?.offsetTop), x : Number(touchSpace.current?.offsetLeft)},
    isTouch : false,
  });

  const [left, setLeft] = useState<number>(0);

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
      let pos : number = e.touches[0]?.clientX - touch.start.x;
      setLeft(pos > 0 ? 0 : pos);

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
      
      if(screen.width/2 <= (left*-1))
      {
        setLeft(-1 * screen.width)
      }
      else
      {
        setLeft(0);
      }
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
    <div>
      <Temp>
        <TouchSpace left={left} isTouch={touch.isTouch} ref={touchSpace}>
          {children}
        </TouchSpace>
      </Temp>
    </div>
  );
}

export default Touch;