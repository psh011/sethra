import GameObject from "../abstract/GameObject";
import Template from "../../assets/images/template.png"

export default class Background extends GameObject {
	private y: number;
	private x: number;
	private width: number = 0;
	private height: number = 0;
	private image: any = new Image();
	private doneLoading: boolean = false;

	constructor() {
		super();
		this.image.src = Template;
		this.image.onload = (event: any) => {
			console.log("Background Loaded");
			this.doneLoading = true;
			const loadedImage = event.currentTarget;
			this.width = loadedImage.width;
			this.height = loadedImage.height;
		}
	}

	public getWidth(): number {
		return this.width;
	}

	public getHeight(): number {
		return this.height;
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
	

	    	if (this.doneLoading) ctx.drawImage(this.image, 0, 0)
		this.drawLeftWall(ctx,0,0)
		this.drawRightWall(ctx,1130,0)
		this.drawFLoor(ctx,0,550)
    }
	drawFLoor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = "rgb(78, 204, 61)";
		ctx.fillRect (x, y, 1200, 20)
		ctx.fillStyle = "rgb(54, 156, 40)";
		ctx.fillRect (x, y+20, 1200, 10)
		ctx.fillStyle = "rgb(194, 164, 81)";
		ctx.fillRect (x, y+30, 1200, 20)
		ctx.fillStyle = "rgb(176, 151, 81)";
		ctx.fillRect (x, y+50, 1200, 20)
	}
	drawRightWall(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = "rgb(186, 186, 184)";
		ctx.fillRect (x, y, 20, 550)
		ctx.fillStyle = "rgb(156, 156, 154)";
		ctx.fillRect (x+20, y, 10, 550)
		ctx.fillStyle = "rgb(128, 128, 126)";
		ctx.fillRect (x+30, y, 20, 550)
		ctx.fillStyle = "rgb(92, 92, 91)";
		ctx.fillRect (x+50, y, 20, 550)
		}
	drawLeftWall(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = "rgb(186, 186, 184)";
		ctx.fillRect (x, y, 20, 550)
		ctx.fillStyle = "rgb(156, 156, 154)";
		ctx.fillRect (x+20, y, 10, 550)
		ctx.fillStyle = "rgb(128, 128, 126)";
		ctx.fillRect (x+30, y, 20, 550)
		ctx.fillStyle = "rgb(92, 92, 91)";
		ctx.fillRect (x+50, y, 20, 550)
		}
      
}