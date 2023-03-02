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
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'black',
};
const contentStyle = {
    minHeight: 500,
    lineHeight: '120px',
    backgroundColor: '#FFFFFF',
    testAlign: 'center'
};
const siderStyle = {
    textalign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'pink',
};
const footerStyle = {
    textAlign: 'center',
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
    textAlign: 'center'
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
    textAlign: 'center',
};

const Login = () => {
    const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [day, setDay] = useState("");
    const [gender, setGender] = useState("");

    // const [birthday,setBirthday] = useState(""); 
    // const handleDate = (date, dateString) => {
    //     setBirthday(dateString);
    //     console.log(date, dateString);
    //     console.log("birthday"+birthday);
    //   };
    const wholeform = {
        name: name,
        email: email,
        password, password,
        day: day,
        gender: gender
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
                <Header class="headerstyle">
                    <Content></Content>
                </Header>
                <Layout>
                    <Sider style={siderStyle} width={'10%'}></Sider>
                    <Content style={contentStyle} >
                        <div class="logo">
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                            CultureMingle
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                        </div>
                        <div class="content">
                            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600, fontFamily: 'fantasy', fontSize: '25px' }} size="large">
                                <Form.Item name="name" label="Name" rules={[{ required: true, },]} onChange={(e) => setName(e.target.value)}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="email" label={<label>E-mail</label>}
                                    rules={[
                                        { required: true, message: "Please input your email address.", },
                                        { type: 'email', message: "Please input a valid email address." }
                                    ]}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item name='password' label="Password"
                                    rules={[
                                        { required: true }
                                    ]}
                                    onChange={(e) => setPassWord(e.target.value)}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item name='birthday' label="Date of birth"
                                    rules={[
                                        { required: true }
                                    ]}
                                >
                                    <DatePicker onChange={(e) => setDay(e.format("YYYY-MM-DD"))}></DatePicker>
                                </Form.Item>
                                <Form.Item name="gender" label="Gender" rules={[{ required: true, },]}>
                                    <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                                >
                                    {({ getFieldValue }) =>
                                        getFieldValue('gender') === 'other' ? (
                                            <Form.Item
                                                name="customizeGender"
                                                label="Customize Gender"
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        ) : null
                                    }
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" style={{background:"pink"}}>
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset} style={{background:"white"}}>
                                        Reset
                                    </Button>
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