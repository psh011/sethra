/*import Template from "../assets/images/template.png"*/
import Smile from "./smile"
import Background from "./background"
export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private smile: Smile;
	private smileX: number;
	private smileY: number;
	private background: Background;


	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
		this.smile = new Smile();
		this.smileX = 75;
		this.smileY = 75;
		this.background = new Background();

		const ctx = this.canvas.getContext("2d");
        console.log(ctx);
	}

	public render(): void {
        console.log('rendering');
        this.background.draw(this.ctx, 0, 0);
        this.draw();
        this.smileX += 1;
        this.smileY += 1;
        if (this.smileX > this.width) this.smileX = 75;
        if (this.smileY > this.height) this.smileY = 75;
	}

	public draw(): void {

        if (this.canvas.getContext) {
          this.smile.draw(this.ctx, this.smileX, this.smileY);
           	  
        } else{
			console.log("test");
		}
    }
      
}