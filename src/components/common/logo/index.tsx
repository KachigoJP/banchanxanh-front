import React from "react";
import { Link } from "gatsby";

// Source
import { HeaderLogoArea } from "./style";
import { LogoProps } from "./interface";

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = (props) => {
    return (
        <HeaderLogoArea className={props.className}>
            <Link to="/">
                <img className="logo-main" src={props.logo} alt="Logo" />
            </Link>
        </HeaderLogoArea>
    );
};

export default Logo;
