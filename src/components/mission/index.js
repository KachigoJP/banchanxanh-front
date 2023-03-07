import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    ContentBoxItem,
    Title,
    DesctionTextOne,
    DesctionTextTwo,
} from "./style";

const MissionBox = ({ title, text1, text2, VerientClassName }) => {
    return (
        <ContentBoxItem className={`${VerientClassName}`}>
            <Title>{title}</Title>
            <StaticImage
                className="img-line-shape"
                src="../../data/images/shape/line-s1.png"
                alt="Image-Givest"
            />
            <DesctionTextOne>{text1}</DesctionTextOne>
            <DesctionTextTwo>{text2}</DesctionTextTwo>
            <StaticImage
                className="bg-line-shape"
                src="../../data/images/shape/line5.png"
                alt="Image-Givest"
            />
        </ContentBoxItem>
    );
};

MissionBox.propTypes = {
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    VerientClassName: PropTypes.string,
};

export default MissionBox;
