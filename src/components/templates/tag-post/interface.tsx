import { BlogItem } from "@utils/interface";

export interface TagPostProps {
    data: {
        allMarkdownRemark: {
            edges: BlogItem[];
        };
    };
    location: Location;
    pageContext: any;
}
