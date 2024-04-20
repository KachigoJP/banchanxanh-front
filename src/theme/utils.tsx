// import {
//     jsx,
//     css,
//     keyframes,
//     Global,
//     Provider as ThemeProvider,
//     useTheme,
// } from "@emotion/react";
const breakpoints = ["576px", "768px", "992px", "1200px", "1400px", "1600px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
    xxxlarge: `@media screen and (min-width: ${breakpoints[5]})`,
};
