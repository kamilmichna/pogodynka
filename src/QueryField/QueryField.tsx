import React from 'react';
import styled from 'styled-components';


const QueryArea = styled.div`
    grid-column: 5/9;
    grid-row: 4;
    display: flex;
    justify-content: center;

    align-items: center;
    & input{
        width: 80%;
        height: 100%;
        border: none;
        border-top-left-radius: 10px ;
        border-bottom-left-radius: 10px ;
        border: 2px solid #0D68F1;
        padding: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.4);
        box-sizing:  border-box;
        font-size: 1.5em;
        color: #0D68F1;
        border-right:none;
        font-weight: 700;
    }
    & button {
        width: 20%;
        height: 100%;
        border: none;
        border: 1px solid #0D68F1;
        border-top-right-radius: 10px ;
        border-bottom-right-radius: 10px ;
        color: white;
        font-weight: 700;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.4);
        background-color:  #0D68F1;
        transition-duration: 0.5s;
    }
    & button:hover{
        color: #0D68F1;
        background-color: white;
        cursor: pointer;

    }
`
const QueryField = (props:any) => {
    
    return(
            <QueryArea>
                <input onChange={(e) => props.inputChangeEventListener(e.target.value)} placeholder="Podaj miasto"/>
                <button onClick={props.buttonEventListener}>Sprawdź pogodę</button>
            </QueryArea>
    )
 
}

export default QueryField;