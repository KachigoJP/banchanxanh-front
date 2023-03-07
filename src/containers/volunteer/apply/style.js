import styled, { themeGet, device } from "@theme/utils";
export const SectionArea = styled.section``;
export const VolunteerFormArea = styled.div`
    background-color: #f7f7f7;
    padding: 70px 15px;
    ${device.medium} {
        padding: 95px 50px 100px;
    }
    ${device.large} {
        padding: 146px 100px 150px;
    }
    .section-title {
        .subtitle {
            color: #fc6539;
            display: inline-block;
            font-family: "Roboto", sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 1;
            margin: 0 0 12px;
            padding-left: 64px;
            position: relative;
            &::after {
                background-color: #001d23;
                content: "";
                height: 3px;
                left: 0;
                position: absolute;
                top: calc(50% - 1.5px);
                width: 43px;
            }
        }
        .title {
            margin-bottom: 17px;
            font-size: 26px;
            line-height: 1.25;
            & span {
                background: none;
                color: transparent;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #939697;
                -webkit-text-fill-color: unset;
            }
            ${device.small} {
                font-size: 30px;
            }
            ${device.medium} {
                font-size: 40px;
            }
            ${device.large} {
                font-size: 50px;
                padding-right: 110px;
            }
            ${device.xlarge} {
                font-size: 60px;
                padding-right: 110px;
            }
        }
    }
`;
export const SectionTitle = styled.div`
    margin-bottom: 44px;
`;

export const SubTitle = styled.h5`
    color: #fc6539;
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 12px;
    padding-left: 64px;
    position: relative;
    &::after {
        background-color: #001d23;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: calc(50% - 1.5px);
        width: 43px;
    }
`;
export const Title = styled.h2`
    margin-bottom: 17px;
    font-size: 26px;
    line-height: 1.25;
    & span {
        background: none;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #939697;
        -webkit-text-fill-color: unset;
    }
    ${device.small} {
        font-size: 30px;
    }
    ${device.medium} {
        font-size: 40px;
    }
    ${device.large} {
        font-size: 50px;
        padding-right: 110px;
    }
    ${device.xlarge} {
        font-size: 60px;
        padding-right: 110px;
    }
`;
export const Text = styled.p``;
