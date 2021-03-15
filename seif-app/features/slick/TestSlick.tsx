import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

export const TestSlick = () => {

  const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;;
    height: 300px;
    background-color: blue;
  }
`;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
      <div>
        <h2> Single Item</h2>
        <StyledSlider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </StyledSlider>
      </div>
  );
}