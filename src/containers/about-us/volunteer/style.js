import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: 95px 0 70px;
    ${device.xlarge} {
        padding: 150px 0 118px;
    }
    & .container {
        max-width: 1676px;
    }
`;
export const SectionLetArea = styled.div`
    text-align: center;
    ${device.xlarge} {
        text-align: left;
    }
`;
