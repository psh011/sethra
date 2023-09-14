import GameModel from '../model/Game.model';
import MenuView from '../view/Menu.view';
import PlanetView from '../view/Planet.view';
import ShipView from '../view/Ship.view';

export default class Game {
	private menuView: MenuView = new MenuView();
	private planetView: PlanetView = new PlanetView();
	private shipView: ShipView = new ShipView();

	public render(gameModel: GameModel): void {
		// Clear the screen
		gameModel.getContext().clearRect(0, 0, gameModel.getCanvas().width, gameModel.getCanvas().height);

		const shipModel = gameModel.getShipModel();
		const shipCenterX = shipModel.getX() + (shipModel.getWidth() / 2);
		const shipCenterY = shipModel.getY() + (shipModel.getHeight() / 2);
		
		const gameLeftX = shipCenterX - (gameModel.getWidth() / 2); 
		const gameRightX = shipCenterX + (gameModel.getWidth() / 2); 
		const gameBottomY = shipCenterY - (gameModel.getHeight() / 2); 
		const gameTopY = shipCenterY + (gameModel.getHeight() / 2);
		
		if (gameModel.isPaused()) {
			this.menuView.render(gameModel);
		} else {
			this.planetView.render(gameModel.getContext(), gameLeftX, gameRightX, gameBottomY, gameTopY, gameModel.getPlanetModel());
		}

		this.shipView.draw(gameModel.getContext(), gameLeftX, gameRightX, gameBottomY, gameTopY, gameModel.getShipModel());

		if (gameModel.isDebugMode()) {
			this.shipView.debug(gameModel.getContext(), 80, 0, 20, 0, gameModel.getShipModel());
		}
	}


}