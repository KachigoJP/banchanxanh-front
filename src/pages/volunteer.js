import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import SponsorsArea from "../containers/home/sponsors";
import TestimonialArea from "../containers/home/testimonial";
import FunfactArea from "../containers/home/funfact";
import PageBreadcrumb from "../components/pagebreadcrumb";
import TeamArea from "../containers/volunteer/team";
import JoinApplyArea from "../containers/volunteer/apply";

const CausesPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Volunteer" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Volunteer"
            />
            <JoinApplyArea />
            <TeamArea />
            <FunfactArea />
            <TestimonialArea />
            <SponsorsArea />
        </Layout>
    );
};

CausesPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default CausesPages;
