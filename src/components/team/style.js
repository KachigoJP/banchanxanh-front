import styled, { themeGet, device } from "@theme/utils";

export const Thumb = styled.div`
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    display: flex;
    img,
    svg {
        vertical-align: middle;
    }
    &::after {
        bottom: -100%;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        width: 100%;
        background-image: linear-gradient(
            360deg,
            rgba(246, 103, 57, 0.67843) 0%,
            rgba(0, 0, 0, 0) 35%
        );
        transition: 0.2s;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -ms-transition: 0.2s;
        -o-transition: 0.2s;
    }
`;
export const SocialIcons = styled.div`
    bottom: -45px;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
    transform: translate(-50 %, 0);
    -webkit-transform: translate(-50 %, 0);
    -moz-transform: translate(-50 %, 0);
    -ms-transform: translate(-50 %, 0);
    -o-transform: translate(-50 %, 0);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    & a {
        background-color: #fff;
        border-radius: 50%;
        color: #001d23;
        display: inline-block;
        font-size: 17px;
        height: 45px;
        line-height: 47px;
        margin-right: 6px;
        text-align: center;
        width: 45px;
        transition: 0.1s;
        -webkit-transition: 0.1s;
        -moz-transition: 0.1s;
        -ms-transition: 0.1s;
        -o-transition: 0.1s;
    }
`;

export const TeamMemberWrap = styled.div`
    margin-bottom: 30px;
    &:hover {
        .socialHover {
            bottom: 30px;
        }
        .thumb:after {
            bottom: 0;
        }
    }
`;
export const Content = styled.div``;

export const TeamMemberInfo = styled.div`
    text-align: center;
`;
export const MemberName = styled.h4`
    font-size: 24px;
    margin-bottom: 23px;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    ${device.xlarge} {
        font-size: 20px;
    }
    ${device.xxlarge} {
        font-size: 27px;
    }
`;
export const Designation = styled.h6`
    color: #909090;
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-transform: uppercase;
    transition: 0.3s;
`;
