import styled from 'styled-components'

export const HistoryWrapper = styled.div`
    .history {
        width: 100%;
        padding: 0 25px;
    }
    .results{
        display: flex;
        flex-direction: row;
        gap: 19px;
        & div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;    
        }
    }
    .time{
        text-align: center;
        
    }
`
