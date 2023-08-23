/*import Template from "../assets/images/template.png"*/
import Debug from "./objects/Debug"
import Ship from "./objects/ship"
import Background from "./objects/Background"
import Building from "./objects/Building"
import Projectile from "./objects/projectile"
import GameObject from "./abstract/GameObject"

export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private background: Background;
	private debug: Debug;
	private ship: Ship;
	private shipX: number;
	private shipY: number;
	private playerSpeedX: number = 0;
	private playerSpeedY: number = 0;
	private keyHeldW: boolean = false;
	private keyHeldA: boolean = false;
	private keyHeldS: boolean = false;
	private keyHeldD: boolean = false;
	private projectile: Projectile;
	private building: Building;
	gameObjects: any

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
		this.background = new Background();
		this.ship = new Ship();
		this.shipX = 75;
		this.shipY = 75;
		this.projectile = new Projectile();
		this.building = new Building();
		this.debug = new Debug();

		/* NOTE document.addEventListener was creating a separate scope for this.keyPressed 
			and this.keyReleased to run within.  This meant that that this.keyHeldW was not 
			being read from our Game instance, but some other instance we did not expect.
			Calling this.keyPressed and this.keyReleased with a function like this fixes
			the scope issue and now we have movement!
		*/
		document.addEventListener('keydown', (evt) => this.keyPressed(evt));
		document.addEventListener('keyup', (evt) => this.keyReleased(evt));

	}

	public render(): void {
		// console.log('rendering');
		this.playerMove();
		/*for(var gameObject of this.gameObjects) {

		}*/
		this.background.draw(this.ctx, 0, 0);
		this.debug.draw(this.ctx, 10, 10);
		this.draw();
	}
	public draw(): void {

		if (this.canvas.getContext) {
			//this.smile.draw(this.ctx, this.smileX, this.smileY);
			this.ship.draw(this.ctx, this.shipX, this.shipY);
			//this.projectile.draw(this.ctx, 100, 100);
			this.building.draw(this.ctx, 100, 100);

		} else {
			console.log("test");
		}
	}

	private keyPressed(evt: KeyboardEvent): void {
		console.log("Key pressed: " + evt.key);
		if (evt.key == 'a') {
			this.keyHeldA = true;
		}
		if (evt.key == 'd') {
			this.keyHeldD = true;
		}
		if (evt.key == 'w') {
			this.keyHeldW = true;
		}
		if (evt.key == 's') {
			this.keyHeldS = true;
		}

		evt.preventDefault();
	}

	private keyReleased(evt: KeyboardEvent): void {
		console.log("Key released: " + evt.key);
		if (evt.key == 'a') {
			this.keyHeldA = false;
			this.playerSpeedX = 0;
		}
		if (evt.key == 'd') {
			this.keyHeldD = false;
			this.playerSpeedX = 0;
		}
		if (evt.key == 'w') {
			this.keyHeldW = false;
			this.playerSpeedY = 0;
		}
		if (evt.key == 's') {
			this.keyHeldS = false;
			this.playerSpeedY = 0;
		}
	}
	private playerMove(): void {
		this.shipX += this.playerSpeedX;
		this.shipY += this.playerSpeedY;
		// console.log('cordinates', this.shipX, this.shipY, this.keyHeldW, this.playerSpeedY)
		if (this.keyHeldW) {
			this.playerSpeedY = -7;
		}
		if (this.keyHeldS) {
			this.playerSpeedY = 7;
		}
		if (this.keyHeldA) {
			this.playerSpeedX = -7;
		}
		if (this.keyHeldD) {
			this.playerSpeedX = 7;
		}
		
		this.ship.setSpeedX(this.playerSpeedX);
		if (this.shipY <= 0) { // player wrapping top to bottom
			this.shipY = this.background.getHeight() - this.ship.getHeight() + 2;
		} else if (this.shipY >= this.background.getHeight() - this.ship.getHeight()) { // player wrapping top to bottom
			this.shipY = 2;
		}

		if (this.shipX >= this.background.getWidth() - this.ship.getWidth()) { // player wrapping top to bottom
			this.shipX = 2;
		} else if (this.shipX <= 0) { // player wrapping top to bottom
			this.shipX = this.background.getWidth() - this.ship.getWidth() + 2;
		}

		this.debug.setDebugContext(this.keyHeldW, this.keyHeldA, this.keyHeldS, this.keyHeldD, this.playerSpeedX, this.playerSpeedY);
	}

}