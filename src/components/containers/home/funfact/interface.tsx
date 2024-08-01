import { IGatsbyImageData } from "gatsby-plugin-image";

export interface FunfactItemData {
    node: {
        id: string;
        title: string;
        countNumber: number;
        countAmount: string;
        shapImage: {
            childImageSharp: IGatsbyImageData;
        };
        iconImage: {
            childImageSharp: IGatsbyImageData;
        };
    };
}
