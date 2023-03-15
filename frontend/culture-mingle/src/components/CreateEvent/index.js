import styles from './index.module.css'
import 'antd/dist/reset.css';
import { Space, Button, DatePicker, Form, Input, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CreateEvent = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
        message.success('You have successfully create an event!');
        form.resetFields();
    };
    const onFinishFailed = () => {
        message.error('Failed... Check your event details again!');
    };

    return (
        <Space className={styles.page} direction="vertical" style={{display: 'flex', justifyContent:'center'}}>
            
            <Form labelCol={{span: 5,}} wrapperCol={{span: 13,}} layout="horizontal" size="large" 
                form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}
            >
                
                <Form.Item label={<label style={{ fontSize: "18px" }}>Title</label>} name="title" rules={[
                    {required: true, message: "Title of your event is required"},
                ]}>
                    <Input />
                </Form.Item>

                <Form.Item label={<label style={{ fontSize: "18px" }}>Location</label>} name="location" rules={[
                    {required: true, message: "Location of your event is required"},
                ]}>
                    <Input />
                </Form.Item>
                
                <Form.Item label={<label style={{ fontSize: "18px" }}>Time</label>} name="time" rules={[
                    {required: true, message: "Time of your event is required"},
                ]}>
                    <DatePicker showTime />
                </Form.Item>
               
                <Form.Item label={<label style={{ fontSize: "18px" }}>Description</label>} name="description" rules={[
                    {required: true, message: "Description of your event is required"},
                ]}>
                    <TextArea rows={4} />
                </Form.Item>
        
                <Form.Item label={<label style={{ fontSize: "18px" }}>Photo</label>} valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{marginTop: 8,}}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
        
                <Form.Item className={styles.button}>
                    <Button htmlType="submit">
                        Create an Event !
                    </Button>
                </Form.Item>
            
            </Form>
  
        </Space>
    );
}

export default CreateEvent;