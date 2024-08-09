import { IGatsbyImageData } from "gatsby-plugin-image";

export interface FunfactItemData {
    node: {
        f1IconImage: {
            childImageSharp: IGatsbyImageData;
        };
        shap4Image: {
            childImageSharp: IGatsbyImageData;
        };
    };
}
