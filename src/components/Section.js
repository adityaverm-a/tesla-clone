import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, leftButton, rightButton, backgroundImg, first }) => {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p className='sec-p'>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        { rightButton && 
                            <RightButton>
                                {rightButton}
                            </RightButton> 
                        }
                    </ButtonGroup>
                </Fade>
                
                { first &&
                    <DownArrow src='/images/down-arrow.svg' />

                }
            </Buttons>
        </Wrap>
    )
}

Section.propTypes ={
    title: PropTypes.string,
    first: PropTypes.string,
    description: PropTypes.string,
    leftButton: PropTypes.string,
    rightButton: PropTypes.string,
    backgroundImg: PropTypes.string
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImg}')`};
    scroll-snap-align: start;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    p {
        color: #5c5e62;
        font-size: 14px;
    }
`;

const Buttons = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`