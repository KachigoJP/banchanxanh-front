import styled, { themeGet, device } from "@theme/utils";

export const ClientThumbWrap = styled.div`
    margin-bottom: 39px;
    position: relative;
    z-index: 1;
`;

export const ClientThumb = styled.div`
    background-color: #13373e;
    border-radius: 50%;
    height: 129px;
    padding: 4px;
    width: 129px;
    & img {
        border-radius: 50%;
    }
`;

export const QuoteIcon = styled.div`
    font-size: 280px;
    font-family: "Yeseva One", cursive;
    left: 98px;
    line-height: 212px;
    position: absolute;
    top: 24px;
    z-index: -1;
    background: #fea444;
    background: linear-gradient(to right, #fea444 0%, #fc6539 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ClientContent = styled.div`
    margin-bottom: 38px;
    position: relative;
    max-width: 500px;
`;
export const ClientText = styled.p`
    color: #c2c2c2;
    font-size: 25px;
    font-family: ${themeGet("fonts.heading")};
    line-height: 1.6;
`;
export const ClientInfo = styled.div`
    .shape-line-img {
        margin-bottom: 31px;
        width: auto;
    }
`;

export const ClientName = styled.h4`
    color: #fff;
    font-size: 27px;
    margin-bottom: 29px;
`;
export const ClientDesignation = styled.h6`
    color: #fc6539;
    font-family: ${themeGet("fonts.heading")};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
`;
