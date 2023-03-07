import styled, { themeGet, device } from "@theme/utils";

export const VolunteerFormArea = styled.div`
    .row-gutter-20 [class*="col"] {
        padding-left: 10px;
        padding-right: 10px;
    }
    .form-group {
        margin-bottom: 20px;
        .form-control {
            background-color: transparent;
            border: 2px solid #d7d7d7;
            border-radius: 0;
            box-shadow: none;
            color: #001d23;
            height: 55px;
            padding: 20px 20px;
            &.textarea {
                margin-bottom: 39px;
                min-height: 215px;
            }
        }
    }
    .form-control {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`;
