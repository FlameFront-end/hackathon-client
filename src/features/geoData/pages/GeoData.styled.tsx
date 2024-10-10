import styled from 'styled-components'

export const GeoDataStyledWrapper = styled.div`
    .geodata {
        display: flex;
        flex-direction: row;
        align-items: start;
        padding: 40px 20px;
    }
    
    .infa{
        width: 450px;
    }
    
    .bottom_App{
        width: 100%;
    }

    .heading {
        font-size: 30px;
        font-weight: 700;
        line-height: 110%;
    }

    .heading span {
        color: #999;
        font-size: 30px;
        line-height: 110%;
    }

    .coords {
        color: #75A4FF;
        font-size: 20px;
        font-weight: 400;
    }

    .card_block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 14px;
        padding: 20px 0;
    }

    .row {
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        gap: 32px;
    }

    .card {
        display: flex;
        gap: 8px;
        align-items: center;
        color: #999;
        font-weight: 700;
        background-color: transparent;
    }

    .card span {
        color: #FFF;
    }


    .text {
        display: flex;
        flex-direction: column;
    }

    .bottom {
        margin-top: 32px;
    }

    .bottom .row {
        padding-top: 12px;
        gap: 24px;
    }

    .badge {
        display: flex;
        border-radius: 12.857px;
        border: 1.5px solid #292929;
        margin-bottom: 16px;
    }

    .left, .right {
        padding: 8px 11px;
    }

    .left {
        background: #292929;
        color: #999;
        font-size: 20px;
        font-weight: 700;
    }

    .right {
        font-size: 20px;
        font-weight: 700;
        text-decoration-line: underline;
    }
    
    
`
