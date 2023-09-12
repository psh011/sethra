import GameController from './controller/Game.controller';
import KeyboardController from './controller/Keyboard.controller';

export default class MVCApp {
	private gameController: GameController;
	private keyboardController: KeyboardController;

	constructor() {
	}

	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here
		this.gameController = new GameController(window, <HTMLCanvasElement>document.getElementById('canvas'));
		this.keyboardController = new KeyboardController();
		
		// Attach the keyboard
		this.keyboardController.attach();

		// Pause game on start
		this.gameController.getGameModel().togglePaused(true);

		// Run gameLoop to being running the game
		this.gameLoop();
	}

	private gameLoop(): void {
        // need to bind the current this reference to the callback
		requestAnimationFrame(this.gameLoop.bind(this)); 

		this.gameController.loop();

		if ( this.gameController.getGameModel().isDebugMode() ) {
			this.keyboardController.debug(this.gameController.getGameModel().getContext());
		}
	}
}
