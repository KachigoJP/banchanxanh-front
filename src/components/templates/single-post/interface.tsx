import { BlogItem } from "@utils/interface";

export interface SinglePostProps {
    data: {
        allMarkdownRemark: {
            edges: BlogItem[];
        };
    };
    location: Location;
    pageContext: any;
}
