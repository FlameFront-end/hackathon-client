import styled from 'styled-components'

export const HistoryWrapper = styled.div`
    width: 100%;
    height: 100%;

    div{
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    
    .history {
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 0 25px 60px;
    }
    .record{
        height: 100%;
        width: calc(100vw - 150px);
        max-width: 1100px;
    }
    .block_result{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    .results {
        display: flex;
        flex-direction: row;
        gap: 19px;

        & div:nth-child(1){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .time {
        margin-top: 5px;
        text-align: center;
        margin-top: 6px;
    }
    
    .info{
        text-align: center;
    }
    #Mb{
        font-size: 11px;
    }
`
