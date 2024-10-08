import styled from 'styled-components'

export const StyledAuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 100vh;

    label {
        color: ${({ theme }) => theme.text} !important;
    }
    
    .card {
        padding: 40px;
    }
    
    .upload-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .upload {
        .anticon-plus {
            svg {
                fill: ${({ theme }) => theme.text} !important;
            }
        }
    }
`
