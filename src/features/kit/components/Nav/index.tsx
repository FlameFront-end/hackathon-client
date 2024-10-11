import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'

import { NavStyledWrapper } from './Nav.styled.tsx'
import Speed from '../../../../../public/speed.svg'
import Map from '../../../../../public/map.svg'
import History from '../../../../../public/history.svg'

const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]

    return (
        <NavStyledWrapper>
            <Link to={pathsConfig.speed} className={`link ${locName === '' ? 'active' : ''}`}
                data-type='speed'>
                <div className='bg'></div>
                <div className='content'>
                    <img src={Speed} alt=""/> Скорость
                </div>
            </Link>

            <Link to={pathsConfig.map} className={`link ${locName === 'map' ? 'active' : ''}`}
                data-type='map'>
                <div className='bg'></div>
                <div className='content'>
                    <img src={Map} alt=""/>  Карта
                </div>
            </Link>

            <Link to={pathsConfig.history} className={`link ${locName === 'history' ? 'active' : ''}`}
                data-type='history'>
                <div className='bg'></div>
                <div className='content'>
                    <img src={History} alt=""/> История
                </div>
            </Link>
        </NavStyledWrapper>
    )
}

export default Nav
