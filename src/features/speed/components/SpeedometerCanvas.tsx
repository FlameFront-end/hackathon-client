import { type FC, useEffect, useRef } from 'react'

interface Props {
    value: number
    check: 'download' | 'upload'
    isTesting: boolean
}

const SpeedometerCanvas: FC<Props> = ({ value, check, isTesting }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const animationRef = useRef<number | null>(null)
    const currentValueRef = useRef<number>(0)

    const speedMarks = [
        { speed: 1, angle: (3 * Math.PI) / 4 },
        { speed: 5, angle: Math.PI },
        { speed: 10, angle: (5 * Math.PI) / 4 },
        { speed: 30, angle: (6 * Math.PI) / 4 },
        { speed: 50, angle: (7 * Math.PI) / 4 },
        { speed: 75, angle: (8 * Math.PI) / 4 },
        { speed: 120, angle: (9 * Math.PI) / 4 }
    ]

    const drawSpeedometer = (ctx: CanvasRenderingContext2D, value: number): void => {
        const width = ctx.canvas.width
        const height = ctx.canvas.height
        const radius = Math.min(width, height) / 2 - 40
        const centerX = width / 2
        const centerY = height / 2

        ctx.clearRect(0, 0, width, height)

        // Рисуем основную дугу (серый фон)
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, (3 * Math.PI) / 4, (9 * Math.PI) / 4, false)
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 10
        ctx.stroke()

        // Найти нижнюю и верхнюю метки для текущего значения скорости
        const lowerMark = speedMarks.reduce((prev, curr) => (curr.speed <= value ? curr : prev))
        const upperMark = speedMarks.find((mark) => mark.speed >= value) ?? speedMarks[speedMarks.length - 1]

        // Рассчитываем угол для текущего значения скорости
        const angleRange = upperMark.angle - lowerMark.angle
        const speedRange = upperMark.speed - lowerMark.speed
        const speedOffset = value - lowerMark.speed
        const valueAngle = lowerMark.angle + (angleRange * speedOffset) / speedRange

        // Дуга заполнения
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, (3 * Math.PI) / 4, valueAngle, false)
        ctx.strokeStyle = '#9b59b6'
        ctx.lineWidth = 10
        ctx.stroke()

        // Рисуем метки скоростей
        ctx.fillStyle = '#000'
        ctx.font = '16px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        speedMarks.forEach(({ speed, angle }) => {
            const x = centerX + (radius + 20) * Math.cos(angle)
            const y = centerY + (radius + 20) * Math.sin(angle)
            ctx.fillStyle = 'white'
            ctx.fillText(`${speed}`, x, y)
        })

        // Текущая скорость в центре
        if (isTesting) {
            ctx.beginPath()
            ctx.fillStyle = 'white'
            ctx.font = '32px Comfortaa'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${!Number.isNaN(Math.round(value)) ? Math.round(value) : 0} Мбит/с`, centerX, centerY - 15)
            ctx.fillText(check === 'download' ? 'Загрузка' : 'Отдача', centerX, centerY + 20)
        }
    }

    const animate = (ctx: CanvasRenderingContext2D, targetValue: number): void => {
        const currentValue = currentValueRef.current
        const delta = targetValue - currentValue
        const step = delta * 0.1

        if (Math.abs(delta) > 0.1) {
            currentValueRef.current += step
            drawSpeedometer(ctx, currentValueRef.current)
            animationRef.current = requestAnimationFrame(() => {
                animate(ctx, targetValue)
            })
        } else {
            drawSpeedometer(ctx, targetValue)
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx && value <= 100) {
                if (animationRef.current) cancelAnimationFrame(animationRef.current)
                animate(ctx, value)
            }
        }
    }, [value])

    return (
        <div>
            <canvas ref={canvasRef} width={400} height={350} />
        </div>
    )
}

export default SpeedometerCanvas
