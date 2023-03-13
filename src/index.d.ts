/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

declare global {
  namespace preact {
    interface PreactDOMAttributes {
      sx: SxStyleProp;
    }
  }
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}
