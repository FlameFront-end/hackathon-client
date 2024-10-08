import { type FC, useState } from 'react'
import { Button, Form, Upload, Input, DatePicker, type UploadProps } from 'antd'
import { useRegisterMutation } from '../../api/auth.api'
import { regExpPassword } from '../../../../utils/regExp.ts'
import { useAppAction } from '../../../../hooks/useAppAction.ts'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { type RegisterDataForm } from '../../types/register.types.ts'
import { useNavigate } from 'react-router-dom'
import { pathsConfig } from '../../../../router/entities/paths.config.ts'
import Flex from '../../../kit/components/Flex'
import TextButton from '../../../kit/components/Buttons/TextButton'
import { authPaths } from '../../routes/auth.paths.ts'
import Card from '../../../kit/components/Card'
import { StyledAuthWrapper } from '../styled/Auth.styled.tsx'

const Register: FC = () => {
    const navigate = useNavigate()
    const { setUser } = useAppAction()
    const [register, { isLoading }] = useRegisterMutation()
    const [form] = Form.useForm()

    const [imageUrl, setImageUrl] = useState<string>()
    const [loading, setLoading] = useState(false)

    const handleFinish = async (payload: RegisterDataForm): Promise<void> => {
        const response = await register({
            ...payload,
            birthdate: payload.birthdate.format('DD.MM.YYYY'),
            ava: imageUrl
        })

        if (!('error' in response)) {
            const result = response?.data
            setUser(result)
            navigate(pathsConfig.root)
            form.resetFields()
        }
    }

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return
        }
        if (info.file.status === 'done') {
            setImageUrl(info.file.response.url)
        }
    }

    const uploadButton = (
        <button type="button" className='upload-btn'>
            {loading ? <LoadingOutlined color='#e1e3e6'/> : <PlusOutlined color='#e1e3e6'/>}
            <label style={{ marginTop: 8 }}>Загрузить</label>
        </button>
    )

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

                    <Flex>
                        <Form.Item
                            label='Фамилия'
                            name='surname'
                            hasFeedback
                            validateDebounce={600}
                            style={{ width: '100%' }}
                            rules={[
                                { required: true, message: 'Пожалуйста, введите свою фамилию!' }
                            ]}
                        >
                            <Input style={{ width: '100%' }}/>
                        </Form.Item>
                        <Form.Item
                            label='Имя'
                            name='name'
                            hasFeedback
                            validateDebounce={600}
                            style={{ width: '100%' }}
                            rules={[
                                { required: true, message: 'Пожалуйста, введите своё имя!' }
                            ]}
                        >
                            <Input style={{ width: '100%' }}/>
                        </Form.Item>
                    </Flex>

                    <Flex>
                        <Form.Item
                            label='Отчество'
                            name='patronymic'
                            style={{ width: '100%' }}
                        >
                            <Input style={{ width: '100%' }}/>
                        </Form.Item>

                        <Form.Item
                            label='Дата рождения'
                            name='birthdate'
                            hasFeedback
                            style={{ width: '100%' }}
                            rules={[
                                { required: true, message: 'Пожалуйста, выберите дату рождения!' }
                            ]}
                        >
                            <DatePicker placeholder="Выберите дату" style={{ width: '100%' }} lang='ru' format='DD.MM.YYYY'/>
                        </Form.Item>
                    </Flex>

                    <Form.Item
                        label='Фотография'
                        name='ava'
                        hasFeedback
                        className='upload'
                    >
                        <Upload
                            name="image"
                            showUploadList={false}
                            listType="picture-card"
                            className="avatar-uploader"
                            onChange={handleChange}
                            action='http://localhost:3000/upload/image'
                            accept="image/jpeg, image/png, image/gif"
                        >
                            {(imageUrl != null) ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }}/> : uploadButton}
                        </Upload>
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
