import React from "react";
import CountUp from "react-countup";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

// Source
import {
    FunInnerContent,
    IconBox,
    FunFactContent,
    NumberOfFunArea,
    Title,
} from "./style";
import { FunfactItemProps } from "./interface";

const FunfactItem: React.FC<FunfactItemProps> = (props) => {
    const { title, iconImage, shapImage, countNumber, countAmount } = props;

    const iconImg = getImage(iconImage);
    const shapImg = getImage(shapImage);

    return (
        <FunInnerContent>
            <IconBox>
                {iconImg ? (
                    <GatsbyImage
                        className="icon"
                        image={iconImg}
                        alt="Image-Givest"
                    />
                ) : null}
                {shapImg ? (
                    <GatsbyImage
                        className="shape-img"
                        image={shapImg}
                        alt="Image-Givest"
                    />
                ) : null}
            </IconBox>
            <FunFactContent>
                <NumberOfFunArea>
                    <h2>
                        <span className="counter-animate">
                            {" "}
                            <CountUp start={0} end={countNumber} />{" "}
                        </span>
                        {countAmount}
                    </h2>
                </NumberOfFunArea>
                <StaticImage
                    className="line-shape"
                    src="../../data/images/shape/funfact-line1.png"
                    alt="Image-Givest"
                />
                <Title>
                    {"//"} {title}
                </Title>
            </FunFactContent>
        </FunInnerContent>
    );
};

export default FunfactItem;
