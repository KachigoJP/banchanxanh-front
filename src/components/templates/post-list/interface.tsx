import { BlogItem } from "@utils/interface";

export interface PostListProps {
    data: {
        allMarkdownRemark: {
            edges: BlogItem[];
        };
    };
    location: Location;
    pageContext: any;
}
