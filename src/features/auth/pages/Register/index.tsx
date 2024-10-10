import { type FC } from 'react'
import { Button, Form, Input } from 'antd'
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

const Register: FC = () => {
    const navigate = useNavigate()
    const { setUser } = useAppAction()
    const [register, { isLoading }] = useRegisterMutation()
    const [form] = Form.useForm()

    const handleFinish = async (payload: RegisterDataForm): Promise<void> => {
        const response = await register(payload)

        console.log('payload', payload)

        if (!('error' in response)) {
            const result = response?.data
            setUser(result)
            navigate(pathsConfig.speed)
            form.resetFields()
        }
    }

    return (
        <StyledAuthWrapper>
            <Card className='card'>
                <Form
                    form={form}
                    name='register'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 400, margin: '0 auto' }}
                    onFinish={(data: RegisterDataForm) => {
                        void handleFinish(data)
                    }}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Электронная почта'
                        name='email'
                        hasFeedback
                        validateDebounce={600}
                        rules={[
                            { required: true, message: 'Пожалуйста, введите свой адрес электронной почты!' },
                            { type: 'email', message: 'Введенный адрес электронной почты неверен!' }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label='Никнейм'
                        name='nick'
                        hasFeedback
                        validateDebounce={600}
                        style={{ width: '100%' }}
                        rules={[
                            { required: true, message: 'Пожалуйста, введите свой никнейм!' }
                        ]}
                    >
                        <Input style={{ width: '100%' }}/>
                    </Form.Item>

                    <Form.Item
                        label='Пароль'
                        name='password'
                        hasFeedback
                        validateDebounce={600}
                        rules={[
                            { required: true },
                            {
                                validator: async (_, value) => {
                                    if (value === undefined || value === '') {
                                        await Promise.reject(new Error('Пожалуйста, введите свой пароль!'))
                                    } else if (!regExpPassword.test(value)) {
                                        await Promise.reject(new Error('Пароль должен содержать не менее 9 символов и состоять из заглавных букв, цифр и специальных символов, таких как "#@&".'))
                                    }
                                }
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' loading={isLoading} block>
                        Зарегестрироваться
                        </Button>
                    </Form.Item>

                    <label>
                    Уже есть аккаунт? <TextButton onClick={() => { navigate(authPaths.login) }}>Вход</TextButton>
                    </label>
                </Form>
            </Card>
        </StyledAuthWrapper>
    )
}

export default Register
