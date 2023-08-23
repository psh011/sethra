import Ship from "../objects/ship";
import GameObject from "./GameObject";

export default abstract class Level {
	private ship: Ship;

    private gameObjects: GameObject[] = [];
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
    /*
    Notes: need a list of game objects, floor, walls, veiw port magement.
    */
}