import { Image } from "@utils/interface";

export interface SEOProps {
    title: string;
    pathname: string;
    description?: string;
    lang?: string;
    titleTemplate?: string;
    image?: Image;
    canonical?: string;
    nextPage?: string;
    prevPage?: string;
    rootPath?: string;
    isBlogPost?: boolean;
}
