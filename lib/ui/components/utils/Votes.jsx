import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Badge } from "react-bootstrap";

const Votes = ({ votes }) => (<span>{ votes.map(vote => <Badge key={vote._id} pill variant="info">{ vote.username }</Badge>)}</span>);
export default withTracker(({ ids }) => {
    Meteor.subscribe("users");
    return {
        votes: Meteor.users.find({_id: {$in: ids}}, {fields: {username: 1}}).fetch()
    };
})(Votes);