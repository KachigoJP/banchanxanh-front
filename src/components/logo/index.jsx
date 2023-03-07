import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LiteLogo from "@assets/images/logo/logo.png";
import { HeaderLogoArea } from "./style";

const Logo = ({ className }) => {
    return (
        <HeaderLogoArea className={className}>
            <Link to="/">
                <img className="logo-main" src={LiteLogo} alt="Logo" />
            </Link>
        </HeaderLogoArea>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
};

export default Logo;
