import { graphql } from "gatsby";

export const siteConfigQuery = graphql`
    fragment SiteConfigFragment on SiteConfig {
        id
        name
        title
        url
        keyword
        description
        slogan
        total_donate
        header_about
        footer_about
    }
`;
