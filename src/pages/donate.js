import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import DonateArea from "../containers/donate";

const DonatePages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Donate" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Donate"
            />
            <DonateArea />
        </Layout>
    );
};

DonatePages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default DonatePages;
