import React from 'react';
import styled from 'styled-components';
import Section from './Section';
 
const Home = () => {
    return (
        <Container>
            <Section 
                title='Model S'
                description='Order Online for Touchless Delivery'
                leftButton='Custom Order'
                rightButton='Existing Inventory'
                backgroundImg='model-s.jpg'
                first='first'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                leftButton='Custom Order'
                rightButton='Existing Inventory'
                backgroundImg='model-y.jpg'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                leftButton='Custom Order'
                rightButton='Existing Inventory'
                backgroundImg='model-3.jpg' 
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                leftButton='Custom Order'
                rightButton='Existing Inventory'
                backgroundImg='model-x.jpg'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                leftButton='Order Now'
                rightButton='Learn More'
                backgroundImg='solar-panel.jpg'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                leftButton='Order Now'
                rightButton='Learn More'
                backgroundImg='solar-roof.jpg'
            />
            <Section
                title='Accessories'
                description=''
                leftButton='Order Now'
                backgroundImg='accessories.jpg'
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
