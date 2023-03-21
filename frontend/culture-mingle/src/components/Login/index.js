import styles from "./login.module.css"
import axios from 'axios';
import { Layout, Space } from 'antd';
import { EditFilled, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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

const Login = (props) => {
    const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [day, setDay] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const wholeform = {
        email: email,
        password, password,
    }
    
    const onFinish = async(e) => {
        console.log(wholeform);
        console.log(e);
        console.log(props.name);
        if(email=="1@1.com" && password=="123"){
            //saveToken(email);
            props.saveToken(email);
            navigate('/',{replace:true});
        }else{
            alert('Invalid account or password!');
        }
    };
    const onReset = () => {
        form.resetFields();
    };
    const onGenderChange = (values) => {
        setGender(values);
        console.log(values);
    }

    return (
        <Space direction="vertical" size={[0, 48]} className={styles.spaceStyle}>
            <Layout>
                <Layout>
                    <Content className={styles.contentStyle}>
                        <div className={styles.logo}>
                            {/* <HeartOutlined style={{ fontSize: '30px', color: 'pink' }} />
                            CultureMingle
                            <HeartOutlined style={{ fontSize: '30px', color: 'pink' }} /> */}
                            <br/>
                        </div>
                        <div className={styles.content}>
                            <Form {...layout} form={form} name="control-hooks"
                                onFinish={onFinish}
                                className={styles.formStyle} size="large">
                                {/* email */}
                                <Form.Item name="email" label="E-mail"
                                    rules={[
                                        { required: true, message: "Please input your email address.", },
                                        { type: 'email', message: "Please input a valid email address." }
                                    ]}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                    <Input size="large" />
                                </Form.Item>

                                {/* Password */}
                                <Form.Item name='password' label="Password"
                                    rules={[
                                        { required: true, message: 'Please input your password.', }
                                    ]}
                                    onChange={(e) => setPassWord(e.target.value)}
                                >
                                    <Input.Password size="large" />
                                </Form.Item>

                                {/* Button */}
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" className={styles.buttonStyle}>
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset} style={{ background: "white" }} className={styles.buttonStyle}>
                                        Reset
                                    </Button>
                                    <div className={styles.hint}>
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        Not a member yet?
                                        <br />
                                        <NavLink to="/signup">Sign up here!</NavLink>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                </Layout>
                <Footer className={styles.footStyle}></Footer>
            </Layout>
        </Space>
    )
};
export default Login;