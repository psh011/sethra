import ControllableGameObject from "../abstract/ControllableGameObject";
import ShipRenderer from "./renderer/ShipRenderer";


/**
 * Possible ship components:
 * 	Autocannon
 * 	Laser Guided 
 */
export default class Ship extends ControllableGameObject {
	protected heading: string = "left";

	constructor() {
		super();
	}

	public setXSpeed(xSpeed: number): void {
		console.log("setXSpeed", xSpeed);
		super.setXSpeed(xSpeed);
		if (xSpeed > 0) {
			this.heading = "right";
		} else if (xSpeed < 0) {
			this.heading = "left";
		}
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		// console.log("draw @ X, Y", x, y);
		// console.log("pos @ X, Y", this.x, this.y);
		if (this.heading === "right") {
			ShipRenderer.renderHeadingRight(ctx, x, y);
		} else {
			ShipRenderer.renderHeadingLeft(ctx, x, y);
		}
	}

	public getWidth(): number {
		return 80;
	}

	public getHeight(): number {
		return 40;
	}

    public move(): void {
		console.log('coordinates', this.x, this.y, this.xSpeed, this.ySpeed)
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.keyDown["w"]) {
			this.setYSpeed(-7);
		} else if (this.keyDown["s"]) {
			this.setYSpeed(7);
		} else {
			this.setYSpeed(0);
		}

		if (this.keyDown["a"]) {
			this.setXSpeed(-7);
		} else if (this.keyDown["d"]) {
			this.setXSpeed(7);
		} else {
			this.setXSpeed(0);
		}
    }
	

}