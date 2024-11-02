import { type ChangeEvent, type FC, type FormEvent, useEffect, useState } from 'react'
import { regExpPassword } from '@/utils'
import { EditProfileStyledWrapper } from './EditProfile.styled.tsx'
import { Card, PinkButton } from '@/features/kit'
import { useGetProfileQuery, useUpdateProfileMutation } from '../../../auth/api/auth.api.ts'
import { toast } from 'react-toastify'
import { type RegisterPayload } from '../../../auth/types/register.types.ts'
import { pathsConfig } from '@/pathsConfig'
import { useAuth } from '../../../auth/hooks/useAuth.ts'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
    const { data: user } = useGetProfileQuery(null)

    const [formValues, setFormValues] = useState({ nick: user?.nick, email: user?.email, password: '', double_password: '' })
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({})
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        setFormValues({ nick: user?.nick, email: user?.email, password: '', double_password: '' })
    }, [user])

    const [updateProfile, { isLoading }] = useUpdateProfileMutation()

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
            const response = await updateProfile(formValues as RegisterPayload)
            if (!('error' in response)) {
                setFormValues({ nick: '', email: '', password: '', double_password: '' })
                navigate(pathsConfig.speed)
                logout()
                toast.success('Данные успешно изменены')
            } else {
                toast.error('Что-то пошло не так')
            }
        }
    }

    return (
        <EditProfileStyledWrapper className='full'>
            <Card className="card">
                <h1 className='heading'>Редактировать профиль</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="top">
                        <div className="form-item">
                            <label htmlFor="email">Изменить имя пользователя</label>
                            <input
                                id="nick"
                                name="nick"
                                type="nick"
                                value={formValues.nick}
                                onChange={handleInputChange}
                                placeholder='Введите имя'
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Изменить e-mail</label>
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
                        {/* <div className="form-item"> */}
                        {/*     <label htmlFor="password">Изменить пароль</label> */}
                        {/*     <input */}
                        {/*         id="password" */}
                        {/*         name="password" */}
                        {/*         type="password" */}
                        {/*         value={formValues.password} */}
                        {/*         onChange={handleInputChange} */}
                        {/*         placeholder='Введите пароль' */}
                        {/*     /> */}
                        {/*     {errors.password && <div className="error-message">{errors.password}</div>} */}
                        {/* </div> */}
                        {/* <div className="form-item"> */}
                        {/*     <label htmlFor="password">Повторите изменённый пароль</label> */}
                        {/*     <input */}
                        {/*         id="password" */}
                        {/*         name="double_password" */}
                        {/*         type="password" */}
                        {/*         value={formValues.double_password} */}
                        {/*         onChange={handleInputChange} */}
                        {/*         placeholder='Введите пароль' */}
                        {/*     /> */}
                        {/* </div> */}
                    </div>
                    <div className="form-item button">
                        <PinkButton type="submit" disabled={isLoading}>
                          Сохранить
                        </PinkButton>
                    </div>
                </form>
            </Card>
        </EditProfileStyledWrapper>
    )
}

export default Login
