import { IGatsbyImageData } from "gatsby-plugin-image";

export interface EventItemData {
    node: {
        id: string;
        title: string;
        path: string;
        eventDate: string;
        eventSubject: string;
        thumbImg: {
            childImageSharp: IGatsbyImageData;
        };
        fields: {
            slug: string;
        };
    };
}
