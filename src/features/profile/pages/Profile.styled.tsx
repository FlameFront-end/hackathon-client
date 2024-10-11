import styled from 'styled-components'

export const ProfileStyledWrapper = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: white;
    
    span, button{
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    
    .profile_container {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
    }
    
    .profile_header{
        display: flex;
        
        .header_name{
            margin: auto 0 auto 10px;
            justify-content: center;
            font-size: 30px;
        }
    }
    
    .profile_body{
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 20px;
    }
    
    .qr-btn {
        display: flex;
        justify-content: center;
    }
    
    .profile_footer{
        display: flex;
        align-items: center;
        justify-content: center;
        & button {
            border-radius: 10px;
            width: 167px;
            height: 40px;
            color: white;
            text-decoration: none;
            text-align: center;
            font-size: 20px;
            border: none;
            background: rgb(235,84,206);
            background: linear-gradient(90deg, rgba(235,84,206,1) 0%, rgba(123,70,189,1) 100%);
        }
    }
    
    .loader{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
