import styled from 'styled-components'

export const MapStyledWrapper = styled.div`
    .top {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
        background: #292929;
    }

    .column {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .title {
        font-size: 14px;
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }

    .title span {
        color: #999;
        font-size: 14px;
    }

    .ymap {
        height: 80vh;
        width: 100%;
    }
`
