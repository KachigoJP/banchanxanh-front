export interface SEOProps {
    description: string;
    lang: string;
    title: string;
    titleTemplate: string;
    image: Image;
    pathname: string;
    canonical: string;
    nextPage: string;
    prevPage: string;
    rootPath: string;
    isBlogPost: boolean;
}

export interface Image {
    src: string;
    width: string;
    height: string;
}

export interface MenuProps {
    menu: MenuItem[];
}

export interface MenuItem {
    node: {
        id: string;
        isSubmenu: boolean;
        link: string;
        text: string;
        submenu?: MenuItem[];
    };
}

export interface ButtonProps {
    className?: string;
    sx?: Size;
    type?: "button" | "submit" | "reset";
    color?:
        | "primary"
        | "secondary"
        | "dark"
        | "light"
        | "gradient"
        | "theme-gradient"
        | "outlined-transparent"
        | "border-gradient"
        | "border-normal";
    size?: "xsmall" | "small" | "medium" | "large" | "fullwidth";
    shape?: "rounded";
    variant?: "outlined" | "iconButton";
    path?: string;
    label?: string;
}

export interface Size {
    ml: string;
}

export interface VideoProps {
    isOpen: boolean;
    videoId: string;
    setOpen: (value: boolean) => {};
}
