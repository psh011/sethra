import GameObjectModel from '../model/GameObject.model';
import ShipModel from '../model/Ship.model';
import GameObjectView from './GameObject.view';
import ShipRenderer from './renderer/Ship.renderer';

export default class Ship extends GameObjectView {

	public debug(ctx: CanvasRenderingContext2D, x: number, y: number, gameObjectModel: GameObjectModel): void {
		const shipModel = <ShipModel>gameObjectModel;

		ctx.fillStyle = 'rgb(222, 222, 222)';
		ctx.textAlign = 'center';
		ctx.fillRect(x, y, 65, 35);

		x += 5;
		y += 1;

		ctx.textAlign = 'left';
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillText('X: ', x, y + 10);
		ctx.fillText(`${gameObjectModel.getX()} (${gameObjectModel.getXSpeed()})`, x + 15, y + 10);
		ctx.fillText('Y: ', x, y + 20);
		ctx.fillText(`${gameObjectModel.getY()} (${gameObjectModel.getYSpeed()})`, x + 15, y + 20);
		ctx.fillText('H: ', x, y + 30);
		ctx.fillText(`${shipModel.getHeading()}`, x + 15, y + 30);
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number, gameObjectModel: GameObjectModel): void {
		const shipModel = <ShipModel>gameObjectModel;
		if (shipModel.getHeading() === "right") {
			ShipRenderer.renderHeadingRight(ctx, x, y);
		} else {
			ShipRenderer.renderHeadingLeft(ctx, x, y);
		}
	}

}