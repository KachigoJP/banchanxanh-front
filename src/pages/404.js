import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import ErrorArea from "@containers/404-error";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" pathname="/" />
        <ErrorArea />
    </Layout>
);

export default NotFoundPage;
