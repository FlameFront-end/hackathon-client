import { component$ } from '@builder.io/qwik'

import s from './Header.module.css'

interface HeaderProps {
    subheading: string
}

const Header = component$<HeaderProps>(props => {
    return (
        <header className={s.header}>
            <h1 className='heading'>Алё, Калуга!</h1>
            <div className={s.subheading}>{props.subheading}</div>
        </header>
    )
})

export default Header
