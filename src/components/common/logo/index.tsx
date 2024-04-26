import React from "react";
import { Link } from "gatsby";

// Source
import LiteLogo from "@assets/images/logo/logo.png";
import { HeaderLogoArea } from "./style";

const Logo: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <HeaderLogoArea className={props.className}>
            <Link to="/">
                <img className="logo-main" src={LiteLogo} alt="Logo" />
            </Link>
        </HeaderLogoArea>
    );
};

export default Logo;
