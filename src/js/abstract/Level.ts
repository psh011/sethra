import Background from "../objects/Background";
import Ship from "../objects/ship";
import GameObject from "./GameObject";

export default abstract class Level {
	protected ship: Ship;
    protected gameObjects: GameObject[] = [];
    
    abstract getWidth(): number;
    abstract getHeight(): number;

    abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;

    public move(): void {
        this.ship.move();
        for (const object of this.gameObjects) {
            object.move();
        }
    }
    
    public loadLevel(ship: Ship): void {
        this.ship = ship;
        this.ship.attach();

        this.ship.setX(this.getWidth() / 2);
		this.ship.setY(this.getHeight() / 2);
    }
    
    public unloadLevel(): void {
        this.ship.detach();
        this.ship = null;
    }

    /*
    Notes: need a list of game objects, floor, walls, veiw port magement.
    */
}