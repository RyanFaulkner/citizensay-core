import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { Button, Collapse } from "react-bootstrap";

export const MoreLess = ({ text }) => {
    const { t } = useTranslation();
    const [ open, setOpen ] = useState(false);
    const i = text.trim().indexOf(".") + 1;
    return (
        (i!==text.length && i!==0) ?
            <>
                { text.substring(0, i) }
                <Collapse in={open}>
                    <span>{ text.substring(i) }</span>
                </Collapse>
                <Button
                    size="sm" variant="link"
                    onClick={() => setOpen(!open)}
                >
                    ... { t(open ? "less" : "more") }
                </Button>
            </>
        :
            text
    );
};