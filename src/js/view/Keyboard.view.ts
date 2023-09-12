import KeyboardModel from '../model/Keyboard.model';

export default class Keyboard {

	public debug(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		this.drawLetterBox(ctx, x + 10, y, 'W');
		this.drawLetterBox(ctx, x, y + 10, 'A');
		this.drawLetterBox(ctx, x + 10, y + 10, 'S');
		this.drawLetterBox(ctx, x + 20, y + 10, 'D');

	}

	private drawLetterBox(ctx: CanvasRenderingContext2D, x: number, y: number, keySymbol: string) {
		ctx.fillStyle = 'rgb(222, 222, 222)';
		ctx.textAlign = 'center';
		ctx.fillRect(x, y, 10, 10);

		if (KeyboardModel.instance().getKeyDown(keySymbol.toLowerCase())) {
			ctx.fillStyle = 'rgb(255, 255, 255)';
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)';
		}
		ctx.fillText(keySymbol, x + 5, y + 9);

	}
}