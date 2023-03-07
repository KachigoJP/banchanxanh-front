import PropTypes from "prop-types";
import theme from "@/themes";
import { ThemeProvider } from "@/themes/utils";
import { GlobalCSS } from "@/assets/css/style";
import "@assets/css/fonts.css";
import "@assets/css/icofont.css";
import "@assets/css/bootstrap.css";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <GlobalCSS />
        <Header />
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
