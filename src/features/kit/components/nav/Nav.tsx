import { component$ } from '@builder.io/qwik'

import { SvgGeodata, SvgMap, SvgSpeed } from '~/components/Svg'

import s from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'

export const Nav = component$(() => {
    const loc = useLocation()
    const locName = loc.pathname.split('/')[1]

    return (
        <nav className={s.nav}>
            <Link to='/speed' class={[s.link, locName == 'speed' && s.active]} data-type='speed'>
                <div className={s.bg}></div>
                <div className={s.content}>
                    <SvgSpeed />
					Скорость
                </div>
            </Link>

            <Link href='/map' class={[s.link, locName === 'map' && s.active]} data-type='map'>
                <div className={s.bg}></div>
                <div className={s.content}>
                    <SvgMap />
					Карта
                </div>
            </Link>

            <Link href='/geodata' class={[s.link, locName == 'geoData' && s.active]} data-type='geodata'>
                <div className={s.bg}></div>
                <div className={s.content}>
                    <SvgGeodata />
					Геоданные
                </div>
            </Link>
        </nav>
    )
})
