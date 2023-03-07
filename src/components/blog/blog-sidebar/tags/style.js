import styled, { themeGet } from "@theme/utils";

export const WidgetTags = styled.div``;
export const TabNav = styled.ul`
    margin-bottom: 30px;
`;
export const NavList = styled.li`
    color: #0e0e0e;
    display: inline-block;
    font-size: 13px;
    margin-bottom: 10px;
    margin-right: 10px;
    line-height: 1.4;
    a {
        background-color: #fff;
        color: #595959;
        display: inline-block;
        font-size: 15px;
        font-weight: 500;
        line-height: 19px;
        min-width: 86px;
        padding: 10.5px 23px;
        text-align: center;
        transition: 0.1s;
        -webkit-transition: 0.1s;
        -moz-transition: 0.1s;
        -ms-transition: 0.1s;
        -o-transition: 0.1s;
        &:hover {
            color: #fff;
            background: #fea444;
            background: ${themeGet("colors.gradient")};
        }
    }
`;
