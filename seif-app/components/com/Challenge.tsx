import { useState } from "react";
import styled from "styled-components";
import IImage from "../../interfaces/IImage"

const Image = styled.img<IImage>`
  width: ${prop => prop.width != undefined ? prop.width * 2 : prop.width}px;
  height: ${prop => prop.height}px;
`;

const Challenge = ({
  width,
  height,
  url,
}: IImage) => {

  const [image] = useState<IImage>({
    width: width,
    height: height,
    url: url,
  })

  return(
    <>
      <Image 
        width={image.width}
        height={image.height}
        src={image.url}>
      </Image>
    </>
  );
}

const defaultProps: IImage = {
  width: 30,
  height: 30,
  url: '',
}

Challenge.defaultProps = defaultProps

export default Challenge;