import GameModel from '../model/Game.model';

export default class Menu {

	public render(gameModel: GameModel): void {
		gameModel.getContext().fillStyle = 'rgb(122, 122, 122)';
		gameModel.getContext().textAlign = 'center';
		gameModel.getContext().fillRect(0, 0, gameModel.getWidth(), gameModel.getHeight());

		const previousFont = gameModel.getContext().font;
		gameModel.getContext().fillStyle = 'rgb(0, 0, 0)';
		
		gameModel.getContext().font = "30px Arial";
		gameModel.getContext().fillText('PAUSED', gameModel.getWidth() / 2, 50);
		
		gameModel.getContext().font = "20px Arial";
		gameModel.getContext().fillText('Press ESCAPE to Exit', gameModel.getWidth() / 2, 80);
		
		gameModel.getContext().font = previousFont;
	}
}