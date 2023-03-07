import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleArea, SubTitle, TitleBoxArea, Title } from "./style";

const SectionTitle = ({
    subTitle,
    title,
    textCenter,
    textWhate,
    titleStyle,
    showImage,
    className,
    sx,
    texttheme,
}) => {
    return (
        <SectionTitleArea
            className={`${className} ${textCenter ? "text-center" : ""} ${
                textWhate ? "text-white" : ""
            }`}
            sx={sx}
        >
            {subTitle && (
                <SubTitle
                    className={`subtitle ${
                        texttheme ? "line-white-color" : "line-theme-color"
                    } `}
                >
                    {subTitle}
                </SubTitle>
            )}
            <TitleBoxArea>
                <Title
                    className={`title ${titleStyle ? "title-style" : ""} ${
                        textWhate ? "text-white" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {showImage && (
                    <StaticImage
                        className="img-shape"
                        src="../../data/images/shape/3.png"
                        alt="Givest-HasTech"
                    />
                )}
            </TitleBoxArea>
        </SectionTitleArea>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    showImage: PropTypes.bool,
    sx: PropTypes.object,
    textCenter: PropTypes.bool,
    titleStyle: PropTypes.bool,
    texttheme: PropTypes.bool,
    textWhate: PropTypes.bool,
};
SectionTitle.defaultProps = {
    showImage: true,
};

export default SectionTitle;
