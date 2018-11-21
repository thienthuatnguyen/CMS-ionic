import { MarkArea } from "./mark.area.model";
import { Expose } from "class-transformer";
import { AxisPosition } from "../position.model";

export class Mark {

    id: string;
    position: AxisPosition;

    @Expose({ name: "damageTypeEnum" })
    damageType: string;

    area: MarkArea;
    /**
     * 
     * @param area 
     * calculate display-position based on position and @area
     */
    getDisplayPosition(area: MarkArea) {
        // TODO
        return new AxisPosition();
    }
    /**
     * 
     * @param displayPosition 
     * @param area 
     * Update position based on @displayPosition and @are
     */
    updatePosition(displayPosition: AxisPosition, area: MarkArea): AxisPosition {
        // TODO
        let updatedPos = new AxisPosition();
        this.position = updatedPos;
        return this.position;
    }
}

export class DamageTypeEnum {
    static Check = 'Check';
}