import GameObjectModel from '../model/GameObject.model';
import EnemyModle from '../model/Enemy.model';
import GameObjectView from './GameObject.view';

export default class Enemy extends GameObjectView {

	public debug(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const towerModel = <TowerModel>gameObjectModel;
		ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
	}

	public draw(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		const towerModel = <TowerModel>gameObjectModel;

		const startX = minX;
		ctx.fillStyle = "rgb(222, 222, 222)";
		ctx.fillRect(minX, minY+70, 10, 20);
        ctx.fillRect(minX+10, minY+60, 10, 10);
        ctx.fillRect(minX+20, minY, 10, 60);
        ctx.fillRect(minX+10, minY, 10, 10);
		ctx.fillStyle = "rgb(189, 187, 187)";
		ctx.fillRect(minX+10, minY+70, 20, 10);
		ctx.fillRect(minX+40, minY+60, 10, 10);
		ctx.fillRect(minX+30, minY, 10, 60);
		ctx.fillRect(minX+40, minY, 10, 10);
		ctx.fillStyle = "rgb(156, 156, 156)";
		ctx.fillRect(minX+30, minY+70, 20, 10);
		ctx.fillRect(minX+50, minY+70, 10, 10);
		ctx.fillStyle = "rgb(128, 128, 128)";
		ctx.fillRect(minX+40, minY+80, 10, 10);
		ctx.fillRect(minX+50, minY+70, 10, 10);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(minX+10, minY+60, 10, 10);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(minX+20, minY+50, 10, 20);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(minX+30, minY+50, 10, 20);
		ctx.fillStyle = "rgb(99, 98, 98)";
		ctx.fillRect(minX+40, minY+60, 10, 10);
		
		
	}

}