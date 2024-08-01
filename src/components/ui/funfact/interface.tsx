import { IGatsbyImageData } from "gatsby-plugin-image";

export interface FunfactItemProps {
    title: string;
    iconImage: IGatsbyImageData;
    shapImage: IGatsbyImageData;
    countNumber: number;
    countAmount: string;
}
