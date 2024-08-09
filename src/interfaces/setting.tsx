import { ImageDataLike } from "gatsby-plugin-image";

export interface ISetting {
    id: string;
    key: string;
    value: string;
    type: string;
    image: ImageDataLike | null;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    provider: string;
}
