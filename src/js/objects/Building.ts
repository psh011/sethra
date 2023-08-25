//TODO copy class and make other image classes.
import GameObject from "../abstract/GameObject";

export default class Building extends GameObject {

	/*
	Possible properties:
	 Dynamic number of towers?
	 Health
	 Armor
	*/
	constructor() {
		super();
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {

		ctx.fillStyle = "rgb(222, 222, 222)";
		ctx.fillRect(40, 50, 10, 10);
		ctx.fillRect(40, 60, 10, 10);
		ctx.fillRect(40, 40, 10, 10);
		ctx.fillStyle = "rgb(189, 187, 187)";
		ctx.fillRect(50, 30, 10, 10);
		ctx.fillRect(50, 60, 10, 10);
		ctx.fillRect(50, 50, 10, 10);
		ctx.fillRect(50, 40, 10, 10);
		ctx.fillStyle = "rgb(156, 156, 156)";
		ctx.fillRect(60, 40, 10, 10);
		ctx.fillRect(60, 50, 10, 10);
		ctx.fillRect(60, 60, 10, 10);
		ctx.fillRect(60, 30, 10, 10);
		ctx.fillStyle = "rgb(128, 128, 128)";
		ctx.fillRect(70, 50, 10, 10);
		ctx.fillRect(70, 60, 10, 10);
		ctx.fillRect(70, 40, 10, 10);
		ctx.fillRect(70, 30, 10, 10);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(80, 50, 10, 10);
		ctx.fillRect(80, 60, 10, 10);
		ctx.fillRect(80, 40, 10, 10);

	}

	public getWidth(): number {
		throw new Error("Method not implemented.");
	}

	public getHeight(): number {
		throw new Error("Method not implemented.");
	}
}