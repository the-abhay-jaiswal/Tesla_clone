import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Explore Inventory"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />
      <Section
        title="Model Y"
        description="After Federal Tax Credit"
        backgroundImage="model-y.jpg"
        leftButtonText="Explore Inventory"
        rightButtonText="Custom Order"
        price="Starting at $40,240"
      />
      <Section
        title="Model 3"
        description="After Federal Tax Credit"
        backgroundImage="model-3.jpg"
        leftButtonText="Explore Inventory"
        rightButtonText="Custom Order"
        price="Starting at $32,740"
      />
      <Section
        title="Model X"
        description="Explore Inventory"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Powerwall"
        backgroundImage="powerwall.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
