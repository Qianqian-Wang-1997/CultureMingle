import { Layout, Space } from 'antd';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 500,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#FFFFFF',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
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
};

const Login = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onGenderChange = (values) => {
        console.log(values);
    }
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 48]}
        >
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle} >
                    <div style={{ textAlign: 'center', margin: 'auto', width: '50%', padding: '50px' }}>

                        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
                            style={{
                                     maxWidth: 600,
                            }}
                        >
                            <Form.Item name="name" label="Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item name="gender" label="Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
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
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
};
export default Login;