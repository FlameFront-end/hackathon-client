import styled from 'styled-components'

export const SpeedStyledWrapper = styled.div`
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

        & button {
            padding: 20px 70px;
            text-align: center;
            font-size: 20px;
            border-radius: 50px;
            border: 1px solid #686868;
            box-shadow: 0 0 2px 0 #3939396e;
            transition: 0.3s;

            &:hover {
                box-shadow: 0 0 10px 0 #686868;
            }
        }
    }
`
