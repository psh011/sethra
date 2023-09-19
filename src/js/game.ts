/*import Template from "../assets/images/template.png"*/
import Ship from "./objects/ship"
import TestLevel from "./levels/TestLevel"
import Level from "./abstract/Level"

export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private ship: Ship;
	private level: Level;

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
		this.ship = new Ship();

		this.level = new TestLevel();
		this.level.loadLevel(this.ship);
	}

	public render(): void {
		// Clear the screen
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// Move level objects
		this.level.move();

		// Draw level objects
		this.level.draw(this.ctx, 0, 0);
	}

}