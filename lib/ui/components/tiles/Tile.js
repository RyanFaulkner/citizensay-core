import React from 'react';

import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./css/flip-container";

export const Tile = ({ tile }) => {

    let history = useHistory();
    const { t } = useTranslation("tiles");
    const { _id, size, color, icon } = tile;

    return (
        <div className={'flip-container ' + size}>
            <div
                className='tile flipper'
                style={{
                    "--c1": color,
                    "--c2": color.replace('rgb', 'rgba').replace(')', ', .75)')
                }}
                onClick={() => history.push("/" + _id)}
            >
                <div className='front'>
                    <FontAwesomeIcon
                        icon={icon}
                        size="3x"
                    />
                    {
                        size &&
                            <span>
                            	{ t(_id) }
                        	</span>
                    }
                </div>
                <div className='back'>
                    <i>{ t(_id + "Desc") }</i>
                </div>
            </div>
        </div>
    );

};