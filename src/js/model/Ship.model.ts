import GameObject from "../model/GameObject.model";


/**
 * Possible ship components:
 * 	Autocannon
 * 	Laser Guided 
 */
export default class Ship extends GameObject {
	protected heading: string = "left";

	constructor() {
		super();
	}

	public setXSpeed(xSpeed: number): void {
		super.setXSpeed(xSpeed);
		if (xSpeed > 0) {
			this.heading = "right";
		} else if (xSpeed < 0) {
			this.heading = "left";
		}
	}

	public getHeading(): string {
		return this.heading;
	}

	public getWidth(): number {
		return 80;
	}

	public getHeight(): number {
		return 40;
	}
	

}