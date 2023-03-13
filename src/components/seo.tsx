import { Helmet } from "react-helmet";

type ImageType = {
  src: string;
  width: string;
  height: string;
};
type SEOType = {
  pathname: string;
  description?: string;
  lang?: string;
  title?: string;
  titleTemplate?: string;
  image?: ImageType;
  canonical?: string;
  nextPage?: string;
  prevPage?: string;
  rootPath?: string;
  isBlogPost?: boolean;
  siteMetadata?: any;
};

const SEO = (props: SEOType) => {
  console.log("PROPSSS:", props);
  let pageUrl;
  const path = props.pathname.replace(/^\/|\/$/g, "");
  const metaTitle = props.title || props.siteMetadata.title;
  const template = props.titleTemplate || props.siteMetadata.titleTemplate;
  const metaDescription = props.description || props.siteMetadata.description;
  const language = props.lang || props.siteMetadata.siteLanguage;
  const siteUrl = props.siteMetadata.siteUrl.replace(/\/$/, "");
  const mainUrl = props.siteMetadata.mainUrl.replace(/\/$/, "");
  const bannerImage =
    props.image && props.image.src
      ? `${mainUrl}${props.image.src}`
      : `${siteUrl}/${props.siteMetadata.image}`;
  let canonicalLink;
  if (props.canonical) {
    canonicalLink = `${mainUrl}${props.canonical}`;
  } else {
    canonicalLink = props.siteMetadata.canonical;
  }
  const imgWidth = props.image?.width ? props.image.width : 875;
  const imgHeight = props.image?.height ? props.image.height : 554;
  pageUrl = `${siteUrl}/${path}`;
  pageUrl = pageUrl.replace(/^\/+/g, "");
  const rootUrl = siteUrl + props.rootPath;
  const prevLink =
    props.prevPage && props.prevPage !== null && rootUrl + props.prevPage;
  const nextLink =
    props.nextPage && props.nextPage !== null && rootUrl + props.nextPage;
  let siteTitle;
  if (props.pathname === "/") {
    siteTitle = `${props.siteMetadata.titleTemplate} By ${props.siteMetadata.title}`;
  } else {
    siteTitle = `${template} By ${metaTitle}`;
  }

  const basSchema = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: `${siteTitle}`,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: props.siteMetadata.logo,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${siteTitle}`,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: language,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@graph": [...basSchema],
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
    >
      {/* General tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={bannerImage} />
      <link rel="canonical" href={canonicalLink} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      {prevLink && <link rel="prev" href={prevLink} />}
      {nextLink && <link rel="next" href={nextLink} />}

      {/* OpenGraph tags */}
      <meta property="og:locale" content={language} />
      {props.isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={bannerImage} />
      <meta property="og:image:secure_url" content={bannerImage} />
      <meta property="og:image:width" content={`${imgWidth}px`} />
      <meta property="og:image:height" content={`${imgHeight}px`} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={props.siteMetadata.twitterUsername}
      />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={bannerImage} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  pathname: "/",
};

export default SEO;
