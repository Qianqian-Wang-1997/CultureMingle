import styles from './style.module.css'
import 'antd/dist/reset.css';
import { Layout, Space } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  height: 180,
  paddingInline: 5,
  lineHeight: '64px',
  backgroundColor: 'black',
};
const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: 'white',
};
const siderStyle = {
  lineHeight: '120px',
  backgroundColor: 'white',
};
const footerStyle = {
  backgroundColor: 'black',
};

export default function EventDetails() {
    const [size, setSize] = useState('large');

    return (
        <Space direction="vertical" style={{width: '100%',}} size={[0, 48]}>
       
            <Layout>
                <Header style={headerStyle}>
                    <div className={styles.time}>
                        Friday, January 23, 2022 at 5:00 PM
                    </div>
                    <div className={styles.title}>
                        Join the celebration of Spring Festival !
                    </div>
                </Header>
            <Layout>

            <Content style={contentStyle}>
                <div className={styles.subtitles}>
                    Details
                </div>
                <div>
                    
                </div>

                <div className={styles.subtitles}>
                    Attendees
                </div>
            </Content>

            <Sider style={siderStyle} width={350}>
                <Card className={styles.card}>
                    Content
                </Card>
            </Sider>

            </Layout>
                <Footer style={footerStyle}>
                    <Button className={styles.button} type="primary" shape="round" icon={<ShareAltOutlined />} size={size}>
                        Share
                    </Button>
                    <Button type="primary" shape="round" icon={<UsergroupAddOutlined />} size={size}>
                        Join
                    </Button>
                </Footer>
            </Layout>
        
        </Space>
    );
}