import { Card, Avatar, Col, Row, Meta } from 'antd';
import 'antd/dist/reset.css';

const MemberList = ({list}) => {
    const { Meta } = Card;
    const attendeesList = list.map(
        (attendee) => (
            <Col className="gutter-row" span={'30%'} key={attendee.name}>
                <Card hoverable style={{ width: 240 }}>
                    <Meta avatar={<Avatar size={50} src={attendee.avatar} />} title={attendee.name} description={attendee.identity} />
                </Card>
            </Col>
        )
    );

    return (
        <Row gutter={[16, 24]}>
            {attendeesList}
        </Row>
    )
}

export default MemberList;