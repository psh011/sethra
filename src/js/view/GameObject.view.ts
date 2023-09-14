import GameObjectModel from '../model/GameObject.model';

export default abstract class GameObject {

	public debug(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void {
		// Do nothing by default
	}

	abstract draw(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, gameObjectModel: GameObjectModel): void;

}