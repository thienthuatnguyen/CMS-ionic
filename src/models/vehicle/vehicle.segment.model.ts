import { SegmentIf, Segment } from "./segment.model";

export class VehicleTypeSegment extends Segment {
    getType() {
        return 'Vehicle';
    }
}

export class ModelYearSegment extends Segment {
    parent: VehicleTypeSegment;
    getType() {
        return 'ModelYear';
    }
}

export class TrimSegment extends Segment {
    id: string;
    parent: ModelYearSegment;
    getType() {
        return 'Trim';
    }
}