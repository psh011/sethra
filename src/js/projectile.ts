export default class Projectile {
	private ctx: CanvasRenderingContext2D;
	private y: number;
	private x: number;

	constructor() {
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {

		ctx.fillStyle = "rgd(120, 232, 109)";
		ctx.fillRect (20, 20, 10, 10);
		ctx.fillStyle = "rgd(64, 128, 57)";
		ctx.fillRect (30, 20, 10, 10);


	}

}