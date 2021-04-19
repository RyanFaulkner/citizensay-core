import React from "react";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

export const Header = () => {
    const { t } = useTranslation("core");
    return (
        <Navbar>
            <Link to="/home">
                <Navbar.Brand>
                    <Image
                        src="/packages/citizensay_core/img/cs-logo.png"
                        height={32}
                    />
                    { " " + t("welcome") }
                </Navbar.Brand>
            </Link>
        </Navbar>
    );
};