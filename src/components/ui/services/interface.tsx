import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ServiceItemProps {
    title: string;
    parText: string;
    image: IGatsbyImageData;
    itemClassName: string;
    slug: string;
}
