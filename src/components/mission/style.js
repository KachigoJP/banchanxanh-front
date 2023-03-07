import styled, { themeGet, device } from "@theme/utils";

export const ContentBoxItem = styled.div`
    background-color: #fc6539;
    padding: 62px 25px 48px;
    position: relative;
    z-index: 1;
    ${device.large} {
        padding: 62px 35px 48px 43px;
    }
    & .img-line-shape {
        margin-bottom: 34px;
    }
    & .bg-line-shape {
        left: 0;
        position: absolute !important;
        top: 0;
        width: 100%;
        z-index: -1;
    }
    &.bg-color2 {
        background-color: rgb(254, 164, 68);
    }
`;

export const Title = styled.h3`
    color: #fff;
    font-size: 38px;
    margin-bottom: 59px;
    padding-left: 28px;
    position: relative;
    &::before {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        content: "";
        height: 82.5px;
        left: -1px;
        position: absolute;
        top: 50%;
        width: 82.5px;
        transform: translate(0, -50%);
        -webkit-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
    }
`;

export const DesctionTextOne = styled.p`
    color: #fff;
    margin-bottom: 14px;
    font-size: 14px;
`;

export const DesctionTextTwo = styled.p`
    color: #fff;
    font-family: ${themeGet("fonts.heading")};
    font-size: 14px;
`;
