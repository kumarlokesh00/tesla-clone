import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {

    return (
        <Container>
            <Section 
            title = "Model S"
            description="order online for touchless delivery"
            backgroundImage = "model-s.jpg" 
            leftBtntext="custom order"
            rightBtntext = "existing inventory"

            />
            <Section
             title = "Model Y"
             description = "Order Online For Touchless Delivery"
             backgroundImage = "model-y.jpg" 
             leftBtntext="custom order"
             rightBtntext = "existing inventory"
 />
            <Section 
             title = "Model 3"
             description = "Order Online For Touchless Delivery"
             backgroundImage = "model-3.jpg" 
             leftBtntext="custom order"
             rightBtntext = "existing inventory"
 />
            <Section
             title = "Model X"
             description = "Order Online For Touchless Delivery"
             backgroundImage = "model-x.jpg" 
             leftBtntext="custom order"
             rightBtntext = "existing inventory"
 />
            <Section 
             title = "Solar Panels"
             description = "Lowest Cost Solar Panels in America"
             backgroundImage = "solar-panel.jpg" 
             leftBtntext="custom order"
             rightBtntext = "existing inventory"
 />
             <Section 
             title = "Solar Roof"
             description = "Produce Clean Energy From Your Roof"
             backgroundImage = "solar-roof.jpg" 
             leftBtntext="custom order"
             rightBtntext = "existing inventory"
 />         
             <Section 
             title = "Accessories"
             description = "Order Online For Touchless Delivery"
             backgroundImage = "accessories.jpg" 
             leftBtntext="custom order"
            
             
 />
       
        </Container>
    );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
