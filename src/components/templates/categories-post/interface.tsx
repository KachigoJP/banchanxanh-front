import { BlogItem } from "@utils/interface";

export interface BlogCategoriesPostProps {
    data: {
        allMarkdownRemark: {
            edges: BlogItem[];
        };
    };
    location: Location;
    pageContext: any;
}
