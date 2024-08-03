import path from "path";
import _ from "lodash";
import {
    CreateWebpackConfigArgs,
    GatsbyNode,
    NodeInput,
    SourceNodesArgs,
} from "gatsby";
import type { IRemoteImageNodeInput } from "gatsby-plugin-utils";
import probe from "probe-image-size";

// Source
import { slugify } from "./src/utils/functions";
import { NodeBuilderInput } from "./src/interfaces";
import { createSiteConfigSchema, createAssetSchema } from "@utils/schemas";

// export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
//     actions.setWebpackConfig({
//         resolve: {
//             alias: {
//                 "@assets": path.resolve(__dirname, "./src/assets"),
//                 "@components": path.resolve(__dirname, "./src/components"),
//                 "@config": path.resolve(__dirname, "./src/config"),
//                 "@data": path.resolve(__dirname, "./src/data"),
//                 "@pages": path.resolve(__dirname, "./src/pages"),
//                 "@theme": path.resolve(__dirname, "./src/theme"),
//                 "@utils": path.resolve(__dirname, "./src/utils"),
//                 // "@constants": path.resolve(__dirname, "./src/constants"),
//                 // "@hooks": path.resolve(__dirname, "./src/hooks"),
//                 "@i18n": path.resolve(__dirname, "./src/i18n"),
//             },
//         },
//     });
// };

// Single Post Page
export const onCreateNode: GatsbyNode["onCreateNode"] = ({
    node,
    actions,
}: any) => {
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

export const createPages: GatsbyNode["createPages"] = ({
    actions,
    graphql,
}) => {
    const { createPage } = actions;
    // const singlePostTemplate = path.resolve("src/templates/single-post.js");
    // const templates = {
    //     singlePost: path.resolve("src/templates/single-post/index.js"),
    //     tagPosts: path.resolve("src/templates/tag-post/index.js"),
    //     categoriePosts: path.resolve("src/templates/categories-post/index.js"),
    //     postList: path.resolve("src/templates/post-list/index.js"),
    //     causesPost: path.resolve("src/templates/causes-details/index.js"),
    //     eventPosts: path.resolve("src/templates/event-details/index.js"),
    //     servicesPosts: path.resolve("src/templates/services-details/index.js"),
    // };

    // return graphql(`
    //     {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         author
    //                         tags
    //                         categories
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }

    //         allServersJson {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }

    //         allCausesJson {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }

    //         allEventJson {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `).then((res: any) => {
    //     if (res.errors) return Promise.reject(res.errors);

    //     // Create Single Blog Post Page
    //     const posts = res.data.allMarkdownRemark.edges;

    //     posts.forEach(({ node }: any) => {
    //         createPage({
    //             path: node.fields.slug,
    //             component: templates.singlePost,
    //             context: {
    //                 // Pssing slug for Templates to use to get post
    //                 slug: node.fields.slug,
    //                 // Find author imageUrl from author and pass it to the single post templates
    //                 //imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
    //             },
    //         });
    //     });

    //     // Serives Causes Details Page
    //     const serversJson = res.data.allServersJson.edges;
    //     serversJson.forEach(({ node }: any) => {
    //         createPage({
    //             path: `/services/${node.fields.slug}`,
    //             component: templates.servicesPosts,
    //             context: {
    //                 slug: node.fields.slug,
    //             },
    //         });
    //     });
    //     // Create Causes Details Page
    //     const causesJson = res.data.allCausesJson.edges;
    //     causesJson.forEach(({ node }: any) => {
    //         createPage({
    //             path: `/causes/${node.fields.slug}`,
    //             component: templates.causesPost,
    //             context: {
    //                 slug: node.fields.slug,
    //             },
    //         });
    //     });

    //     // Create Events Details Page
    //     const eventJson = res.data.allEventJson.edges;
    //     eventJson.forEach(({ node }: any) => {
    //         createPage({
    //             path: `/events/${node.fields.slug}`,
    //             component: templates.eventPosts,
    //             context: {
    //                 slug: node.fields.slug,
    //             },
    //         });
    //     });

    //     // Get all Tag
    //     let tags: any[] = [];
    //     _.each(posts, (edge) => {
    //         if (_.get(edge, "node.frontmatter.tags")) {
    //             tags = tags.concat(edge.node.frontmatter.tags);
    //         }
    //     });
    //     // Tag Number Count
    //     let tagPostCounts: any = {};
    //     tags.forEach((tag) => {
    //         tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
    //     });
    //     tags = _.uniq(tags);

    //     // Tag Post Page Create
    //     tags.forEach((tag) => {
    //         createPage({
    //             path: `/tag/${slugify(tag)}`,
    //             component: templates.tagPosts,
    //             context: {
    //                 tag,
    //             },
    //         });
    //     });

    //     // Get all Categorie Post
    //     let categories: any[] = [];
    //     _.each(posts, (edge) => {
    //         if (_.get(edge, "node.frontmatter.categories")) {
    //             categories = categories.concat(
    //                 edge.node.frontmatter.categories
    //             );
    //         }
    //     });
    //     // Categorie Post Page Create
    //     categories.forEach((categorie) => {
    //         createPage({
    //             path: `/categories/${slugify(categorie)}`,
    //             component: templates.categoriePosts,
    //             context: {
    //                 categorie,
    //             },
    //         });
    //     });

    //     // Post List pagintion
    //     const postsPerPage = 3;
    //     const numberOfPages = Math.ceil(posts.length / postsPerPage);

    //     Array.from({ length: numberOfPages }).forEach((_, index) => {
    //         const inFirstPage = index === 0;
    //         const currentPage = index + 1;

    //         if (inFirstPage) return;

    //         createPage({
    //             path: `/blog/${currentPage}`,
    //             component: templates.postList,
    //             context: {
    //                 limit: postsPerPage,
    //                 skip: index * postsPerPage,
    //                 currentPage,
    //                 numberOfPages,
    //             },
    //         });
    //     });
    // });
};

