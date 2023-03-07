import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { BrandLogoItem } from "./style";

const SponsorLogo = ({ sponsorLogo }) => {
    const image = getImage(sponsorLogo);
    return (
        <BrandLogoItem>
            <GatsbyImage image={image} alt="Image-Givest" />
        </BrandLogoItem>
    );
};

SponsorLogo.propTypes = {
    sponsorLogo: PropTypes.object,
};

export default SponsorLogo;
