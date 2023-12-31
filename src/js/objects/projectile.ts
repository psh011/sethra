import GameObject from "../abstract/GameObject";
export default class Projectile extends GameObject {
	constructor() {
		super();
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		ctx.fillStyle = "rgb(120, 232, 109)";
		ctx.fillRect(x, y, 10, 10);
		ctx.fillStyle = "rgb(64, 128, 57)";
		ctx.fillRect(x+10, y, 10, 10);
	}

	public getWidth(): number {
		throw new Error("Method not implemented.");
	}
	
	public getHeight(): number {
		throw new Error("Method not implemented.");
	}

}