import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";

const { Title, Text } = Typography;

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        
    };

    return (
        <div className="background-container">
            <div className="login-container">

                <Form
                    name="login-form"
                    onFinish={onFinish}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '20px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        marginLeft: '60%',
                        marginRight: 'auto',
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            style={{
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                                background: 'white',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            style={{
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                                background: 'white',
                            }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <div className="line-text">
                <Title level={1} style={{ marginBottom: 0, color: 'blue' }}>
                    Welcome!
                </Title>
                <Text style={{ fontSize: '20px' }}>I am Aditya Soni (ReactJS Develepor).</Text>
                <Text style={{ fontSize: '20px' }}>
                    This is a frontend page of Login Page made using ReactJS and Antd.
                </Text>
            </div>
        </div>
    );
};

export default Login;
