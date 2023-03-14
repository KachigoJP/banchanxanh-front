import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import ContactUsArea from "../containers/contact-us/contact-us-area";

const ContactPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Contact Pages" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Contact Us"
            />
            <ContactUsArea />
        </Layout>
    );
};

ContactPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default ContactPages;
