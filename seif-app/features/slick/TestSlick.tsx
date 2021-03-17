import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Counter } from '../counter/Counter';

export const TestSlick = () => {

  const StyledSlider = styled(Slider)`

  .slick-slide {
    height: 30vh;
    background: #2196f3;
  }
`;

  const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
  };

  return (
      <div>
        <h2> Single Item</h2>
        <StyledSlider {...settings}>
          <div><div className="slide-0"><Counter/></div></div>
          <div><div className="slide-1"><h3>Graph 2</h3></div></div>
          <div><div className="slide-2"><h3>Graph 3</h3></div></div>
          <div><div className="slide-3"><h3>Set Up</h3></div></div>
        </StyledSlider>
      </div>
  );
}