export const createSchemaCustomization: GatsbyNode[`createSchemaCustomization`] =
    ({ actions, schema }) => {
        const { createTypes } = actions;

        const typeDefs = [
            schema.buildObjectType({
                name: "SiteConfig",
                fields: {
                    id: "String!",
                    name: "String!",
                    title: "String!",
                    url: "String!",
                    keyword: "String!",
                    description: "String!",
                    slogan: "String!",
                    total_donate: "String!",
                    header_about: "String!",
                    footer_about: "String!",
                    logo: {
                        type: "ImageAsset",
                        resolve(source, args, context, info) {
                            const node = context.nodeModel.getNodeById({
                                id: source.logo,
                                type: "ImageAsset",
                            });

                            return node;
                        },
                    },
                    favicon: "ImageAsset",
                    created_at: "String!",
                    updated_at: "String!",
                    deleted_at: "String!",
                },
                interfaces: ["Node"],
            }),
            schema.buildObjectType({
                name: "ImageAsset",
                fields: {
                    url: "String",
                    alt: "String",
                    width: "Int",
                    height: "Int",
                },
                interfaces: ["Node", "RemoteFile"],
            }),
        ];

        createTypes(typeDefs);
    };

export const sourceNodes: GatsbyNode["sourceNodes"] = async (gatsbyApi) => {
    // get data from GitHub API at build time
    // const siteConfig = await fetch(`http://localhost:3000/site_config`);
    // const siteConfigData = await siteConfig.json();
    // nodeBuilder(gatsbyApi, {
    //     type: "SiteConfig",
    //     data: siteConfigData,
    // });
};

const nodeBuilder = async (
    gatsbyApi: SourceNodesArgs,
    input: NodeBuilderInput
) => {
    const id = gatsbyApi.createNodeId(`${input.type}-${input.data.id}`);

    const data: Record<string, unknown> = input.data as unknown as Record<
        string,
        unknown
    >;

    if (input.type === "SiteConfig") {
        data.logo = await createAssetNode(gatsbyApi, input.data.logo);
    }

    const node = {
        ...data,
        id,
        _id: data.id,
        parent: null,
        children: [],
        internal: {
            type: input.type,
            contentDigest: gatsbyApi.createContentDigest(data),
        },
    };

    await gatsbyApi.actions.createNode(node);
};

const createAssetNode = async (
    gatsbyApi: SourceNodesArgs,
    imageUrl: string
) => {
    const imageAttr = await probe(imageUrl);

    const id = gatsbyApi.createNodeId(`Asset-${imageUrl}`);

    const imageData = {
        url: imageUrl,
        mimeType: imageAttr.mime,
        filename: imageUrl,
        width: imageAttr.width,
        height: imageAttr.height,
    };

    const assetNode = {
        ...imageData,
        id,
        parent: null,
        children: [],
        internal: {
            type: "ImageAsset",
            contentDigest: gatsbyApi.createContentDigest(imageData),
        },
    } satisfies IRemoteImageNodeInput;

    await gatsbyApi.actions.createNode(assetNode);

    return id;
};
