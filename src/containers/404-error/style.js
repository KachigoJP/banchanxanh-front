import styled, { themeGet, device } from "@theme/utils";
export const ErroaSection = styled.section`
    padding: 90px 15px 320px;
    text-align: center;
    ${device.medium} {
        padding: 90px 0px 320px;
    }
    ${device.large} {
        padding: 180px 0 380px;
    }
    ${device.xlarge} {
        padding: 200px 0 420px;
    }
    h1 {
        color: ${themeGet("colors.primary")};
    }
    p {
        margin-bottom: 30px;
    }
`;
