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

    .ymaps-layers-pane {
        filter: grayscale(1);
        -ms-filter: grayscale(1);
        -webkit-filter: grayscale(1);
        -moz-filter: grayscale(1);
        -o-filter: grayscale(1);
    }
`
