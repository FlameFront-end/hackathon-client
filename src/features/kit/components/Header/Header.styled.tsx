import styled from 'styled-components'

export const HeaderStyledWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 17px;
    background: rgba(34, 34, 34, 0.95);
    backdrop-filter: blur(6px);
   
    a, h1 {
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-family: 'Comfortaa', sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    .heading {
        font-size: 24px;
    }
    .subheading {
        display: flex;
        flex-direction: row;
        color: #999;
        align-items: center;
        justify-content: center;
    }
`
