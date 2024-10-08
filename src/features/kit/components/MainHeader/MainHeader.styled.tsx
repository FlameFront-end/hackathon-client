import styled from 'styled-components'

export const StyledMainHeader = styled.header`
    padding: 8px;
    background-color: ${({ theme }) => theme.card.background};
    border: 1px solid ${({ theme }) => theme.card.border};
    color: ${({ theme }) => theme.text};
    
    .content {
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 15px 0 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .user_btn {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
`
