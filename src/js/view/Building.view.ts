import GameObjectModel from '../model/GameObject.model';
import BuildingModel from '../model/Building.model';
import GameObjectView from './GameObject.view';

export default class Building extends GameObjectView {

	public debug(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const buildingModel = <BuildingModel>gameObjectModel;
		ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
	}

	public draw(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const buildingModel = <BuildingModel>gameObjectModel;

		const startX = minX;
		ctx.fillStyle = "rgb(222, 222, 222)";
		ctx.fillRect(minX, minY, 10, maxY - minY);
		ctx.fillStyle = "rgb(189, 187, 187)";
		ctx.fillRect(minX+10, minY, 10, maxY - minY);
		ctx.fillStyle = "rgb(156, 156, 156)";
		ctx.fillRect(minX+20, minY, 10, maxY - minY);
		ctx.fillStyle = "rgb(128, 128, 128)";
		ctx.fillRect(minX+30, minY, 10, maxY - minY);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(minX+40, minY, 10, maxY - minY);
	}

}