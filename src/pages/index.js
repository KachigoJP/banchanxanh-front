import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
import AboutArea from "@containers/home/about";
import CausesArea from "@containers/home/causes";
import DonateArea from "../containers/home/donate";
import FunfactArea from "../containers/home/funfact";
import EventArea from "../containers/home/events";
import TestimonialArea from "../containers/home/testimonial";
import LatestBlog from "../containers/home/blog";
import SponsorsArea from "../containers/home/sponsors";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <ServiceArea />
            <AboutArea />
            <CausesArea />
            <DonateArea />
            <FunfactArea />
            <EventArea />
            <TestimonialArea />
            <LatestBlog />
            <SponsorsArea />
        </Layout>
    );
};

export default IndexPage;
