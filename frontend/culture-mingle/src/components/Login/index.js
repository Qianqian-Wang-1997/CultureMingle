import styles from "./login.module.css"
import axios from 'axios';
import { Layout, Space } from 'antd';
import { EditFilled, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;

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
                <Header className={styles.headerStyle}>
                    <Content></Content>
                </Header>
                <Layout>
                    <Sider className={styles.siderStyle} width={'10%'}></Sider>
                    <Content className={styles.contentStyle} >
                        <div className={styles.logo}>
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                            CultureMingle
                            <HeartFilled style={{ fontSize: '30px', color: 'pink' }} />
                        </div>
                        <div className={styles.content}>
                            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className={styles.formStyle} >

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
                                    <Button type="primary" htmlType="submit" className={styles.buttonStyle}>
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset} style={{ background: "white"}} className={styles.buttonStyle}>
                                        Reset
                                    </Button>
                                    <div className={styles.hint}>
                                        Not a member yet?
                                        <br/>
                                        <a href="">Sign up here!</a>
                                    </div>
                                    
                                </Form.Item>

                            </Form>
                        </div>
                    </Content>
                    <Sider className={styles.siderStyle} width={'10%'}></Sider>
                </Layout>
                <Footer className={styles.footerStyle}></Footer>
            </Layout>
        </Space>
    )
};
export default Login;