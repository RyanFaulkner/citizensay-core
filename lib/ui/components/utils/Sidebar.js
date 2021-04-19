import React, { useState } from "react";

import { Navbar } from "react-bootstrap";
import { useWindowDimensions } from "./Windows";

export const Sidebar = ({ children }) => {
    const [ expanded, setExpanded ] = useState(false);
    const { height } = useWindowDimensions();
    return (
        <Navbar
            expand={false}
            expanded={expanded}
            onToggle={setExpanded}
            style={{
                alignItems: "flex-start",
                borderRight: "1px solid gainsboro",
                height: height - 120,
                overflowY: "auto",
                flex: expanded ? "1": "inherit"
            }}
        >
            <Navbar.Toggle/>
            <Navbar.Collapse style={{minHeight: height - 176}}>
                { children }
            </Navbar.Collapse>
        </Navbar>
    );
};