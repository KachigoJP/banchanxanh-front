import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    ClientThumbWrap,
    ClientThumb,
    QuoteIcon,
    ClientContent,
    ClientText,
    ClientInfo,
    ClientName,
    ClientDesignation,
} from "./style";

const TestimonialItem = ({
    client,
    clientSaidText,
    clientDesignation,
    clientImage,
}) => {
    const image = getImage(clientImage);
    return (
        <div className="testimonial-single">
            <ClientThumbWrap>
                <ClientThumb>
                    <GatsbyImage image={image} alt={client} />
                </ClientThumb>
                <QuoteIcon>“</QuoteIcon>
            </ClientThumbWrap>
            <ClientContent>
                <ClientText>{clientSaidText}</ClientText>
            </ClientContent>
            <ClientInfo>
                <StaticImage
                    className="shape-line-img"
                    src="../../data/images/shape/line-t1.png"
                    alt="Image-Givest"
                />
                <ClientName>{client}</ClientName>
                <ClientDesignation>{clientDesignation}</ClientDesignation>
            </ClientInfo>
        </div>
    );
};

TestimonialItem.propTypes = {
    client: PropTypes.string,
    clientSaidText: PropTypes.string,
    clientDesignation: PropTypes.string,
    clientImage: PropTypes.object,
};

export default TestimonialItem;
