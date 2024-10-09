import styled from 'styled-components'

export const SpeedStyledWrapper = styled.div`
    height: 100vh;

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
        padding: 0 36px;
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

    .btn_wrapper {
        display: flex;
        width: 100%;
        height: 150px;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        & button {
            width: 250px;
            height: 80px;
            text-align: center;
            font-size: 20px;
            border-radius: 50px;
            border: 1px solid #686868;
            box-shadow: 0px 0px 2px 0px #3939396e;
            transition: 0.3s;
            
            &:hover {
                box-shadow: 0px 0px 10px 0px #686868;
            }
        }
    }
`
