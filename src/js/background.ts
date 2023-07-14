import Template from "../assets/images/template.png"
export default class Background {
	private ctx: CanvasRenderingContext2D;
	private y: number;
	private x: number;
	private image: any = new Image();
	private doneLoading: boolean = false;

	constructor() {
		this.image.src = Template;
		this.image.onload = () => {
			console.log("test")
			this.doneLoading = true;
		}
	}


	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
	

	    	if (this.doneLoading) ctx.drawImage(this.image, 0, 0)
		
    }
      
}