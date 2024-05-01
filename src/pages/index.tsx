import * as React from "react";

import Layout from "@components/layout";
import SEO from "@components/ui/seo";
import Hero from "@components/containers/home/hero";
import BlogArea from "@components/containers/home/blog";
// import ServiceArea from "@containers/home/services";
// import AboutArea from "@containers/home/about";
// import CausesArea from "@containers/home/causes";
// import DonateArea from "../containers/home/donate";
// import FunfactArea from "../containers/home/funfact";
// import EventArea from "../containers/home/events";
// import TestimonialArea from "../containers/home/testimonial";
// import LatestBlog from "../containers/home/blog";
// import SponsorsArea from "../containers/home/sponsors";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <BlogArea />
            {/* 
            <ServiceArea />
            <AboutArea />
            <CausesArea />
            <DonateArea />
            <FunfactArea />
            <TestimonialArea />
            <LatestBlog />
            <SponsorsArea /> */}
        </Layout>
    );
};

export default IndexPage;
