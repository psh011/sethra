import Building from "../model/Building.model";


/**
 * Possible building components:
 * 	???
 */
export default class Tower extends Building {
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
		return 80;
	}

	public static CLASS_NAME: string = "Tower";
	
	public static generateTower(): Tower {
		const tower = new Tower();

        return tower;
    }

}