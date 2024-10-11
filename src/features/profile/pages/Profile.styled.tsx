import styled from 'styled-components'

export const ProfileStyledWrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: white;
    
    span{
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    
    .profile_container {
        max-width: 1200px;
        min-width: 420px;
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
    
    .profile_btn{
        font-size: 20px;
    }
`
