import styled from 'styled-components'

export const CardWrapper = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.card.background};
    border: 1px solid ${({ theme }) => theme.card.border};
    border-radius: 10px;
`
