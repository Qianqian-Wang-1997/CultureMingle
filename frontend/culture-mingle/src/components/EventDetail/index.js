import styles from './index.module.css'
import 'antd/dist/reset.css';
import { Layout, Space, Card, Button, Avatar, Col, Row, Modal } from 'antd';
import { ShareAltOutlined, UsergroupAddOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined, SlackOutlined, FrownOutlined } from '@ant-design/icons';
import { useEffect, useState, React } from 'react';
import axios from 'axios';

const { Header, Footer, Sider, Content } = Layout;

const EventDetail = () => {
    const { Meta } = Card;

    // Join Button
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [joined, setJoined] = useState(false);
    const showJoinModal = () => {
        setOpen(true);
    };
    const handleJoinOk = () => { // Post Request!
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 1000);
        setJoined(true);
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

    // Cancel Button
    const handleCancel =() => {
        setJoined(false);
    }

    // Get event details data from the BackEnd
    const [details, setDetails] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8080/event/id').then((response) => {
          setDetails(response.data);
        });
    }, []);

    // Attendees list
    const attendees = [
        {avatar: "https://joesch.moe/api/v1/random?key=1", name: "Amber", identity: "Organizer"},
        {avatar: "https://joesch.moe/api/v1/random?key=2", name: "Anqi", identity: "Member"},
        {avatar: "https://joesch.moe/api/v1/random?key=3", name: "Aosen", identity: "Member"},
        {avatar: "https://joesch.moe/api/v1/random?key=4", name: "Ryan", identity: "Member"},
        {avatar: "https://joesch.moe/api/v1/random?key=5", name: "Yutong", identity: "Member"}
    ];
    const attendeesList = attendees.map(
        (attendee) => (
            <Col className="gutter-row" span={'30%'}>
                <Card hoverable style={{ width: 240 }}>
                    <Meta avatar={<Avatar size={50} src={attendee.avatar} />} title={attendee.name} description={attendee.identity} />
                </Card>
            </Col>
        )
    );

    return (
        <Space direction="vertical" style={{width: '100%',}} size={[0, 48]}>
       
            <Layout>
                <Header className={styles.headerStyle}>
                    <div className={styles.time}>
                        Friday, January 23, 2022 at 5:00 PM 
                        {/* {details.time} */}
                    </div>
                    <div className={styles.title}>
                        Join the celebration of Spring Festival !
                        {/* {details.title} */}
                    </div>
                </Header>

                <Layout>
                    <Content className={styles.contentStyle} width='70%'>
                        <div className={styles.subtitles}>Details</div>
                        <div className={styles.description}>
                            <p>The day before the Chinese New Year usually accompanied with a dinner feast, consisting of special meats are served at the tables, as a main course for the dinner and as an offering for the New Year. This meal is comparable to Thanksgiving dinner in the U.S. and remotely similar to Christmas dinner in other countries with a high percentage of Christians.</p>
                            <p>In northern China, it is customary to make jiaozi, or dumplings, after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days. Niangao literally means "new year cake" with a homophonous meaning of "increasingly prosperous year in year out".</p>                  
                            <p>After dinner, some families may visit local temples hours before midnight to pray for success by lighting the first incense of the year; however in modern practice, many households held parties to celebrate. Traditionally, firecrackers were lit to ward evil spirits when the household doors sealed, and are not to be reopened until dawn in a ritual called "opening the door of fortune". A tradition of staying up late on Chinese New Year's Eve is known as shousui, which is still practised as it is thought to add on to one's parents' longevity.</p>
                            <p>Come celebrate the Spring Festival with us, regardless of your origin! Let's write spring couplets, craft rabbit lanterns, and prepare a dinner feast together in the Student Life Center. We look forward to seeing you on Friday!</p>
                            {/* {details.description} */}
                        </div>
                        <div className={styles.subtitles}>Attendees</div>
                        <div className={styles.anttendees}>
                            <Row gutter={[16, 24]}>
                                {attendeesList}
                            </Row>             
                        </div>
                    </Content>

                    <Sider className={styles.siderStyle} width={'30%'}>
                        <Card title="Location" extra={<a href="https://www.google.com/maps">Open in Google Map</a>} className={styles.card}>
                            Student Life Centre, 200 University Ave W, Waterloo, ON N2L 3G1
                            {/* {details.location} */}
                        </Card>
                        <Card title="Group" className={styles.card}>
                            UWaterloo Chinese Students Group
                            {/* {details.group} */}
                        </Card>
                    </Sider>

                </Layout>
                
                <Footer className={styles.footerStyle}>
                    <div className={styles.buttons}>
                        <Button className={styles.sharebutton} icon={<ShareAltOutlined />} size={'large'} onClick={showShareModal} ghost>
                            Share
                        </Button>
                        <Modal title="Share with your friends!" style={{textAlign: 'center', fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} open={isShareModalOpen} onOk={handleShareOk} onCancel={handleShareCancel}>
                            <div className={styles.shares}>
                                <h3><TwitterOutlined />{" "}<a href="https://twitter.com/">Twitter</a></h3>
                                <h3><FacebookOutlined />{" "}<a href="https://facebook.com/">Facebook</a></h3>
                                <h3><InstagramOutlined />{" "}<a href="https://instagram.com/">Instagram</a></h3>
                                <h3><SlackOutlined />{" "}<a href="https://slack.com/">Slack</a></h3>
                            </div>
                        </Modal>
                        
                        {joined ? 
                            <Button className={styles.joinbutton} size={'large'} onClick={handleCancel} icon={<FrownOutlined />} ghost>
                                I'm not going
                            </Button> : 
                            <Button className={styles.joinbutton} icon={<UsergroupAddOutlined />} size={'large'} onClick={showJoinModal} ghost>
                                Join
                            </Button>
                        }

                        <Modal open={open} title="Hooray!" style={{textAlign: 'center', fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} onOk={handleJoinOk} onCancel={handleJoinCancel} footer={[
                            <Button key="Cancel" onClick={handleJoinCancel}>Cancel</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={handleJoinOk}>Yes</Button>]}
                        >
                            <p>Are you sure to join in this event?</p>
                        </Modal>
                    </div>
                </Footer>

            </Layout>
        
        </Space>
    );
}

export default EventDetail;
