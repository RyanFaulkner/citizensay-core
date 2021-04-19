import { Mongo } from "meteor/mongo";

export const Tiles = new Mongo.Collection('tiles');

if (Meteor.isServer)
    Meteor.publish('tiles', () => Tiles.find());