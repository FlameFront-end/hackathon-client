import { SvgArrowsUpDownBlue, SvgBolt } from '../Svg'
import { type FC } from 'react'
import { CounterStyledWrapper } from './Counter.styled.tsx'

interface Props {
    ping: number
    jitter: number
}

const Counter: FC<Props> = ({ ping, jitter }) => {
    return (
        <CounterStyledWrapper>
            <div className='column'>
                <SvgArrowsUpDownBlue/>
              Разница <span>~{jitter} мс</span>
            </div>
            <div className='column'>
                <SvgBolt/>
              Задержка <span>{ping} мс</span>
            </div>
        </CounterStyledWrapper>
    )
}

export default Counter
