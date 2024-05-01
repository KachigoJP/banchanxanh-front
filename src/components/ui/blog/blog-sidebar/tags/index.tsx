import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// Source
import { flatDeep, slugify } from "@utils/functions";
import { WidgetTags, TabNav, NavList } from "./style";
import { TagsProps } from "./interface";

const Tag: React.FC<TagsProps> = (props) => {
    const { tags } = props;
    const allTags = [
        ...new Set(flatDeep(tags.map((tag) => tag.node.frontmatter.tags))),
    ];

    return (
        <WidgetTags>
            <TabNav>
                {allTags.map((tag: string) => (
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
