import styles from './index.module.css';
import 'antd/dist/reset.css';
import { Layout, Space, Card, Button, Avatar, Col, Row, Modal } from 'antd';
import { ShareAltOutlined, UsergroupAddOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined, SlackOutlined, FrownOutlined } from '@ant-design/icons';
import { useEffect, useState, React } from 'react';
import axios from 'axios';
import { normalizeDate } from '../../store/events'
import { useParams } from 'react-router-dom';

const { Footer, Sider, Content } = Layout;

const EventDetail = (props) => {
    const { eventId } = useParams();
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
    const handleCancel = () => { // Post Request!
        setJoined(false);
    }

    // Get event details data from the BackEnd
    const [data, setData] = useState([]);
    const [description, setDescription] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`/events/${eventId}`);
        setData(data);
        setDescription(data.description);
    };
    useEffect(() => {
        getData();
    }, []);

    // Set description as paragraphs
    var paralists;
    if(description.includes("\n")) {
        const paras = description.split('\n');
        paralists = paras.map(
            (para) => (<p>{para}</p>)
        );
    } else {
        paralists = <p>{description}</p>
    }

    // Set attendees list
    const attendees = [
        { avatar: "https://joesch.moe/api/v1/random?key=1", name: "Amber", identity: "Organizer" },
        { avatar: "https://joesch.moe/api/v1/random?key=2", name: "Anqi", identity: "Member" },
        { avatar: "https://joesch.moe/api/v1/random?key=3", name: "Aosen", identity: "Member" },
        { avatar: "https://joesch.moe/api/v1/random?key=4", name: "Ryan", identity: "Member" },
        { avatar: "https://joesch.moe/api/v1/random?key=5", name: "Yutong", identity: "Member" }
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
        <Space direction="vertical" style={{ width: '100%', }} size={[0, 48]}>

            <Layout>
                <div className={styles.headerStyle}>
                    <div className={styles.time}>
                        {normalizeDate(data.time)}
                    </div>
                    <div className={styles.title}>
                        {data.title}
                    </div>
                </div>

                <Layout>
                    <Content className={styles.contentStyle} width='70%'>
                        <div className={styles.subtitles}>Details</div>
                        <div className={styles.description}>
                            {paralists}
                        </div>
                        <div className={styles.subtitles}>Attendees</div>
                        <div className={styles.anttendees}>
                            <Row gutter={[16, 24]}>
                                {attendeesList}
                            </Row>
                        </div>
                    </Content>

                    <Sider className={styles.siderStyle} width='30%'>
                        <Card title="Location" extra={<a href="https://www.google.com/maps">Open in Google Map</a>} className={styles.card}>
                            {data.location}
                        </Card>
                        <Card title="Group" className={styles.card}>
                            UWaterloo Chinese Students Group
                            {/* {data.group} */}
                        </Card>
                    </Sider>

                </Layout>

                <Footer className={styles.footerStyle}>
                    <div className={styles.buttons}>
                    <Button className={styles.sharebutton} icon={<ShareAltOutlined />} size={'large'} onClick={showShareModal} ghost>
                        Share
                    </Button>
                    <Modal title="Share with your friends!" style={{ textAlign: 'center', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }} open={isShareModalOpen} onOk={handleShareOk} onCancel={handleShareCancel}>
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

                    <Modal open={open} title="Hooray!" style={{ textAlign: 'center', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }} onOk={handleJoinOk} onCancel={handleJoinCancel} footer={[
                        <Button key="Cancel" onClick={handleJoinCancel}>Cancel</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleJoinOk}>Yes</Button>]}
                    >
                        <p>Are you sure to join in this event?</p>
                    </Modal>
                    </div>
                </Footer>

            </Layout>

        </Space >
    );
}

export default EventDetail;
