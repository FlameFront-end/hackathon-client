import { type ChangeEvent, type FC, type FormEvent, useState } from 'react'
import { useRegisterMutation } from '../../api/auth.api'
import { regExpPassword } from '@/utils'
import { useAppAction } from '@/hooks'
import { type RegisterDataForm } from '../../types/register.types.ts'
import { useNavigate } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'
import TextButton from '../../../kit/components/Buttons/TextButton'
import { authPaths } from '../../routes/auth.paths.ts'
import Card from '../../../kit/components/Card'
import { StyledAuthWrapper } from '../styled/Auth.styled.tsx'
import { PinkButton } from '@/features/kit'

const Register: FC = () => {
    const navigate = useNavigate()
    const { setUser } = useAppAction()
    const [register, { isLoading }] = useRegisterMutation()
    const [formValues, setFormValues] = useState({ email: '', nick: '', password: '' })
    const [errors, setErrors] = useState<{ email?: string, nick?: string, password?: string }>({})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const validateForm = (): boolean => {
        const newErrors: { email?: string, nick?: string, password?: string } = {}

        if (!formValues.email) {
            newErrors.email = 'Пожалуйста, введите ваш email!'
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Введённый email недействителен!'
        }

        if (!formValues.nick) {
            newErrors.nick = 'Пожалуйста, введите свой никнейм!'
        }

        if (!formValues.password) {
            newErrors.password = 'Пожалуйста, введите свой пароль!'
        } else if (!regExpPassword.test(formValues.password)) {
            newErrors.password = 'Пароль должен содержать не менее 9 символов и включать заглавные буквы, цифры и специальные символы, такие как "#@&".'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        if (validateForm()) {
            const response = await register(formValues as RegisterDataForm)
            if (!('error' in response)) {
                setUser(response?.data)
                navigate(pathsConfig.speed)
                setFormValues({ email: '', nick: '', password: '' })
            }
        }
    }

    return (
        <StyledAuthWrapper>
            <Card className="card">
                <h1 className="heading">Регистрация</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="form-item">
                        <label htmlFor="email">Логин</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder="Введите e-mail"
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-item">
                        <label htmlFor="nick">Никнейм</label>
                        <input
                            id="nick"
                            name="nick"
                            type="text"
                            value={formValues.nick}
                            onChange={handleInputChange}
                        />
                        {errors.nick && <div className="error-message">{errors.nick}</div>}
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <div className="form-item button">
                        <PinkButton type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Зарегистрироваться'}
                        </PinkButton>
                    </div>
                    <label className="link">
                        Есть аккаунт?{' '}
                        <TextButton onClick={() => {
                            navigate(authPaths.login)
                        }}>Войти</TextButton>
                    </label>
                </form>
            </Card>
        </StyledAuthWrapper>
    )
}

export default Register
