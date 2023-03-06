import './index.css'
import 'antd/dist/reset.css';
import { Layout, Space, Card, Button, Avatar, Col, Row, Modal } from 'antd';
import { ShareAltOutlined, UsergroupAddOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined, SlackOutlined } from '@ant-design/icons';
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

const EventDetail = () => {
    const { Meta } = Card;

    // Join Button
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showJoinModal = () => {
        setOpen(true);
    };
    const handleJoinOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleJoinCancel = () => {
        setOpen(false);
    };

    // Share Button
    const [isShareModalOpen, setIsModalOpen] = useState(false);
    const showShareModal = () => {
        setIsModalOpen(true);
    };
    const handleShareOk = () => {
        setIsModalOpen(false);
    };
    const handleShareCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Space direction="vertical" style={{width: '100%',}} size={[0, 48]}>
       
            <Layout>
                <Header style={headerStyle}>
                    <div className='time'>
                        Friday, January 23, 2022 at 5:00 PM
                    </div>
                    <div className='title'>
                        Join the celebration of Spring Festival !
                    </div>
                </Header>

                <Layout>
                    <Content style={contentStyle} width='70%'>
                        <div className='subtitles'>Details</div>
                        <div className='description'>
                            <p>The day before the Chinese New Year usually accompanied with a dinner feast, consisting of special meats are served at the tables, as a main course for the dinner and as an offering for the New Year. This meal is comparable to Thanksgiving dinner in the U.S. and remotely similar to Christmas dinner in other countries with a high percentage of Christians.</p>
                            <p>In northern China, it is customary to make jiaozi, or dumplings, after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days. Niángāo [Pinyin] literally means "new year cake" with a homophonous meaning of "increasingly prosperous year in year out".</p>                  
                            <p>After dinner, some families may visit local temples hours before midnight to pray for success by lighting the first incense of the year; however in modern practice, many households held parties to celebrate. Traditionally, firecrackers were lit to ward evil spirits when the household doors sealed, and are not to be reopened until dawn in a ritual called "opening the door of fortune". A tradition of staying up late on Chinese New Year's Eve is known as shousui, which is still practised as it is thought to add on to one's parents' longevity.</p>
                        </div>
                        <div className='subtitles'>Attendees</div>
                        <div className='anttendees'>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={'30%'}>
                                    <Card hoverable style={{ width: 240 }}>
                                        <Meta avatar={<Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="User One" description="Organizer" />
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={'30%'}>
                                    <Card hoverable style={{ width: 240 }}>
                                        <Meta avatar={<Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="User Two" description="Member" />
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={'30%'}>
                                    <Card hoverable style={{ width: 240 }}>
                                        <Meta avatar={<Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="User Three" description="Member" />
                                    </Card>
                                </Col>
                            </Row>             
                        </div>
                    </Content>

                    <Sider style={siderStyle} width={'30%'}>
                        <Card title="Location" extra={<a href="https://www.google.com/maps">Open in Google Map</a>} className='card'>
                            Student Life Centre, 200 University Ave W, Waterloo, ON N2L 3G1
                        </Card>
                    </Sider>

                </Layout>
                
                <Footer style={footerStyle}>
                    <div className='buttons'>
                        <Button className='sharebutton' type="primary" icon={<ShareAltOutlined />} size={'large'} onClick={showShareModal}>
                            Share
                        </Button>
                        <Modal title="Share with your friends!" style={{textAlign: 'center'}} open={isShareModalOpen} onOk={handleShareOk} onCancel={handleShareCancel}>
                            <div className='shares'>
                                <h3><TwitterOutlined />{" "}<a href="https://twitter.com/">Twitter</a></h3>
                                <h3><FacebookOutlined />{" "}<a href="https://facebook.com/">Facebook</a></h3>
                                <h3><InstagramOutlined />{" "}<a href="https://instagram.com/">Instagram</a></h3>
                                <h3><SlackOutlined />{" "}<a href="https://slack.com/">Slack</a></h3>
                            </div>
                        </Modal>
                        <Button className='joinbutton' type="primary" icon={<UsergroupAddOutlined />} size={'large'} onClick={showJoinModal}>
                            Join
                        </Button>
                        <Modal open={open} title="Hooray!" onOk={handleJoinOk} onCancel={handleJoinCancel} footer={[
                            <Button key="Cancel" onClick={handleJoinCancel}>Cancel</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={handleJoinOk}>Yes</Button>]}
                        >
                            <p>Are you sure to join ... ?</p>
                        </Modal>
                    </div>
                </Footer>

            </Layout>
        
        </Space>
    );
}

export default EventDetail;
