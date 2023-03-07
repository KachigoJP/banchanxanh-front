import styled, { themeGet } from "@theme/utils";

export const WidgetSearchBox = styled.div``;
export const FormInputItem = styled.div`
    position: relative;
    .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    input {
        background-color: #fff;
        border: none;
        border-radius: 0;
        color: #001d23;
        font-size: 15px;
        font-weight: 500;
        height: 55px;
        padding: 9px 60px 9px 24px;
        width: 100%;
    }
    .btn-src {
        border: none;
        font-size: 15px;
        height: 50px;
        line-height: 50px;
        position: absolute;
        right: 5px;
        top: calc(50% - 1px);
        transform: translateY(-50%);
        width: 50px;
        background: #fea444;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
