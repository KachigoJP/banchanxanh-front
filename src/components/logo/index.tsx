import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import LiteLogo from "@/assets/images/logo/logo.png";
import { HeaderLogoArea } from "./style";

const Logo = ({ className }: any) => {
  return (
    <HeaderLogoArea className={className}>
      <Link href="/">
        <Image className="logo-main" src={LiteLogo} alt="Logo" />
      </Link>
    </HeaderLogoArea>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
