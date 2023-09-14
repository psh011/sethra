import GameObject from "../model/GameObject.model";


/**
 * Possible building components:
 * 	???
 */
export default class Building extends GameObject {
	constructor() {
		super();
	}

	public getClassName(): string {
		return Building.CLASS_NAME;
	}

	public getWidth(): number {
		return 50;
	}

	public getHeight(): number {
		return 50;
	}

	public static CLASS_NAME: string = "Building";
	
	public static generateBuilding(): Building {
		const building = new Building();

        return building;
    }

}