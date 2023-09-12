import GameObjectModel from '../model/GameObject.model';

export default abstract class GameObject {

	public debug(ctx: CanvasRenderingContext2D, x: number, y: number, gameObjectModel: GameObjectModel): void {
		// Do nothing by default
	}

	abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number, gameObjectModel: GameObjectModel): void;

}