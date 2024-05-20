import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Source
import { BlogItem } from "@utils/interface";
import BlogList from "@components/ui/blog/list-blog";
import PaginationLinks from "@components/common/pagination";
import { BlogPostContentArea, PaginationArea } from "./style";

const BlogPostArea: React.FC = () => {
    const listBlogQuery = useStaticQuery(graphql`
        query ListBlogQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 3
            ) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM DD YYYY")
                            categories
                            author
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 750, height: 400)
                                }
                            }
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 225)
                    }
                }
            }
        }
    `);
    const { totalCount } = listBlogQuery.allMarkdownRemark;
    const listBlogData = listBlogQuery.allMarkdownRemark.edges as BlogItem[];
    const postsPerPage = 3;
    let numberOfPages = Math.ceil(totalCount / postsPerPage);
    return (
        <BlogPostContentArea>
            {listBlogData &&
                listBlogData.map((blog, i) => {
                    return (
                        <BlogList
                            key={i}
                            title={blog.node.frontmatter.title}
                            thume_image={blog.node.frontmatter.thume_image}
                            categories={blog.node.frontmatter.categories}
                            body={blog.node.excerpt}
                            date={blog.node.frontmatter.date}
                            slug={blog.node.fields.slug}
                            postAuthor={blog.node.frontmatter.author}
                        />
                    );
                })}

            <PaginationArea>
                <PaginationLinks
                    currentPage={1}
                    numberOfPages={numberOfPages}
                />
            </PaginationArea>
        </BlogPostContentArea>
    );
};

export default BlogPostArea;
