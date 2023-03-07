import React from "react";
import { ErroaSection } from "./style";
import Button from "../../components/ui/button";

const ErrorArea = () => {
    return (
        <ErroaSection>
            <h1>404: Not Found</h1>
            <h5>OPPS! PAGE NOT BE FOUND</h5>
            <p>
                Sorry but the page you are looking for does not exist, have been
                removed, name changed or is temporarity unavailable.
            </p>
            <Button path="/" color="gradient">
                Back to home page
            </Button>
        </ErroaSection>
    );
};

export default ErrorArea;
