import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    TeamMemberWrap,
    Thumb,
    SocialIcons,
    Content,
    TeamMemberInfo,
    MemberName,
    Designation,
} from "./style";

const Team = ({ name, designation, images }) => {
    const imgs = getImage(images);
    return (
        <TeamMemberWrap>
            <Thumb className="thumb">
                <GatsbyImage image={imgs} alt={name} />
                <SocialIcons className="socialHover">
                    <a href="#!">
                        <i className="icofont-facebook"></i>
                    </a>
                    <a href="#!">
                        <i className="icofont-skype"></i>
                    </a>
                    <a href="#!">
                        <i className="icofont-twitter"></i>
                    </a>
                </SocialIcons>
            </Thumb>
            <Content>
                <TeamMemberInfo>
                    <MemberName>
                        <a href="#/">{name}</a>
                    </MemberName>
                    <Designation>{designation}</Designation>
                </TeamMemberInfo>
            </Content>
        </TeamMemberWrap>
    );
};

Team.propTypes = {
    name: PropTypes.string,
    designation: PropTypes.string,
    images: PropTypes.object,
};

export default Team;
