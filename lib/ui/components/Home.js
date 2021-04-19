import React from 'react';

import { useTracker } from "meteor/react-meteor-data";
import { Groups } from "../../api/collections/Groups";

import { Container, Col, Row } from "react-bootstrap";
import { Group } from "./tiles/Group"

export const Home = () => {

    const { groups } = useTracker(() => {
        Meteor.subscribe("groups");
        return {
            groups: Groups.find().fetch()
        }
    });

    return (
        <Container fluid="md">
            <Row>
                {
                    groups.map(group =>
                        <Col
                            key={group._id}
                            xs={{span: 10, offset: 1}}
                            sm={{span:  8, offset: 2}}
                            md={{span:  4, offset: 0}}
                        >
                            <Group group={group._id}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );

};