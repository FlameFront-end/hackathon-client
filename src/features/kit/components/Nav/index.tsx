import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NavStyledWrapper } from './Nav.styled.tsx'
import { SvgGeodata, SvgMap, SvgSpeed } from '../Svg'

const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]

    return (
        <NavStyledWrapper>
            <Link to='/speed' className={`link ${locName === 'speed' ? 'active' : ''}`}
                data-type='speed'>
                <div className='bg'></div>
                <div className='content'>
                    <SvgSpeed /> Скорость
                </div>
            </Link>

            <Link to='/map' className={`link ${locName === 'map' ? 'active' : ''}`}
                data-type='map'>
                <div className='bg'></div>
                <div className='content'>
                    <SvgMap />  Карта
                </div>
            </Link>

            <Link to='/geodata' className={`link ${locName === 'geodata' ? 'active' : ''}`}
                data-type='geodata'>
                <div className='bg'></div>
                <div className='content'>
                    <SvgGeodata /> Геоданные
                </div>
            </Link>
        </NavStyledWrapper>
    )
}

export default Nav
