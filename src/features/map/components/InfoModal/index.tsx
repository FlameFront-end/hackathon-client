import { type FC, useState } from 'react'
import {
    InfoModalStyledWrapper,
    SpeedInfo,
    ColorCircle,
    SpeedDescription,
    ContentWrapper
} from './InfoModal.styled.tsx'
import { PrimaryButton } from '@/features/kit'

const InfoModal: FC = () => {
    const [visibleContent, setVisibleContent] = useState(false)
    return (
        <InfoModalStyledWrapper>
            {visibleContent && <ContentWrapper>
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
            </ContentWrapper>}

            <PrimaryButton onClick={() => { setVisibleContent(prevState => !prevState) }}>
                {!visibleContent ? 'Информация' : 'Закрыть'}
            </PrimaryButton>
        </InfoModalStyledWrapper>
    )
}

export default InfoModal
