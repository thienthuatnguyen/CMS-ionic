import { Expose } from "class-transformer";

export interface SegmentIf {
    id: string;
    parent: SegmentIf;
    name: string;
    getType(): string;
}

export class Segment implements SegmentIf {
    id: string;
    parent: SegmentIf;

    @Expose({ name: "segmentName" })
    name: string;

    getType(): string {
        throw new Error("Method not implemented.");
    }
}