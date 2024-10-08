import styled from 'styled-components'

export const TextButtonWrapper = styled.button`
    display: inline-block;
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    cursor: pointer;
    text-align: left;
    width: max-content;
    
    &:hover {
        text-decoration: underline;
    }
`
