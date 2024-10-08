import styled from 'styled-components'

export const StyledAccentButton = styled.button`
    color: ${({ theme }) => theme.revert_text};
    background-color: ${({ theme }) => theme.revert_background};
    border-radius: 5px;
    padding: 0 5px;
`
