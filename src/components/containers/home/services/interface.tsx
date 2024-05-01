import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ServiceItemData {
    node: {
        id: string;
        title: string;
        parText: string;
        itemClassName: string;
        iconImage: IGatsbyImageData;
        fields: {
            slug: string;
        };
    };
}
