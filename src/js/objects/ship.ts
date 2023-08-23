import GameObject from "../abstract/GameObject";
export default class Ship extends GameObject{
	private ctx: CanvasRenderingContext2D;
	private y: number;
	private x: number;
	private speedX: number;
	private heading: string = "left";

	constructor() {
		super();
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		//TODO draw the ship again in reverse
		
	if (this.heading === "right") {
			ctx.fillStyle = "rgb(300, 175, 0)";
			ctx.fillRect(x + 60, y + 10, 10, 10);
			ctx.fillRect(x + 70, y + 20, 10, 10);
			ctx.fillStyle = "rgb(300, 75, 0)";
			ctx.fillRect(x + 50, y + 20, 10, 10);
			ctx.fillStyle = "rgb(300, 150, 0)";
			ctx.fillRect(x + 50, y + 10, 10, 10);
			ctx.fillRect(x + 60, y + 20, 10, 10);
			ctx.fillStyle = "rgb(177, 179, 175)";
			ctx.fillRect(x + 80, y + 30, 10, 10);
			ctx.fillRect(x + 40, y + 10, 10, 10);
			ctx.fillRect(x + 10, y + 30, 10, 10);
			ctx.fillRect(x, y + 20, 10, 10);
			ctx.fillStyle = "rgb(160, 160, 160)";
			ctx.fillRect(x + 70, y + 30, 10, 10);
			ctx.fillRect(x + 60, y + 30, 10, 10);
			ctx.fillRect(x + 20, y + 30, 10, 10);
			ctx.fillRect(x + 40, y + 20, 10, 10);
			ctx.fillStyle = "rgb(145, 145, 145)";
			ctx.fillRect(x, y, 10, 10);
			ctx.fillRect(x + 40, y + 30, 10, 10);
			ctx.fillRect(x + 20, y + 10, 10, 10);
			ctx.fillRect(x + 10, y + 10, 10, 10);
			ctx.fillRect(x + 30, y + 30, 10, 10);
			ctx.fillStyle = "rgb(150, 150, 150)";
			ctx.fillRect(x + 50, y + 30, 10, 10);
			ctx.fillRect(x, y + 10, 10, 10);
			ctx.fillRect(x + 30, y + 10, 10, 10);
			ctx.fillRect(x + 10, y + 20, 10, 10);
			ctx.fillStyle = "rgb(110, 110, 110)";
			ctx.fillRect(x + 20, y + 20, 10, 10);
			ctx.fillStyle = "rgb(120, 120, 120)";
			ctx.fillRect(x + 30, y + 20, 10, 10);
		} else {


			ctx.fillStyle = "rgb(300, 175, 0)";
			ctx.fillRect(x + 20, y + 10, 10, 10);
			ctx.fillRect(x + 10, y + 20, 10, 10);
			ctx.fillStyle = "rgb(300, 75, 0)";
			ctx.fillRect(x + 30, y + 20, 10, 10);
			ctx.fillStyle = "rgb(300, 150, 0)";
			ctx.fillRect(x + 30, y + 10, 10, 10);
			ctx.fillRect(x + 20, y + 20, 10, 10);
			ctx.fillStyle = "rgb(177, 179, 175)";
			ctx.fillRect(x, y + 30, 10, 10);
			ctx.fillRect(x + 40, y + 10, 10, 10);
			ctx.fillRect(x + 70, y + 30, 10, 10);
			ctx.fillRect(x + 80, y + 20, 10, 10);
			ctx.fillStyle = "rgb(160, 160, 160)";
			ctx.fillRect(x + 10, y + 30, 10, 10);
			ctx.fillRect(x + 20, y + 30, 10, 10);
			ctx.fillRect(x + 60, y + 30, 10, 10);
			ctx.fillRect(x + 40, y + 20, 10, 10);
			ctx.fillStyle = "rgb(145, 145, 145)";
			ctx.fillRect(x + 80, y, 10, 10);
			ctx.fillRect(x + 40, y + 30, 10, 10);
			ctx.fillRect(x + 60, y + 10, 10, 10);
			ctx.fillRect(x + 70, y + 10, 10, 10);
			ctx.fillRect(x + 50, y + 30, 10, 10);
			ctx.fillStyle = "rgb(150, 150, 150)";
			ctx.fillRect(x + 30, y + 30, 10, 10);
			ctx.fillRect(x + 80, y + 10, 10, 10);
			ctx.fillRect(x + 50, y + 10, 10, 10);
			ctx.fillRect(x + 70, y + 20, 10, 10);
			ctx.fillStyle = "rgb(110, 110, 110)";
			ctx.fillRect(x + 60, y + 20, 10, 10);
			ctx.fillStyle = "rgb(120, 120, 120)";
			ctx.fillRect(x + 50, y + 20, 10, 10);
		}
	}

	public getWidth(): number {
		return 80;
	}

	public getHeight(): number {
		return 40;
	}

	public setSpeedX(speedX: number): void {
		this.speedX = speedX;
		if(speedX>0){
			this.heading = "right";
		} else if(speedX<0){
			this.heading = "left";
		}
		
		
	}
}