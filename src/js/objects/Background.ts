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
		
    }
      
}