import Level from "../abstract/Level";
import Background from "../objects/Background";
import Building from "../objects/Building";
import Projectile from "../objects/projectile";
import Ship from "../objects/ship";
import Wall from "../objects/Wall";
import TestLevelWallRenderer from "../objects/renderer/TestLevelWallRenderer";

export default class TestLevel extends Level {

    private background: Background = new Background();

    public loadLevel(ship: Ship): void {
        super.loadLevel(ship);
        
        const building = new Building();
        building.setX(100);
        building.setY(100);
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
        rightWall.setRenderer(TestLevelWallRenderer.renderWallLeft);
        rightWall.setX(this.getWidth());
        rightWall.setY(200);
        this.gameObjects.push(rightWall);
    }

    public getWidth(): number {
        return 500;
        // return this.background.getWidth();
    }
    
    public getHeight(): number {
        return 500;
        // return this.background.getHeight();
    }

    public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
        this.background.draw(ctx, 0, 0);
        for (const object of this.gameObjects) {
            object.draw(ctx, object.getX(), object.getY());
        }
        this.ship.draw(ctx, this.ship.getX(), this.ship.getY());
    }
}