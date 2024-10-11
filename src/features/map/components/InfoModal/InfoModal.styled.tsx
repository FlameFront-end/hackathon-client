import styled from 'styled-components'

export const InfoModalStyledWrapper = styled.div`
    position: absolute;
    top: 170px;
    right: 10px;
    z-index: 999;
    width: 400px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
`

export const SpeedInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

export const ColorCircle = styled.div<{ color: string }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 12px;
`

export const SpeedDescription = styled.p`
    margin: 0;
    font-size: 14px;
    color: #333;
`
