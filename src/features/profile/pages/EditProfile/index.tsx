import { type ChangeEvent, type FC, type FormEvent, useState } from 'react'
import { regExpPassword } from '@/utils'
import { EditProfileStyledWrapper } from './EditProfile.styled.tsx'
import { Card, PinkButton } from '@/features/kit'

const Login: FC = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({})

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
        if (validateForm()) {}
    }

    return (
        <EditProfileStyledWrapper>
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
                        <PinkButton type="submit" >
                            Сохранить
                        </PinkButton>
                    </div>
                </form>
            </Card>
        </EditProfileStyledWrapper>
    )
}

export default Login
