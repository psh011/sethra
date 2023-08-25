
export default abstract class TestLevelWallRenderer {

    static renderWallLeft(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		ctx.fillStyle = "rgb(186, 186, 184)";
		ctx.fillRect(x, y, 20, 550)
		ctx.fillStyle = "rgb(156, 156, 154)";
		ctx.fillRect(x + 20, y, 10, 550)
		ctx.fillStyle = "rgb(128, 128, 126)";
		ctx.fillRect(x + 30, y, 20, 550)
		ctx.fillStyle = "rgb(92, 92, 91)";
		ctx.fillRect(x + 50, y, 20, 550)
    }

    static renderWallRight(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		ctx.fillStyle = "rgb(186, 186, 184)";
		ctx.fillRect(x, y, 20, 550)
		ctx.fillStyle = "rgb(156, 156, 154)";
		ctx.fillRect(x + 20, y, 10, 550)
		ctx.fillStyle = "rgb(128, 128, 126)";
		ctx.fillRect(x + 30, y, 20, 550)
		ctx.fillStyle = "rgb(92, 92, 91)";
		ctx.fillRect(x + 50, y, 20, 550)
    }
}