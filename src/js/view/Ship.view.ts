import GameModel from '../model/Game.model';
import GameObjectModel from '../model/GameObject.model';
import ShipModel from '../model/Ship.model';
import GameObjectView from './GameObject.view';
import ShipRenderer from './renderer/Ship.renderer';

export default class Ship extends GameObjectView {

	public debug(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const shipModel = <ShipModel>gameObjectModel;
		const shipLeftX = (GameModel.instance().getWidth() / 2) - (shipModel.getWidth() / 2);
		const shipTopY = (GameModel.instance().getHeight() / 2) - (shipModel.getHeight() / 2);

		

		ctx.fillStyle = 'rgb(222, 222, 222)';

		ctx.textAlign = 'center';
		ctx.fillRect(minX, minY, 65, 35);

		minX += 5;
		minY += 1;

		ctx.textAlign = 'left';
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillText('X: ', minX, minY + 10);
		ctx.fillText(`${gameObjectModel.getX()} (${gameObjectModel.getXSpeed()})`, minX + 15, minY + 10);
		ctx.fillText('Y: ', minX, minY + 20);
		ctx.fillText(`${gameObjectModel.getY()} (${gameObjectModel.getYSpeed()})`, minX + 15, minY + 20);
		ctx.fillText('H: ', minX, minY + 30);
		ctx.fillText(`${shipModel.getHeading()}`, minX + 15, minY + 30);

		
	}

	public draw(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const shipModel = <ShipModel>gameObjectModel;
		const shipLeftX = (GameModel.instance().getWidth() / 2) - (shipModel.getWidth() / 2);
		const shipTopY = (GameModel.instance().getHeight() / 2) - (shipModel.getHeight() / 2);
		if (shipModel.getHeading() === "right") {
			ShipRenderer.renderHeadingRight(ctx, shipLeftX, shipTopY);
		} else {
			ShipRenderer.renderHeadingLeft(ctx, shipLeftX, shipTopY);
		}
	}

}