import type { FC } from 'react'

const SvgArrowUp: FC = () => {
    return (
        <>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
            >
                <path
                    d='M3 7L8 2M8 2L13 7M8 2V14'
                    stroke='#DB8EFF'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </>
    )
}

export default SvgArrowUp
