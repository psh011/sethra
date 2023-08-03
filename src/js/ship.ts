export default class Ship {
	private ctx: CanvasRenderingContext2D;
	private y: number;
	private x: number;

	constructor() {
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {

		ctx.fillStyle = "rgb(300, 175, 0)";
		ctx.fillRect(x + 20, y + 10, 10, 10);
		ctx.fillRect(x + 10, y+20, 10, 10);
		ctx.fillStyle = "rgb(300, 75, 0)";
		ctx.fillRect(x+30, y+20, 10, 10);
		ctx.fillStyle = "rgb(300, 150, 0)";
		ctx.fillRect(60, 40, 10, 10);
		ctx.fillRect(50, 50, 10, 10);
		ctx.fillStyle = "rgb(177, 179, 175)";
		ctx.fillRect(30, 60, 10, 10);
		ctx.fillRect(70, 40, 10, 10);
		ctx.fillRect(100, 60, 10, 10);
		ctx.fillRect(110, 50, 10, 10);
		ctx.fillStyle = "rgb(160, 160, 160)";
		ctx.fillRect(40, 60, 10, 10);
		ctx.fillRect(50, 60, 10, 10);
		ctx.fillRect(90, 60, 10, 10);
		ctx.fillRect(70, 50, 10, 10);
		ctx.fillStyle = "rgb(145, 145, 145)";
		ctx.fillRect(110, 30, 10, 10);
		ctx.fillRect(70, 60, 10, 10);
		ctx.fillRect(90, 40, 10, 10);
		ctx.fillRect(100, 40, 10, 10);
		ctx.fillRect(80, 60, 10, 10);
		ctx.fillStyle = "rgb(150, 150, 150)";
		ctx.fillRect(60, 60, 10, 10);
		ctx.fillRect(110, 40, 10, 10);
		ctx.fillRect(80, 40, 10, 10);
		ctx.fillRect(100, 50, 10, 10);
		ctx.fillStyle = "rgb(110, 110, 110)";
		ctx.fillRect(90, 50, 10, 10);
		ctx.fillStyle = "rgb(120, 120, 120)";
		ctx.fillRect(80, 50, 10, 10);
	}

	public getWidth(): number {
		return 80;
	}

	public getHeight(): number {
		return 40;
	}

}