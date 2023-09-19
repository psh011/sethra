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

		ctx.fillStyle = "rgb(100,100,100)";
		ctx.fillRect(x, y-10, 10, 10);
		ctx.fillRect(x, y-20, 10, 10);
		ctx.fillRect(x+10, y-30, 10, 10);
		ctx.fillRect(x+20, y-40, 10, 10);
		ctx.fillRect(x+20, y-50, 10, 10);
		ctx.fillRect(x+20, y-60, 10, 10);
		ctx.fillRect(x+20, y-70, 10, 10);
		ctx.fillRect(x+20, y-80, 10, 10);
		ctx.fillRect(x+10, y-80, 10, 10);
		ctx.fillStyle = "rgb(189, 187, 187)";
		ctx.fillRect(x+10, y-10, 10, 10);
		ctx.fillRect(x+20, y-10, 10, 10);
		ctx.fillRect(x+40, y-30, 10, 10);
		ctx.fillRect(x+30, y-40, 10, 10);
		ctx.fillRect(x+30, y-50, 10, 10);
		ctx.fillRect(x+30, y-60, 10, 10);
		ctx.fillRect(x+30, y-70, 10, 10);
		ctx.fillRect(x+30, y-80, 10, 10);
		ctx.fillRect(x+30, y-90, 10, 10);
		ctx.fillRect(x+40, y-100, 10, 10);
		ctx.fillStyle = "rgb(156, 156, 156)";
		ctx.fillRect(x+40, y, 10, 10);
		ctx.fillRect(x+50, y, 10, 10);
		ctx.fillRect(x+50, y+10, 10, 10);
		ctx.fillRect(x+60, y, 10, 10);
		ctx.fillRect(x+60, y-10, 10, 10);
		ctx.fillStyle = "rgb(128, 128, 128)";
		ctx.fillRect(x+10, y-20, 10, 10);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(x+20, y-20, 10, 10);
		ctx.fillRect(x+20, y-30, 10, 10);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(x+30, y-20, 10, 10);
		ctx.fillRect(x+30, y-30, 10, 10);
		ctx.fillStyle = "rgb(128, 128, 128)";
		ctx.fillRect(x+40, y-20, 10, 10);

	}

	public getWidth(): number {
		throw new Error("Method not implemented.");
	}

	public getHeight(): number {
		throw new Error("Method not implemented.");
	}
}