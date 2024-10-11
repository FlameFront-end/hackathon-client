import { type ChangeEvent, type FC, type FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

import type { LoginPayload } from '../../types/login.types'
import { regExpPassword } from '@/utils'
import { useAppAction } from '@/hooks'
import { TextButton, Card, PinkButton } from '@/features/kit'
import { useLoginMutation } from '../../api/auth.api'
import { authPaths } from '../../routes/auth.paths.ts'

import { StyledAuthWrapper } from '../styled/Auth.styled.tsx'

const Login: FC = () => {
    const navigate = useNavigate()
    const { setUser } = useAppAction()
    const [login, { isLoading }] = useLoginMutation()
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({})

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
            axios.get(`https://hackathon-server-nest-production.up.railway.app/auth/validate-token/${token}`)
                .then(response => {
                    toast.success('Успешный вход в аккаунт')
                    setUser(response.data)
                })
                .catch(() => {
                    toast.error('Что-то пошло не так')
                })
        }
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const validateForm = (): boolean => {
        const newErrors: { email?: string, password?: string } = {}

        if (!formValues.email) {
            newErrors.email = 'Пожалуйста, введите ваш email!'
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Введённый email недействителен!'
        }

        if (!formValues.password) {
            newErrors.password = 'Пожалуйста, введите ваш пароль!'
        } else if (!regExpPassword.test(formValues.password)) {
            newErrors.password = 'Пароль должен содержать не менее 9 символов и включать заглавные буквы, цифры и специальные символы, такие как "#@&".'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        if (validateForm()) {
            const response = await login(formValues as LoginPayload)
            if (!('error' in response)) {
                setUser(response?.data)
                setFormValues({ email: '', password: '' })
                toast.success('Успешный вход в аккаунт')
            } else {
                toast.error('Что-то пошло не так')
            }
        }
    }

    return (
        <StyledAuthWrapper>
            <Card className="card">
                <h1 className='heading'>Войти</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="form-item">
                        <label htmlFor="email">Логин</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder='Введите e-mail'
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            placeholder='Введите пароль'
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                    <div className="form-item button">
                        <PinkButton type="submit" disabled={isLoading}>
                            {isLoading ? 'Загрузка...' : 'Войти'}
                        </PinkButton>
                    </div>
                    <label className='link'>
                        Нет аккаунта?{' '}
                        <TextButton onClick={() => { navigate(authPaths.register) }}>Создать его</TextButton>
                    </label>
                </form>
            </Card>
        </StyledAuthWrapper>
    )
}

export default Login
