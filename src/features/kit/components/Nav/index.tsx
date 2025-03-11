import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'

import { NavStyledWrapper } from './Nav.styled.tsx'

const Nav: FC = () => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]

    return (
        <NavStyledWrapper>
            <Link to={pathsConfig.hom} className={`link ${locName === '' ? 'active' : ''}`}
                data-type='hom'>
                <div className='content'>
                    hom
                </div>
            </Link>

            <Link to={pathsConfig.cluster} className={`link ${locName === 'cluster' ? 'active' : ''}`}
                data-type='cluster'>
                <div className='content'>
                    cluster
                </div>
            </Link>

            <Link to={pathsConfig.contacts} className={`link ${locName === 'contacts' ? 'active' : ''}`}
                data-type='contacts'>
                <div className='content'>
                    contacts
                </div>
            </Link>

            <Link to={pathsConfig.services} className={`link ${locName === 'services' ? 'active' : ''}`}
                data-type='services'>
                <div className='content'>
                    services
                </div>
            </Link>
        </NavStyledWrapper>
    )
}

export default Nav
