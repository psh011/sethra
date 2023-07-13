/*import Template from "../assets/images/template.png"*/
export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
		const ctx = this.canvas.getContext("2d");
        console.log(ctx);
	}

	public render(): void {
        console.log('rendering');
        this.draw();
	}

	public draw(): void {

		/*const img = new Image()
		img.src = Template
		img.onload = () => {
			console.log("test")
		    this.ctx.drawImage(img, 0, 0)
		}*/
        if (this.canvas.getContext) {
          const ctx = this.canvas.getContext("2d");
         
          ctx.fillStyle = "rgb(200, 200, 200)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
          ctx.fillRect(30, 30, 50, 50);

          ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
          ctx.arc(300, 300, 50, 0, Math.PI * 2, true);
          ctx.fill();

        } else{
			console.log("test");
		}
    }
      
}