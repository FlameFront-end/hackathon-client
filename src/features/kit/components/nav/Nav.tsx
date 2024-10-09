import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { SvgGeodata, SvgMap, SvgSpeed } from '~/components/Svg'

import './Nav.styled.tsx'

export const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.url.pathname.split('/')[1]

    return (
        <nav className='nav'>
            <Link to='/speed' className={['link', locName === 'speed' && 'active']} data-type='speed'>
                <div className='bg'></div>
                <div className='content'>
                    {/* <SvgSpeed /> */}
                    {/* eslint-disable-next-line no-tabs */}
					Скорость
                </div>
            </Link>

            <Link to='/map' className={['link', locName === 'map' && 'active']} data-type='map'>
                <div className='bg'></div>
                <div className='content'>
                    {/* <SvgMap /> */}
                    {/* eslint-disable-next-line no-tabs */}
					Карта
                </div>
            </Link>

            <Link to='/geodata' className={['link', locName === 'geodata' && 'active']} data-type='geodata'>
                <div className='bg'></div>
                <div className='content'>
                    {/* <SvgGeodata /> */}
                    {/* eslint-disable-next-line no-tabs */}
					Геоданные
                </div>
            </Link>
        </nav>
    )
}

export default Nav
