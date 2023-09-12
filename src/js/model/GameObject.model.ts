export default abstract class GameObject {
    protected y: number = 0;
    protected x: number = 0;
    protected xSpeed: number = 0;
    protected ySpeed: number = 0;

    abstract getWidth(): number;
    abstract getHeight(): number;

    public getX(): number {
        return this.x;
    }

    public addX(x: number): void { 
        this.x += x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public addY(y: number): void { 
        this.y += y;
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

}