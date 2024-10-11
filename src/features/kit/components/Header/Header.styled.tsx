import styled from 'styled-components'

export const HeaderStyledWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background: rgba(34, 34, 34, 0.95);
    backdrop-filter: blur(6px);
   
    a, h1, button {
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-family: 'Comfortaa', sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;

    }
    button:hover{
        text-decoration: none;
    }
    .heading {
        font-size: 24px;
        text-align: center;
    }
    .subheading {
        display: flex;
        flex-direction: row;
        color: #999;
        align-items: center;
        justify-content: center;
    }
`
