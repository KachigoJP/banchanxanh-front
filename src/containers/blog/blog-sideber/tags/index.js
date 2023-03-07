import React from "react";
import Tag from "@components/blog/blog-sidebar/tags";
import { graphql, useStaticQuery } from "gatsby";

const AllTags = () => {
    const tagQuery = useStaticQuery(graphql`
        query TagQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `);

    const tags = tagQuery.allMarkdownRemark.edges;

    return <Tag tags={tags} />;
};

export default AllTags;
