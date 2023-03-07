import styled, { themeGet, device } from "@theme/utils";

export const IconBoxitem = styled.div`
    background: ${themeGet("colors.primary")};
    padding: 45px 25px;
    margin-bottom: 30px;
    &.item-two {
        background-color: #001d23;
    }
    &.item-three {
        background-color: #fea444;
    }
    ${device.medium} {
        padding: 45px 25px;
    }
    ${device.large} {
        padding: 45px 25px;
    }
    ${device.xlarge} {
        padding: 52px 47px 44px 58px;
    }
`;

export const IconBoxTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding-left: 20px;
    ${device.medium} {
        margin-bottom: 33px;
        padding-left: 22px;
    }
`;
export const IconBox = styled.div`
    margin-right: 10px;
    min-height: 78px;
    min-width: 50px;
    position: relative;
    top: 7px;
    &:after {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    content: "";
    height: 83px;
    width: 83px;
    left: -27px;
    position: absolute;
    top: -15px;
    
    ${device.small}{
       
    }
    ${device.medium}{
        margin-right: 11px;
        min-height: 89px;
        min-width: 87px;

    }
    img {
        min-width: auto;
        width: 40px;
        ${device.medium}{
            min-width: 76px;
        }
    }
`;

export const Title = styled.h4`
    color: #fff;

    font-size: 24px;
    line-height: 1.185;
    margin-bottom: 0;
    ${device.medium} {
        font-size: 28px;
    }
    ${device.large} {
        font-size: 30px;
    }
    ${device.xlarge} {
        font-size: 38px;
    }
`;
export const ContentBox = styled.div``;
export const SeparatorLine = styled.div`
    margin-bottom: 27px;
`;
export const ParText = styled.p`
    color: #feece7;
    line-height: 1.667;
    margin-bottom: 32px;
`;
