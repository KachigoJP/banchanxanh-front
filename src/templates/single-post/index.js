/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import BlogSidebar from "@containers/blog/blog-sideber";
import authors from "@utils/authors";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    Title,
    MetaBox,
    CategorySocialContent,
    PostSocialItems,
    PostCategoryItems,
    CommentArea,
    CommentTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const post = data.markdownRemark.frontmatter;
    const image = getImage(post.thume_image.childImageSharp);

    // Author Post page
    const author = authors.find((x) => x.name === post.author);

    // Social Share
    const baseUrl = "https://hasthems.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout>
            <SEO title={post.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Details"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt={post.title}
                                        />
                                    </Thumb>
                                    <Content>
                                        <MetaBox>
                                            {post.categories &&
                                                post.categories.map(
                                                    (categorie, i) => (
                                                        <Link
                                                            className="post-category"
                                                            key={`${slugify(
                                                                categorie
                                                            )}-${i}`}
                                                            to={`/tag/${slugify(
                                                                categorie
                                                            )}`}
                                                        >
                                                            {categorie}
                                                        </Link>
                                                    )
                                                )}
                                            {author && (
                                                <Link
                                                    className="post-author"
                                                    to="/"
                                                >
                                                    <span className="icon">
                                                        <StaticImage
                                                            className="icon-img"
                                                            src="../../data/images/icons/admin1.png"
                                                            alt="Icon-Image"
                                                        />
                                                    </span>
                                                    By: {author && author.name}
                                                </Link>
                                            )}
                                        </MetaBox>
                                        <Title>{post.title}</Title>
                                        <SingleBlogContent
                                            dangerouslySetInnerHTML={{
                                                __html: data.markdownRemark
                                                    .html,
                                            }}
                                        />

                                        <CategorySocialContent>
                                            <PostSocialItems>
                                                <a
                                                    href={
                                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                                        baseUrl +
                                                        pageContext.slug
                                                    }
                                                >
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                                <a href="#/">
                                                    <i className="icofont-skype"></i>
                                                </a>
                                                <a
                                                    href={
                                                        "https://twitter.com/share?url=" +
                                                        baseUrl +
                                                        pageContext.slug +
                                                        "&text=" +
                                                        post.title +
                                                        "&via" +
                                                        "twitterHandle"
                                                    }
                                                >
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </PostSocialItems>
                                            <PostCategoryItems>
                                                <span>Tags:</span>
                                                {post.tags.map((tag, i) => (
                                                    <Link
                                                        key={i}
                                                        to={`/tag/${slugify(
                                                            tag
                                                        )}`}
                                                    >
                                                        {tag}
                                                        {i !==
                                                            post.tags.length -
                                                                1 && ", "}
                                                    </Link>
                                                ))}
                                            </PostCategoryItems>
                                        </CategorySocialContent>
                                    </Content>
                                    <CommentArea>
                                        <CommentTitle>Comments</CommentTitle>
                                        <DiscussionEmbed
                                            shortname={disqusShorttname}
                                            config={disquscConfig}
                                        />
                                    </CommentArea>
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SinglePosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                author
                categories
                date
                tags
                quote_text
                title
                thume_image {
                    childImageSharp {
                        gatsbyImageData(width: 750, height: 400)
                    }
                }
            }
            excerpt
        }
    }
`;
export default SinglePosts;
