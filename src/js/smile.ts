/*import Template from "../assets/images/template.png"*/
export default class Smile {
	private ctx: CanvasRenderingContext2D;
	private y: number;
	private x: number;

	constructor() {
	}


	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {

          ctx.fillStyle = "rgb(200, 200, 0)";
          ctx.beginPath();
    	  ctx.arc(x, y, 50, 0, Math.PI * 2, true); //face
    	  ctx.fill();
          ctx.moveTo(x + 35, y);
    	  ctx.arc(x, y, 35, 0, Math.PI, false); //mouth
    	  ctx.moveTo(x - 10, y - 10);
    	  ctx.arc(x - 15, y - 10, 5, 0, Math.PI * 2, true); //left eye
    	  ctx.moveTo(x + 20, y - 10);
    	  ctx.arc(x + 15, y - 10, 5, 0, Math.PI * 2, true); //right eye
    	  ctx.fill();
    	  ctx.stroke();
    	  
    }
      
}