import React from 'react';
import styled from 'styled-components';
const LayoutContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap');
    width:100vw;
    max-width: 100%;
    font-size: 10px;
    height: auto;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: 5vh;
    grid-gap: 20px;
`
const Layout = (props:any) => {
    
    return(
            <LayoutContainer>
                {props.children}
            </LayoutContainer>
    )
 
}

export default Layout;