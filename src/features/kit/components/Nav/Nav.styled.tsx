import styled from 'styled-components'

export const NavStyledWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 66px;

    position: fixed;
    bottom: 0;
    padding: 35px 0;
    overflow: hidden;
    background-color: #191919;
    .content{
        text-align: center;
        font-family: 'Comfortaa', system-ui;
    }
    
    .link {
        color: white; 
        position: relative;
        width: max(30%, 60px);
        height: 66px;
        font-weight: normal;
        font-size: 16px;
        text-decoration: none;
    }

    .link.active {
        font-weight: bold;
    }
    
    .link[data-type='speed'] {
        --grad: linear-gradient(180deg, rgba(255, 87, 208, 0.24) 0%, rgba(116, 73, 208, 0.24) 100%)
    }

    .link[data-type='map'] {
        --grad: linear-gradient(180deg, rgba(92, 138, 255, 0.24) 0%, rgba(89, 186, 99, 0.24) 100%);
    }

    .link[data-type='history'] {
        --grad: linear-gradient(180deg, rgba(255, 88, 88, 0.24) 0%, rgba(163, 74, 122, 0.24) 100%);
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 66px;
        gap: 4px;
    }

    .bg {
        position: absolute;
        inset: 50%;
        transform: translate(-50%, -50%);

        width: 20px;
        height: 20px;

        background: var(--grad);

        transition: opacity .5s ease,
            width 1s cubic-bezier(.26, .84, .21, .97),
            height 1s cubic-bezier(.26, .84, .21, .97);

        opacity: 0;
        border-radius: 9999px;
        z-index: -1;
    }


    .link.active .bg {
        width: calc(16px * 7);
        height: calc(16px * 7);
        opacity: 1;
    }

    .link svg {
        filter: saturate(1) brightness(1);
        transition: filter 2s cubic-bezier(.26, .84, .21, .97);
    }

    .link.active svg {
        filter: saturate(0) brightness(2);
    }
`
