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

		// Move level objects
		// this.level.move();

		// Draw level objects
		// this.level.draw(this.ctx, 0, 0);

		if (gameModel.isPaused()) {
			this.menuView.render(gameModel);
			this.drawShip(gameModel);
		} else {
			const shipModel = gameModel.getShipModel();
			const shipCenterX = shipModel.getX() + (shipModel.getWidth() / 2);
			const shipCenterY = shipModel.getY() + (shipModel.getHeight() / 2);
			
			const gameLeftX = shipCenterX - (gameModel.getWidth() / 2); 
			const gameRightX = shipCenterX + (gameModel.getWidth() / 2); 
			const gameBottomY = shipCenterY - (gameModel.getHeight() / 2); 
			const gameTopY = shipCenterY + (gameModel.getHeight() / 2);


			this.planetView.render(gameModel.getContext(), gameLeftX, gameRightX, gameBottomY, gameTopY, gameModel.getPlanetModel());

			
			
			this.drawShip(gameModel);
		}
		
		if (gameModel.isDebugMode()) {
			this.shipView.debug(gameModel.getContext(), 80, 20, gameModel.getShipModel());
		}
	}

	private drawShip(gameModel: GameModel): void {
		// Center the ship on the screen, note these are screen coordinates
		const shipLeftX = (gameModel.getWidth() / 2) - (gameModel.getShipModel().getWidth() / 2);
		const shipTopY = (gameModel.getHeight() / 2) - (gameModel.getShipModel().getHeight() / 2);

		this.shipView.draw(gameModel.getContext(), shipLeftX, shipTopY, gameModel.getShipModel());
	}

}