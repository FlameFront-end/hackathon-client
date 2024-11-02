import styled from 'styled-components'

export const ProfileStyledWrapper = styled.div`
    height: calc(100vh - 100px);
    max-width: 900px;
    margin: 0 auto;
    padding: 15px;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    gap: 20px;
    
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
    }
    
    * { color: #fff;}
    

    .full {
        height: 100%;
    }

    .info-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


    .card {
        width: 100%;
        height: 100%;
        padding: 30px 30px;
        background: #191919;
        border-radius: 20px;
        border: none;
    }


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
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .loader{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
