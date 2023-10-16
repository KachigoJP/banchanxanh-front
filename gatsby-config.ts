import AppConfig from "./config/config";
import type { GatsbyConfig } from "gatsby";

const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

const config: GatsbyConfig = {
    pathPrefix: AppConfig.pathPrefix,
    siteMetadata: {
        title: AppConfig.title,
        titleTemplate: AppConfig.titleTemplate,
        description: AppConfig.description,
        image: AppConfig.image,
        siteLanguage: AppConfig.siteLanguage,
        author: AppConfig.author,
        mainUrl: AppConfig.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? AppConfig.localUrl
                : `${AppConfig.siteUrl}${AppConfig.pathPrefix}`,
        canonical: AppConfig.canonical,
        twitterUsername: AppConfig.twitterUsername,
        keywords: AppConfig.keywords,
    },
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: AppConfig.title,
                short_name: AppConfig.shortName,
                theme_color: AppConfig.themeColor,
                background_color: AppConfig.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: AppConfig.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
    ],
};

export default config;
