/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "@components/ui/button";
import {
    IconBoxitem,
    IconBoxTop,
    IconBox,
    Title,
    ContentBox,
    SeparatorLine,
    ParText,
} from "./style";

const ServiceItem = ({ title, parText, slug, image, itemClassName }) => {
    const { t } = useTranslation();
    const iconImg = getImage(image);
    return (
        <IconBoxitem className={`${itemClassName} mb-5`}>
            <IconBoxTop>
                <IconBox>
                    <GatsbyImage image={iconImg} alt="" />
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
                    sx={{ color: "#fff" }}
                >
                    {t("View Details")}
                    <i sx={{ ml: "8px" }} className="flaticon-right-arrow"></i>
                </Button>
            </ContentBox>
        </IconBoxitem>
    );
};

ServiceItem.propTypes = {
    title: PropTypes.string,
    parText: PropTypes.string,
    image: PropTypes.object,
    itemClassName: PropTypes.string,
    slug: PropTypes.string,
};

// ServiceItem.defaultProps = {
//     path: "#!",
// };

export default ServiceItem;
