import { AllQuery, BlogItem } from "@utils/interface";

export interface SingleTagProps {
    data: {
        allMarkdownRemark: AllQuery<BlogItem>;
    };
    location: Location;
    pageContext: any;
}
