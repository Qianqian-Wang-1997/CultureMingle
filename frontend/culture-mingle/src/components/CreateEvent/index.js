import styles from './index.module.css'
import 'antd/dist/reset.css';
import { Space, Button, DatePicker, Form, Input, Upload, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState } from 'react';

const { TextArea } = Input;

const CreateEvent = () => {
    const [form] = Form.useForm();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [group, setGroup] = useState("");
    const [des, setDes] = useState("");
    const [photo, setPhoto] = useState([]);
    const eventform = {
        title: title,
        venue: location,
        time: time,
        group: group,
        description: des,
        imageUrls: photo
    }

    const onFinish = () => {
        try {
            axios.post(
                'http://localhost:8080/events',
                eventform,
            ).then(
                res=>{
                    console.log(res);
                    console.log(res.data);
                }
            )
            message.success('You have successfully create an event!');
            form.resetFields();
        } catch (err) {
            console.log(err);
        }
    };
    const onFinishFailed = () => {
        message.error('Failed... Check your event details again!');
    };

    // Group list
    const groups = [
        { value: ""},
        { value: "Uwaterloo Chinese Students Group"},
        { value: "Uwaterloo Indian Students Group"},
        { value: "Uwaterloo Canadian Students Group"},
        { value: "Uwaterloo Japanese Students Group"},
        { value: "Uwaterloo American Students Group"}
    ];

    const grouplist = groups.map(
        (group) => (
            <Select.Option value={group.value}>{group.value}</Select.Option>
        )
    );

    const initialValues = {
        group: '',
    };

    return (
        <Space className={styles.page} direction="vertical" style={{display: 'flex', justifyContent:'center'}}>
            
            <Form labelCol={{span: 5,}} wrapperCol={{span: 13,}} layout="horizontal" size="large" 
                form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={initialValues}
            >
                
                <Form.Item label={<label style={{ fontSize: "18px" }}>Title</label>} name="title" 
                    rules={[{required: true, message: "Title of your event is required"},]}
                    onChange={(e) => setTitle(e.target.value)}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={<label style={{ fontSize: "18px" }}>Location</label>} name="location" 
                    rules={[{required: true, message: "Location of your event is required"},]}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item label={<label style={{ fontSize: "18px" }}>Time</label>} name="time" 
                    rules={[{required: true, message: "Time of your event is required"},]}
                >
                    <DatePicker showTime onChange={(e) => setTime(e.format("YYYY-MM-DD"))}/>
                </Form.Item>

                <Form.Item label={<label style={{ fontSize: "18px" }}>Group</label>} name="group"
                    onChange={(e) => setGroup(e.target.value)}
                >
                    <Select>
                        {grouplist}
                    </Select>
                </Form.Item>
               
                <Form.Item label={<label style={{ fontSize: "18px" }}>Description</label>} name="description" 
                    rules={[{required: true, message: "Description of your event is required"},]}
                    onChange={(e) => setDes(e.target.value)}
                >
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