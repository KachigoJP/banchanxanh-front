import { EventItemData } from "@utils/interface";

export interface EventPostProps {
    data: {
        eventJson: EventItemData;
    };
    location: Location;
    pageContext: any;
}
