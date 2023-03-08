import "./login.css"
import axios from 'axios';
import { Layout, Space } from 'antd';
import { EditFilled, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textalign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'black',
};
const contentStyle = {
    minHeight: 600,
    lineHeight: '120px',
    backgroundColor: '#FFFFFF',
    testalign: 'center'
};
const siderStyle = {
    textalign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'pink',
};
const footerStyle = {
    textalign: 'center',
    color: '#fff',
    backgroundColor: 'black',
};
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
    textalign: 'center'
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
    textalign: 'center',
};

const Login = () => {
    const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [day, setDay] = useState("");
    const [gender, setGender] = useState("");
    const wholeform = {      
        email: email,
        password, password,
    }
    const onFinish = (values) => {
        console.log(wholeform);
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onGenderChange = (values) => {
        setGender(values);
        console.log(values);
    }

    return (
        <Space direction="vertical" style={{ width: '100%', }} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>
                    <Content></Content>
                </Header>
                <Layout>
                    <Sider style={siderStyle} width={'10%'}></Sider>
                    <Content style={contentStyle} >
                        <div className="logo">
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                            CultureMingle
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                        </div>
                        <div className="content">
                            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className = "formstyle" >

                                {/* email */}
                                <Form.Item name="email" label="E-mail"
                                    rules={[
                                        { required: true, message: "Please input your email address.", },
                                        { type: 'email', message: "Please input a valid email address." }
                                    ]}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                    <Input size="large"/>
                                </Form.Item>

                                {/* Password */}
                                <Form.Item name='password' label="Password"
                                    rules={[
                                        { required: true, message: 'Please input your password.', }
                                    ]}
                                    onChange={(e) => setPassWord(e.target.value)}
                                >
                                    <Input.Password size="large"/>
                                </Form.Item>
                                
                                {/* Button */}
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" style={{ background: "pink" }}>
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset} style={{ background: "white" }}>
                                        Reset
                                    </Button>
                                    <div className="hint">
                                        Not a member yet?
                                        <br/>
                                        <a href="">Sign up here!</a>
                                    </div>
                                    
                                </Form.Item>

                            </Form>
                        </div>
                    </Content>
                    <Sider style={siderStyle} width={'10%'}></Sider>
                </Layout>
                <Footer style={footerStyle}></Footer>
            </Layout>
        </Space>
    )
};
export default Login;