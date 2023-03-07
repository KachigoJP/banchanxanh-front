/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "@components/ui/button";
import { DonateFormArea, DonateAmountInfo, DonateAmount } from "./style";

const DonateForm = () => {
    return (
        <DonateFormArea>
            <form action="#">
                <DonateAmountInfo>
                    <DonateAmount>$20</DonateAmount>
                    <DonateAmount>$50</DonateAmount>
                    <DonateAmount>$200</DonateAmount>
                    <DonateAmount
                        className="donate-custom-amount"
                        htmlFor="blogs_name"
                    >
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Custom"
                        />
                    </DonateAmount>
                </DonateAmountInfo>
                <div className="btn-wrp" sx={{ display: "flex", mb: "30px" }}>
                    <Button path="#!" color="gradient" sx={{ color: "#fff" }}>
                        Donate Now <i className="flaticon-right-arrow"></i>
                    </Button>
                    <Button
                        path="#!"
                        variant="outlined"
                        sx={{ ml: "10px", color: "#fff" }}
                    >
                        Join Events <i className="flaticon-right-arrow"></i>
                    </Button>
                </div>
            </form>
        </DonateFormArea>
    );
};

export default DonateForm;
