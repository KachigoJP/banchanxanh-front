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
    id: string;
    isSubmenu: boolean;
    link: string;
    text: string;
    submenu?: MenuItem[];
}
