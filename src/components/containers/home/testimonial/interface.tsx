import { IGatsbyImageData } from "gatsby-plugin-image";

export interface TestimoniaItem {
    node: {
        id: string;
        clientName: string;
        clientSaidText: string;
        clientDesignation: string;
        clientImage: IGatsbyImageData;
    };
}
