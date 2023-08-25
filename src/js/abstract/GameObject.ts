export default abstract class GameObject {
    protected y: number = 0;
    protected x: number = 0;
    protected xSpeed: number = 0;
    protected ySpeed: number = 0;

    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getXSpeed(): number {
        return this.xSpeed;
    }

    public setXSpeed(xSpeed: number): void {
        this.xSpeed = xSpeed;
    }

    public getYSpeed(): number {
        return this.ySpeed;
    }

    public setYSpeed(ySpeed: number): void {
        this.ySpeed = ySpeed;
    }

    public move(): void {
        // Do Nothing
    }

    public checkCollision(object: GameObject) {
        const minAX: number = this.x;
        const maxAX: number = this.x + this.getWidth();
        const minAY: number = this.y;
        const maxAY: number = this.y + this.getHeight();

        const minBX: number = object.x;
        const maxBX: number = object.x + object.getWidth();
        const minBY: number = object.y;
        const maxBY: number = object.y + object.getHeight();

        const aLeftOfB: boolean = maxAX < minBX;
        const aRightOfB: boolean = minAX > maxBX;
        const aAboveB: boolean = minAY > maxBY;
        const aBelowB: boolean = maxAY < minBY;

        return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
    }
}