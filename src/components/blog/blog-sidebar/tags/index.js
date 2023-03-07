import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { flatDeep, slugify } from "@utils/functions";
import { WidgetTags, TabNav, NavList } from "./style";

const Tag = ({ tags }) => {
    const allTags = [
        ...new Set(flatDeep(tags.map((tag) => tag.node.frontmatter.tags))),
    ];

    return (
        <WidgetTags>
            <TabNav>
                {allTags.map((tag) => (
                    <NavList key={slugify(tag)}>
                        <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
                    </NavList>
                ))}
            </TabNav>
        </WidgetTags>
    );
};

Tag.propTypes = {
    tags: PropTypes.array,
};

export default Tag;
