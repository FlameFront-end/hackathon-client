import styled from 'styled-components'

export const DotStylesWrapper = styled.div`
    #toggle-button {
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: rgb(130, 25, 191);
        color: #f0ead6;
        font-size: 1.2rem;
        min-width: 70px;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        transition: 0.3s;
    }
    #toggle-button:hover {
        scale: 1.1;
        box-shadow: 0 0 4px 4px gray;
    }
    /* Deck.gl layer is added as an overlay, popup needs to be displayed over it */
    .maplibregl-popup {
        z-index: 2;
    }
`
