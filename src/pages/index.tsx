import * as React from "react";

import Layout from "@/layouts";
import SEO from "@/components/seo";
import Hero from "@/containers/home/hero";
// import ServiceArea from "@containers/home/services";
// import AboutArea from "@containers/home/about";
// import CausesArea from "@containers/home/causes";
// import DonateArea from "../containers/home/donate";
// import FunfactArea from "../containers/home/funfact";
// import EventArea from "../containers/home/events";
// import TestimonialArea from "../containers/home/testimonial";
// import LatestBlog from "../containers/home/blog";
// import SponsorsArea from "../containers/home/sponsors";

// Data
import HeroData from "@/data/hero/hero.json";

const IndexPage = (props: any) => {
  return (
    <Layout>
      <SEO title="Home" pathname="/" siteMetadata={props.siteMetadata} />
      <Hero data={props.hero} />
      {/* <ServiceArea />
            <AboutArea />
            <CausesArea />
            <DonateArea />
            <FunfactArea />
            <EventArea />
            <TestimonialArea />
            <LatestBlog />
            <SponsorsArea /> */}
    </Layout>
  );
};

export async function getStaticProps() {
  console.log("WNY NOT HERER");
  return {
    props: {
      siteMetadata: {
        siteUrl: "",
        mainUrl: "",
      },
      hero: HeroData,
    },
  };
}

export default IndexPage;
