import { type FC, useEffect, useState } from 'react'
import { PinkButton } from '@/features/kit'

interface Props {
    token: string
}

const QrCode: FC<Props> = ({ token }) => {
    const [qrCode, setQrCode] = useState('')

    const size = 400
    const bgColor = 'ffffff'
    const data = `https://hackathon-client-8fxp.vercel.app/auth/login?token=${token}`

    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&bgcolor=${bgColor}`)
    }, [data])

    return (
        <div className="qr-code">
            <a href={qrCode} download="QRCode">
                <PinkButton>
                  Поделиться <br/>
                  профилем
                </PinkButton>
            </a>
        </div>
    )
}

export default QrCode
