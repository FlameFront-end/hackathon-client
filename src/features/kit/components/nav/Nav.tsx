import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'

import { SvgGeodata, SvgMap, SvgSpeed } from '~/components/Svg'

import s from './Nav.module.css'

export const Nav = component$(() => {
    const loc = useLocation()
    const locName = loc.url.pathname.split('/')[1]

    return (
        <nav className={s.nav}>
            <Link href='/speed' class={[s.link, locName == 'speed' && s.active]} data-type='speed'>
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

            <Link href='/geodata' class={[s.link, locName == 'geodata' && s.active]} data-type='geodata'>
                <div className={s.bg}></div>
                <div className={s.content}>
                    <SvgGeodata />
					Геоданные
                </div>
            </Link>
        </nav>
    )
})
