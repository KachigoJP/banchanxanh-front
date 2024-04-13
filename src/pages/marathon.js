import theme from "@theme";
import { ThemeProvider } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/fonts.css";
import "@assets/css/icofont.css";
import "@assets/css/bootstrap.css";
import "@lang";
import EventMarathon from "../containers/event-marathon";

const Checkin = ({}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <GlobalCSS />
                <EventMarathon />
            </div>
        </ThemeProvider>
    );
};

export default Checkin;
