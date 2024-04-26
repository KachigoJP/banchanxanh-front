import React from "react";

// Source
import { ButtonProps } from "@utils/interface";
import { Theme } from "@theme";
import {
    StyledButton,
    StyledAnchor,
    StyledLink,
    createStyles,
    StyledSpan,
} from "./style";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
    const {
        children,
        color,
        size,
        shape,
        variant,
        sx,
        className,
        path,
        label,
    } = props;

    const buttonProps = {
        css: (theme: Theme) => createStyles(theme, color, size, shape, variant),
    };
    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path.startsWith("#");

        if (internal) {
            return (
                <StyledLink
                    className={className}
                    to={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <span>{children}</span>
                </StyledLink>
            );
        }
        if (isHash) {
            return (
                <StyledAnchor
                    className={className}
                    href={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <StyledSpan>{children}</StyledSpan>
                </StyledAnchor>
            );
        }
        return (
            <StyledAnchor
                href={path}
                {...buttonProps}
                sx={sx}
                target="_blank"
                rel="noopener"
                className={className}
            >
                {label && <span className="sr-only">{label}</span>}
                <StyledSpan>{children}</StyledSpan>
            </StyledAnchor>
        );
    }

    return (
        <StyledButton {...buttonProps} {...props} sx={sx}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    type: "button",
    size: "medium",
    shape: "rounded",
};

export default Button;
