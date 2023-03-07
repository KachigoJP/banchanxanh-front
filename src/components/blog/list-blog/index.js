/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { slugify } from "../../../utils/functions";
import authors from "../../../utils/authors";
import {
    PostItemWrap,
    PostThumb,
    MetaDate,
    ShapeLine,
    ListBlogContent,
    ListBlogContentInner,
    MetaBox,
    Title,
    TextDetails,
} from "./style";

const BlogList = ({
    thume_image,
    title,
    date,
    categories,
    body,
    postAuthor,
    slug,
}) => {
    const dateSplit = date.split(" ");
    const month = dateSplit[0];
    const day = dateSplit[1];
    const image = getImage(thume_image);

    // Author Post page
    const author = authors.find((x) => x.name === postAuthor);

    return (
        <PostItemWrap>
            <PostThumb className="post-hover">
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt={title} />
                </Link>
                <MetaDate>
                    <Link to="/">
                        <span>{day}</span>
                        {month}
                    </Link>
                </MetaDate>
                <ShapeLine />
            </PostThumb>
            <ListBlogContent>
                <ListBlogContentInner>
                    <MetaBox>
                        {categories.map((categorie, i) => (
                            <Link
                                className="post-category"
                                key={`${slugify(categorie)}-${i}`}
                                to={`/categories/${slugify(categorie)}`}
                            >
                                {categorie}
                            </Link>
                        ))}
                        {author && (
                            <Link className="post-author" to="/">
                                <span className="icon">
                                    <StaticImage
                                        className="icon-img"
                                        src="../../../data/images/icons/admin1.png"
                                        alt="Icon-Image"
                                    />
                                </span>
                                By: {author && author.name}
                            </Link>
                        )}
                    </MetaBox>
                    <Title>
                        <Link to={`/${slug}`}>{title}</Link>
                    </Title>
                    <TextDetails>{body}</TextDetails>
                    <Button
                        sx={{ mt: "20px" }}
                        path={`/${slug}`}
                        size="small"
                        color="border-gradient"
                    >
                        Read More{" "}
                        <i
                            className="flaticon-right-arrow"
                            sx={{ fontSize: "12px" }}
                        ></i>
                    </Button>
                </ListBlogContentInner>
            </ListBlogContent>
        </PostItemWrap>
    );
};

BlogList.propTypes = {
    thume_image: PropTypes.object,
    title: PropTypes.string,
    date: PropTypes.string,
    categories: PropTypes.array,
    body: PropTypes.string,
    postAuthor: PropTypes.string,
    slug: PropTypes.string,
};

export default BlogList;
