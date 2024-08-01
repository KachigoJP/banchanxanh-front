import * as React from "react";

import Layout from "@components/layout";
import SEO from "@components/common/seo";
import Hero from "@components/containers/home/hero";
// import BlogArea from "@components/containers/home/blog";
import ServiceArea from "@components/containers/home/services";
import AboutArea from "@components/containers/home/about";
import CausesArea from "@components/containers/home/causes";
import DonateArea from "@components/containers/home/donate";
import FunfactArea from "@components/containers/home/funfact";
import EventArea from "@components/containers/home/events";
import TestimonialArea from "@components/containers/home/testimonial";
import LatestBlog from "@components/containers/home/blog";
import SponsorsArea from "@components/containers/home/sponsors";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />

            {/* <BlogArea /> */}
            <ServiceArea />

            <AboutArea />
            <CausesArea />
            <DonateArea />
            <FunfactArea />
            <TestimonialArea />
            <LatestBlog />
            <SponsorsArea />
        </Layout>
    );
};

export default IndexPage;
