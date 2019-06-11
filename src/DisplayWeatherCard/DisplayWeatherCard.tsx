import React from 'react';
import styled , { keyframes } from 'styled-components';
const CardAnim = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;

  }
`
const Card = styled.div`
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    grid-row: 7/14;
    grid-column: 5/9;
    background-color:  #fff;
    border: 2px solid  #0D68F1;
    border-radius: 10px;
    animation: ${CardAnim} 1s  linear;
    position: relative;
    color: #0D68F1;
    & h3{
        position: absolute;
        font-weight: 800;
        top: 20px;
        font-size: 3em;
    }
    & p{
        font-size: 2em;
        text-align: left;
        line-height: 1.5;
    }
`
const DsiplayWeatherCard = (props:any) => {
    
    return(
            <Card>
                <h3>Pogoda dla {props.cityName}</h3>
                <p>Temperatura: {props.data.temp}°C</p>
                <p>{props.data.description}</p>
                <p>Ciśnienie: {props.data.pressure} hPa</p>
                <p>Wilgotność: {props.data.humidity}%</p>
                <p>Prędkość wiatru: {props.data.wind} m/s</p>
            </Card>
    )
 
}

export default DsiplayWeatherCard;