import styled from 'styled-components'

export const EditProfileStyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .heading {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        color: #fff;
        margin-bottom: 30px;
    }

    .card {
        height: 100%;
        width: 100%;
        padding: 30px 30px;
        background: #191919;
        border-radius: 20px;
        border: none;
    }

    .form {
        height: 100%;   
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .top {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .error-message {
        font-size: 16px;
        text-align: center;
        color: red;
    }

    .button {
        margin-top: 10px;
    }

    .form-item {
        height: max-content;
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: #fff;
        }

        input {
            width: 100%;
            border-radius: 10px;
            height: 34px;
            background: #d9d9d9;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);

            outline: none;
            border: none;
        }
    }

    .link {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
    }
`
