import styles from "./registration.module.css"
import axios from 'axios';
import { Layout, Space } from 'antd';
import { EditFilled, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

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

const Registration = () => {
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
        username: name,
        email: email,
        password: password,
        birthday: day,
        gender: gender
    }
    const onFinish = async(e) => {
        console.log(wholeform);
        //console.log(e);
        try {
            axios.post(
                'http://localhost:8080/register/',
                wholeform,
            ).then(
                res=>{
                    console.log(res);
                    console.log(res.data);
                }
            )
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = async(e)=>{
        console.log("submit");
    }
    const onReset = () => {
        form.resetFields();
    };
    const onGenderChange = (values) => {
        setGender(values);
        console.log(values);
    }

    return (
        <Space direction="vertical" className={styles.spaceStyle} size={[0, 48]}>
            <Layout>
                {/* <Header className={styles.headerStyle}>
                    <Content></Content>
                </Header> */}
                <Layout>
                    {/* <Sider className={styles.siderStyle} width={'10%'}></Sider> */}
                    <Content className={styles.contentStyle} >
                        <div className={styles.logo}>
                            {/* <HeartOutlined style={{ fontSize: '30px', color: 'pink' }} />
                            CultureMingle
                            <HeartOutlined style={{ fontSize: '30px', color: 'pink' }} /> */}
                        </div>
                        <div className={styles.content}>
                            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600, fontFamily: 'fantasy', fontSize: '25px' }} size="large">
                                {/* name */}
                                <Form.Item name="name" label="Name"
                                    rules={[
                                        { required: true, message: "Please input your name." },
                                    ]}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                    <Input />
                                </Form.Item>

                                {/* email */}
                                <Form.Item name="email" label={<label>E-mail</label>}
                                    rules={[
                                        { required: true, message: "Please input your email address.", },
                                        { type: 'email', message: "Please input a valid email address." }
                                    ]}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                    <Input />
                                </Form.Item>

                                {/* Password */}
                                <Form.Item name='password' label="Password"
                                    rules={[
                                        { required: true, message: 'Please input your password.', }
                                    ]}
                                    onChange={(e) => setPassWord(e.target.value)}
                                >
                                    <Input.Password />
                                </Form.Item>
                                
                                {/* Password Confirmation*/}
                                <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback
                                    rules={[
                                        {
                                            required: true, message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                {/* Birthday */}
                                <Form.Item name='birthday' label="Date of birth"
                                    rules={[
                                        { required: true, message: "Please choose your date of birth." }
                                    ]}
                                >
                                    <DatePicker onChange={(e) => setDay(e.format("YYYY-MM-DD"))}></DatePicker>
                                </Form.Item>

                                {/* Gender */}
                                <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Please choose your gender."},]}>
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

                                {/* Button */}
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" className={styles.buttonStyle} onSubmit = {handleSubmit}>
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset} style={{ background: "white" }} className={styles.buttonStyle}>
                                        Reset
                                    </Button>
                                    <div className={styles.hint}>
                                        Already have an account?
                                        <br/>
                                        <NavLink to="/login">Log in here!</NavLink>
                                    </div>
                                    
                                </Form.Item>

                            </Form>
                        </div>
                    </Content>
                    {/* <Sider className={styles.siderStyle} width={'10%'}></Sider> */}
                </Layout>
                {/* <Footer className={styles.footerStyle}></Footer> */}
            </Layout>
        </Space>
    )
};
export default Registration;