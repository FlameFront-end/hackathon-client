import styled from 'styled-components'

export const SpeedStyledWrapper = styled.div`
    .middle {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
        background: #292929;
    }

    .top {
        display: flex;
        justify-content: space-evenly;
        background: #292929;
        padding: 20px 0;
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

    .num {
        padding-top: 3px;
        font-weight: 700;
        font-size: 18px;
    }

    .speedometer {
        margin-top: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 36px ;
    }

    .gauge {
        --ang: 0deg;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        background: conic-gradient(from -130deg, rgba(60, 56, 86, 1), rgba(216, 105, 255, 1) var(--ang), #222 calc(var(--ang) + .1deg));
        border-radius: 9999px;
    }

    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        width: 250px;
        height: 250px;
        border-radius: 9999px;
        background-color: #191919;
    }

    .num {
        font-size: 26px;
        font-weight: 700;
        line-height: 60%;
    }

    .name {
        color: #999;
        font-weight: 400;
    }

    .btn_wrapper{
        display: flex;
        justify-content: center;
    }
`
