import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const [burgerStatus, setStatus] = useState(false);

    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                { cars && cars.map((car, index) => (
                    <p key={index}><a href="#">{car}</a></p>
                )) }
            </Menu>
            <RightMenu>
                <p><a href="#" className='hide-sm'>Shop</a></p>
                <p><a href="#" className='hide-sm'>Account</a></p>
                <p onClick={() => setStatus(!burgerStatus)}><a href="#">Menu</a></p>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setStatus(!burgerStatus)} />
                </CloseWrapper>
                <ul>
                    { cars && cars.map((car, index) => (
                        <li className='show-sm' key={index}><a href="#">{car}</a></li>
                    )) }
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Trade-in</a></li>
                    <li><a href="">Test Drive</a></li>
                    <li><a href="">Cybertruck</a></li>
                    <li><a href="">Roadster</a></li>
                    <li><a href="">Semi</a></li>
                    <li><a href="">Charging</a></li>
                    <li><a href="">Powerwall</a></li>
                    <li><a href="">Commercial Energy</a></li>
                    <li><a href="">Utilities</a></li>
                    <li><a href="">Find Us</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </BurgerNav>
        </Container>
        
    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-left: 105px;
    
    p{
        font-size: 14px;
        font-weight: 600;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1200px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 14px;
        font-weight: 600;
        padding: 0 10px;
    } 
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 310px;
    z-index: 16;
    padding: 40px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.5s;

    ul {
        list-style: none;

        li {
            padding: 10px 0;

            a {
                color: #393c41;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
`