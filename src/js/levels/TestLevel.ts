import Level from "../abstract/Level";
import Background from "../objects/Background";
import Building from "../objects/Building";
import Projectile from "../objects/Projectile";
import Ship from "../objects/Ship";
import Wall from "../objects/Wall";
import TestLevelWallRenderer from "../objects/renderer/TestLevelWallRenderer";

export default class TestLevel extends Level {

    private background: Background = new Background();

    public loadLevel(ship: Ship): void {
        super.loadLevel(ship);
        
        const building = new Building();
        building.setX(1200);
        building.setY(1200);
        this.gameObjects.push(building);
        
        const projectile = new Projectile();
        projectile.setX(200);
        projectile.setY(200);
        this.gameObjects.push(projectile);

        const leftWall = new Wall();
        leftWall.setRenderer(TestLevelWallRenderer.renderWallLeft);
        leftWall.setX(0);
        leftWall.setY(200);
        this.gameObjects.push(leftWall);

        const rightWall = new Wall();
        rightWall.setRenderer(TestLevelWallRenderer.renderWallRight);
        rightWall.setX(this.getWidth() - rightWall.getWidth());
        rightWall.setY(200);
        this.gameObjects.push(rightWall);

        const floor = new Wall();
        floor.setRenderer(TestLevelWallRenderer.renderFloor);
        floor.setX(0);
        floor.setY(this.getHeight());
        this.gameObjects.push(floor);
    }

    public getWidth(): number {
        return 2000;
        // return this.background.getWidth();
    }
    
    public getHeight(): number {
        return 1500;
        // return this.background.getHeight();
    }

    public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
        for (const object of this.gameObjects) {
            object.draw(ctx, object.getX(), object.getY());
        }
        this.ship.draw(ctx, this.ship.getX(), this.ship.getY());
    }
}