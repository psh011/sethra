export default abstract class GameObject {
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
}