import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import SponsorsArea from "../containers/home/sponsors";
import TestimonialArea from "../containers/home/testimonial";
import FunfactArea from "../containers/home/funfact";
import AboutPageArea from "../containers/about-us/about";
import PageBreadcrumb from "../components/pagebreadcrumb";
import VolunteerArea from "../containers/about-us/volunteer";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About us" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutPageArea />
            <VolunteerArea />
            <FunfactArea />
            <TestimonialArea />
            <SponsorsArea />
        </Layout>
    );
};

AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;
