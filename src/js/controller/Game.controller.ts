import GameModel from '../model/Game.model';
import KeyboardModel from '../model/Keyboard.model';
import PlanetModel from '../model/Planet.model';
import GameView from '../view/Game.view';
import GameObjectController from '../controller/GameObject.controller';
import PlanetController from '../controller/Planet.controller';
import ShipController from '../controller/Ship.controller';

export default class Game {
	private gameModel: GameModel;
	private gameView: GameView;

	private gameObjectController: GameObjectController;
	private planetController: PlanetController;
	private shipController: ShipController;

	constructor(window?: Window, canvas?: HTMLCanvasElement) {
		this.gameModel = GameModel.instance(window, canvas);
		this.gameView = new GameView();

		this.gameObjectController = new GameObjectController();
		this.planetController = new PlanetController();
		this.shipController = new ShipController(this.gameModel.getShipModel());

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
			
			// TODO move other objects
	
			this.planetController.getPlanetModel().getGameObjects().forEach(gameObject => {
				this.gameObjectController.move(this.planetController.getPlanetModel().getWidth(), gameObject);
				this.planetController.getPlanetModel().getGameObjects().forEach(gameObject2 => {
					// console.log("check 2 object collision");
					if ( this.gameObjectController.checkCollision(gameObject, gameObject2) ) {
						// console.log("2 object collision")
					}
				});
	
				// console.log("check ship collision");
				if ( this.gameObjectController.checkCollision(gameObject, this.shipController.getShipModel()) ) {
					console.log("ship collision !!!!!!!!!!!!!!!!!!!!!!!!!");
				}
			});
		}


		this.gameView.render(this.gameModel);
	}

}