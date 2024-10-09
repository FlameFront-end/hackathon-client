import styled from 'styled-components'

export const MainButtonStyledWrapper = styled.div`
    font-size: var(--base-size);

    button {
        padding: 15px 22px;
        border-radius: 9999px;
    }

    &.main {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        left: 0;
        bottom: calc(66px + 5vh);
    }
`
