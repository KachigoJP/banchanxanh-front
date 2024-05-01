import { ImageDataLike } from "gatsby-plugin-image";

export interface CauseData {
    node: {
        id: string;
        title: string;
        dec: string;
        adminName: string;
        image: ImageDataLike;
        donateInfo: {
            donateTitle: string;
            amount: string;
        };
        adminImage: ImageDataLike;
        fields: {
            slug: string;
        };
    };
}
