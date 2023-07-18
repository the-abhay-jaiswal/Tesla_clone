import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Explore Inventory"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />
      <Section
        title="Model Y"
        description="After Federal Tax Credit"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
        leftButtonText="Explore Inventory"
        rightButtonText="Custom Order"
        price="Starting at $40,240"
      />
      <Section
        title="Model 3"
        description="After Federal Tax Credit"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
        leftButtonText="Explore Inventory"
        rightButtonText="Custom Order"
        price="Starting at $32,740"
      />
      <Section
        title="Model X"
        description="Explore Inventory"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Powerwall"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
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
