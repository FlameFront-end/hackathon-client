import styled from 'styled-components'

export const HeaderStyledWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 17px;
    background: rgba(34, 34, 34, 0.95);
    backdrop-filter: blur(6px);
    
    .heading {
        font-size: 24px;
        font-weight: 100;
        text-align: center;
        font-family: 'Comfortaa', system-ui;
    }
    .subheading {
        display: flex;
        flex-direction: row;
        color: #999;
        align-items: center;
        justify-content: center;
        
        a {
            font-size: 16px;
            font-family: 'Comfortaa', sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
    }
`
