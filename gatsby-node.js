/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(
                    __dirname,
                    "./src/gatsby-plugin-theme-ui"
                ),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
                "@lang": path.resolve(__dirname, "./src/i18n"),
            },
        },
    });
};

// Single Post Page
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    // fields create in qrapql file
    if (node.internal.type === "MarkdownRemark") {
        const slugFromTitle = slugify(node.frontmatter.title);
        createNodeField({
            node,
            name: "slug",
            value: slugFromTitle,
        });
    }
    // Sevices Json File Create
    if (node.internal.type === "ServersJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
    // Causes Json File Create
    if (node.internal.type === "CausesJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
    // Events Json File Create
    if (node.internal.type === "EventJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    //  const singlePostTemplate = path.resolve('src/templates/single-post.js')
    const templates = {
        singlePost: path.resolve("src/templates/single-post/index.js"),
        tagPosts: path.resolve("src/templates/tag-post/index.js"),
        categoriePosts: path.resolve("src/templates/categories-post/index.js"),
        postList: path.resolve("src/templates/post-list/index.js"),
        causesPost: path.resolve("src/templates/causes-details/index.js"),
        eventPosts: path.resolve("src/templates/event-details/index.js"),
        servicesPosts: path.resolve("src/templates/services-details/index.js"),
    };

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                            categories
                        }
                        fields {
                            slug
                        }
                    }
                }
            }

            allServersJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }

            allCausesJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }

            allEventJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        // Create Single Blog Post Page
        const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Pssing slug for Templates to use to get post
                    slug: node.fields.slug,
                    // Find author imageUrl from author and pass it to the single post templates
                    //imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                },
            });
        });

        // Serives Causes Details Page
        const serversJson = res.data.allServersJson.edges;
        serversJson.forEach(({ node }) => {
            createPage({
                path: `/services/${node.fields.slug}`,
                component: templates.servicesPosts,
                context: {
                    slug: node.fields.slug,
                },
            });
        });
        // Create Causes Details Page
        const causesJson = res.data.allCausesJson.edges;
        causesJson.forEach(({ node }) => {
            createPage({
                path: `/causes/${node.fields.slug}`,
                component: templates.causesPost,
                context: {
                    slug: node.fields.slug,
                },
            });
        });

        // Create Events Details Page
        const eventJson = res.data.allEventJson.edges;
        eventJson.forEach(({ node }) => {
            createPage({
                path: `/events/${node.fields.slug}`,
                component: templates.eventPosts,
                context: {
                    slug: node.fields.slug,
                },
            });
        });

        // Get all Tag
        let tags = [];
        _.each(posts, (edge) => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // Tag Number Count
        let tagPostCounts = {};
        tags.forEach((tag) => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        });
        tags = _.uniq(tags);

        // Tag Post Page Create
        tags.forEach((tag) => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            });
        });

        // Get all Categorie Post
        let categories = [];
        _.each(posts, (edge) => {
            if (_.get(edge, "node.frontmatter.categories")) {
                categories = categories.concat(
                    edge.node.frontmatter.categories
                );
            }
        });
        // Categorie Post Page Create
        categories.forEach((categorie) => {
            createPage({
                path: `/categories/${slugify(categorie)}`,
                component: templates.categoriePosts,
                context: {
                    categorie,
                },
            });
        });

        // Post List pagintion
        const postsPerPage = 3;
        const numberOfPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numberOfPages }).forEach((_, index) => {
            const inFirstPage = index === 0;
            const currentPage = index + 1;

            if (inFirstPage) return;

            createPage({
                path: `/blog/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages,
                },
            });
        });
    });
};
