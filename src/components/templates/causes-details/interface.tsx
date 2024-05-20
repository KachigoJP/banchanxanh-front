import { CauseItemData } from "@utils/interface";

export interface CausesDetailProps {
    data: {
        causesJson: CauseItemData;
    };
    location: Location;
    pageContext: any;
}
