import React from "react";
import Categories from "@components/blog/blog-sidebar/categories";
import { graphql, useStaticQuery } from "gatsby";
const AllCategories = () => {
    const categoriesQuery = useStaticQuery(graphql`
        query CategoriesQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            categories
                        }
                    }
                }
            }
        }
    `);

    const categories = categoriesQuery.allMarkdownRemark.edges;

    return (
        <div>
            <Categories categories={categories} />
        </div>
    );
};

export default AllCategories;
