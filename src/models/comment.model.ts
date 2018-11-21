import { Picture } from "./picture.model";

export class Comment {
    id: string;
    text: string;
    pictures: Array<Picture>;
}