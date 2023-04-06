import React, { useState } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';


const GroupDetail = (props) => {
    const tempGroup = {
        id: "641a48cbe5ee844e639d89de",
        title: "Join the celebration of Spring Festival !",
        description: "The day before the Chinese New Year usually accompanied with a dinner feast, consisting of special meats are served at the tables, as a main course for the dinner and as an offering for the New Year. This meal is comparable to Thanksgiving dinner in the U.S. and remotely similar to Christmas dinner in other countries with a high percentage of Christians.\nIn northern China, it is customary to make jiaozi, or dumplings, after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days. Niangao literally means \"new year cake\" with a homophonous meaning of \"increasingly prosperous year in year out\".\nAfter dinner, some families may visit local temples hours before midnight to pray for success by lighting the first incense of the year; however in modern practice, many households held parties to celebrate. Traditionally, firecrackers were lit to ward evil spirits when the household doors sealed, and are not to be reopened until dawn in a ritual called \"opening the door of fortune\". A tradition of staying up late on Chinese New Year's Eve is known as shousui, which is still practised as it is thought to add on to one's parents' longevity.\nCome celebrate the Spring Festival with us, regardless of your origin! Let's write spring couplets, craft rabbit lanterns, and prepare a dinner feast together in the Student Life Center. We look forward to seeing you on Friday!",
        time: "2022-01-23T05:00:00.000+0000",
        venue: "Student Life Centre, 200 University Ave W, Waterloo, ON N2L 3G1",
        host: "Ryan Cham",
        attendees: [],
        group: null,
        imageUrls: "https://secure.meetupstatic.com/photos/event/1/9/d/a/clean_508926618.jpeg"

    }
    return (
        <div className={styles.group}>
            <div className={styles.groupHomeHeader}>
                <Row width="100%">
                    <Col span={15} order={1}>
                        <img className={styles.groupImage} src={tempGroup.imageUrls} alt=" " loading="lazy" />

                    </Col>
                    <Col span={9} order={2} className={styles.groupContent}>
                        <div className={styles.groupTitle}>
                            {tempGroup.title}
                        </div>
                        <div className={styles.groupDesc}>
                            Location: {tempGroup.venue}
                        </div>
                        <div className={styles.groupDesc}>
                            Host by {tempGroup.host}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default GroupDetail;