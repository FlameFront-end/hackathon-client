import styled from 'styled-components'

export const MapStyledWrapper = styled.div`
    .ymaps-2-1-79-inner-panes {
        //filter: grayscale(1);
    }
    
    .top {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
        background: #292929;
    }

    .column {
        display: flex;
        gap: 8px;
        align-items: end;
    }

    .title {
        font-weight: 400;
        font-size: 14px;
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
