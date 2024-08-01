import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

// Source
import Button from "@components/common/button";
import { ServiceItemProps } from "./interface";
import {
    IconBoxitem,
    IconBoxTop,
    IconBox,
    Title,
    ContentBox,
    SeparatorLine,
    ParText,
} from "./style";

const ServiceItem: React.FC<ServiceItemProps> = (props) => {
    const { title, parText, slug, image, itemClassName } = props;
    const { t } = useTranslation();

    const iconImg = getImage(image);

    return (
        <IconBoxitem className={`${itemClassName} mb-5`}>
            <IconBoxTop>
                <IconBox>
                    {iconImg ? <GatsbyImage image={iconImg} alt="" /> : null}
                </IconBox>
                <Title>{title}</Title>
            </IconBoxTop>
            <ContentBox>
                <SeparatorLine>
                    <StaticImage
                        src="../../data/images/shape/line-s1.png"
                        alt="Givest-HasTech"
                    />
                </SeparatorLine>
                <ParText>{parText}</ParText>
                <Button
                    path={`/services/${slug}`}
                    size="small"
                    variant="outlined"
                    color="light"
                    css={{ color: "#fff" }}
                >
                    {t("View Details")}
                    <i css={{ ml: "8px" }} className="flaticon-right-arrow"></i>
                </Button>
            </ContentBox>
        </IconBoxitem>
    );
};

export default ServiceItem;
