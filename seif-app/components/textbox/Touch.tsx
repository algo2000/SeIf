import { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type TouchState = {
  start : String,
  move : String,
  end : String
}

const TouchSpace = styled.div`
  width: 300px;
  height: 200px;
  background-color: blue;
`;

const Touch = () => {

  const touchSpace:RefObject<HTMLDivElement>= useRef(null);

  const [touch, setTouch] = useState<TouchState>({
    start : 'start',
    move : 'move',
    end : 'end',
  });

  useEffect(() => {
    const element = touchSpace.current;
    
    const handleTouchStart = (e: TouchEvent) => {
      console.log('Start');
      console.log(e);
      setTouch({
        ...touch,
        start : e.touches[0].clientX.toFixed(3)+ ", " + e.touches[0].clientY.toFixed(3)
      });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      console.log('Move');
      setTouch({
        ...touch,
        move : e.touches[0].clientX.toFixed(3)+ ", " + e.touches[0].clientY.toFixed(3)
      });
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      console.log('End');
      console.log(e);
      setTouch({
        ...touch,
        end : e.changedTouches[0].clientX.toFixed(3)+ ", " + e.changedTouches[0].clientY.toFixed(3)
      });
    };
    element?.addEventListener('touchstart', handleTouchStart);
    element?.addEventListener('touchmove', handleTouchMove);
    element?.addEventListener('touchend', handleTouchEnd);
    return () => {
      element?.removeEventListener('touchstart', handleTouchStart);
      element?.removeEventListener('touchmove', handleTouchMove);
      element?.removeEventListener('touchend', handleTouchEnd);
    };
}, [])

  return (
    <>
      <TouchSpace ref={touchSpace}>
        <a>start : {touch.start}</a><br/>
        <a>move : {touch.move}</a><br/>
        <a>end : {touch.end}</a><br/>
      </TouchSpace>
    </>
  );
}

export default Touch;