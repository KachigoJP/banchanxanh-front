import { ThemeProvider } from "@emotion/react";
import theme from "@/themes";
import { GlobalCSS } from "@/assets/css/style";
// import Header from "./header";
// import Footer from "./footer";

const Layout = ({ ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <GlobalCSS />
        {/* <Header /> */}
        {props.children}
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
