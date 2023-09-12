import GameModel from '../model/Game.model';
import KeyboardModel from '../model/Keyboard.model';
import PlanetModel from '../model/Planet.model';
import GameView from '../view/Game.view';
import PlanetController from '../controller/Planet.controller';
import ShipController from '../controller/Ship.controller';

export default class Game {
	private gameModel: GameModel;
	private gameView: GameView;

	private shipController: ShipController;
	private planetController: PlanetController;

	constructor(window?: Window, canvas?: HTMLCanvasElement) {
		this.gameModel = GameModel.instance(window, canvas);
		this.gameView = new GameView();

		this.shipController = new ShipController(this.gameModel.getShipModel());
		this.planetController = new PlanetController();

		this.loadNewPlanet();
	}

	public getGameModel(): GameModel {
		return this.gameModel;
	}

	public loadNewPlanet(size: number = 1): void {
		this.planetController.newPlanetModel();
		this.gameModel.setPlanetModel(this.planetController.getPlanetModel());
	}

	public loop(): void {

		if ( KeyboardModel.instance().getKeyDown('p') ) {
			// Enter Pause
			this.gameModel.togglePaused(true);
		} else if ( KeyboardModel.instance().getKeyDown('Escape') ) {
			// Exit Pause
			this.gameModel.togglePaused(false);
		}

		if ( !this.gameModel.isPaused() ) {
			this.shipController.move(KeyboardModel.instance(), this.gameModel.getPlanetModel().getWidth());
		}

		// TODO move other objects

		this.gameView.render(this.gameModel);
	}

}