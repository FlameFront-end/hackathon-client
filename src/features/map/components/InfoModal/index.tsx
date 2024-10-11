import { type FC } from 'react'
import { InfoModalStyledWrapper, SpeedInfo, ColorCircle, SpeedDescription } from './InfoModal.styled.tsx'

const InfoModal: FC = () => {
    return (
        <InfoModalStyledWrapper>
            <SpeedInfo>
                <ColorCircle color="black" />
                <SpeedDescription>Очень низкий — скорость меньше 5 Мбит/с</SpeedDescription>
            </SpeedInfo>
            <SpeedInfo>
                <ColorCircle color="red" />
                <SpeedDescription>Низкий— скорость от 5 до 20 Мбит/с</SpeedDescription>
            </SpeedInfo>
            <SpeedInfo>
                <ColorCircle color="yellow" />
                <SpeedDescription>Средний — скорость от 20 до 50 Мбит/с</SpeedDescription>
            </SpeedInfo>
            <SpeedInfo>
                <ColorCircle color="green" />
                <SpeedDescription>Отличный— скорость больше 50 Мбит/с</SpeedDescription>
            </SpeedInfo>
        </InfoModalStyledWrapper>
    )
}

export default InfoModal
