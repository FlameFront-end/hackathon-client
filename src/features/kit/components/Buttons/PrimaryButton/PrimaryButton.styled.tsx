import styled from 'styled-components'

export const StyledPrimaryButton = styled.button`
    color: #e1e3e6;
    background-color: ${({ theme }) => theme.accent};
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 5px;
`
