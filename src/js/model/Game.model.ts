import PlanetModel from './Planet.model';
import ShipModel from './Ship.model';

export default class Game {
	private debug: boolean = true;

	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private height: number;
	private width: number;
	private paused: boolean = false;
	private shipModel: ShipModel;
	private planet: PlanetModel;

	constructor(window: Window, canvas: HTMLCanvasElement) {
		this.canvas = canvas;

		// Dynamic size based on screen size
		this.canvas.width = this.width = window.innerWidth; 
		this.canvas.height = this.height = window.innerHeight; 

		// Static size based on fixed values
		// this.canvas.width = this.width = 1000 
		// this.canvas.height = this.height = 750; 

		this.context = this.canvas.getContext("2d");

		this.shipModel = new ShipModel();
	}

	public getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}

	public getContext(): CanvasRenderingContext2D {
		return this.context;
	}

	public getWidth(): number {
		return this.width;
	}

	public getHeight(): number {
		return this.height;
	}

	public isDebugMode(): boolean {
		return this.debug;
	}

	public isPaused(): boolean {
		if ( !this.shipModel ) {
			return true;
		}
		return this.paused;
	}

	public togglePaused(paused: boolean = !this.paused): void {
		this.paused = paused;
	}

	public getShipModel(): ShipModel {
		return this.shipModel;
	}

	public setPlanetModel(planet: PlanetModel): void {
		this.planet = planet;
	}

	public getPlanetModel(): PlanetModel {
		return this.planet;
	}

	private static _instance: Game;
	public static instance(window?: Window, canvas?: HTMLCanvasElement): Game {
		if (!Game._instance) {
			if (window && canvas) {
				Game._instance = new Game(window, canvas);
			} else {
				throw new Error('Must have both window and canvas defined when creating the Game singleton.');
			}
		}

		return Game._instance;
	}
}