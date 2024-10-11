import styled from 'styled-components'

export const HistoryWrapper = styled.div`   
    padding-bottom: 130px;
    position: relative;
    
    .show {
        position: fixed;
        right: 20px;
        bottom: 100px;
        z-index: 1000;
    }
    
    div {
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }

    .history {
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 30px 20px;
    }
    

    .record {
        height: 100%;
        width: 100%;
        max-width: 1100px;
    }

    .block_result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .ant-list {
        width: 100%;
        max-width: 1000px;
    }

    .results {
        display: flex;
        flex-direction: row;
        gap: 19px;
        
 

        & div:nth-child(1) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .time {
        text-align: center;
        margin-top: 6px;
    }

    .info {
        text-align: center;
    }

    #Mb {
        font-size: 11px;
    }

    .loader{
        height: 60vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
