import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  price,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{price}</p>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Fade>
        
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 80px;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  cursor: pointer;
  background-color: white;
  opacity: 0.65;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(23, 26, 32, 0.8);
  opacity: 0.85;
  color: white;
`;
