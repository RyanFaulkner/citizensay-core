import React from 'react';

import { useTracker } from "meteor/react-meteor-data";
import { Tiles } from "../../../api/collections/Tiles";

import { useTranslation } from 'react-i18next';

import { Tile } from './Tile';

export const Group = ({ group }) => {

    const { t } = useTranslation("groups");

    const { tiles } = useTracker(() => {
        Meteor.subscribe("tiles");
        return {
            tiles: Tiles.find({group}).fetch()
        };
    });

    return (
        <>
            <h3>{ t(group) }</h3>
            {
                tiles.map(tile =>
                    <Tile
                        key={tile._id}
                        tile={tile}
                    />
                )
            }
        </>
    );

};