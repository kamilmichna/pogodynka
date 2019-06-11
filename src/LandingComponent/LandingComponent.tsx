import React from 'react';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import graphic from '../landing_img.svg';
import { Link } from 'react-router-dom';
const HeroTitle = styled.h1`
    font-family: Roboto;
    grid-column: 2/5;
    grid-row: 4;
    font-size: 3.6em;
    color: #0D68F1;
    font-weight: 700;
`
const Footer = styled.footer`
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: 20vh;
    background-color: #0D68F1;
`
const LandingGraphic = styled.img`
position: absolute;
bottom: 20vh;
right: 5vw;
height: 60vh;
width: auto;
`
const LandingDescription = styled.p`
font-family: Roboto;
grid-column: 2/6;
grid-row: 6;
font-size: 2em;
color: #0D68F1;
opacity: 0.7;
font-weight: 400;
line-height: 1.5;
`
const ToAppButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 5vh;
    background-color: #fff;
    border: 3px solid #0D68F1;
    grid-column: 2;
    border-radius: 10px;
    grid-row: 9;
    color: #0D68F1;
    font-size: 2em;
    font-family: Roboto;
    text-decoration: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition-duration: 0.5s;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`
const LandingComponent = () => {
    return(
        <Layout>
            <Header></Header>
            <HeroTitle>Sprawdź pogodę w okolicy!</HeroTitle>
            <LandingDescription>No ogólnie to kiedyś będzie tutaj jakiś fajny opis. W skrócie Pogodynka to taka aplikacja że sobie sprawdzasz pogodę napisana tylko po to żeby utrwalić pewne skillsy. Dzięki za uwagę. Ps korzystam z Open Weather Api. Ps szukam pracy</LandingDescription>
            <LandingGraphic src={graphic}/>
            <ToAppButton to='/client'>Przejdź do aplikacji</ToAppButton>
            <Footer>a</Footer>
        </Layout>
    )
}

export default LandingComponent;