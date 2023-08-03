import GameObject from "../abstract/GameObject";

export default class Debug extends GameObject {
	private playerSpeedX: number = 0;
	private playerSpeedY: number = 0;
	private keyHeldW: boolean = false;
	private keyHeldA: boolean = false;
	private keyHeldS: boolean = false;
	private keyHeldD: boolean = false;

	public setDebugContext(keyHeldW: boolean, keyHeldA: boolean, keyHeldS: boolean, keyHeldD: boolean, playerSpeedX: number, playerSpeedY: number) {
		this.keyHeldW = keyHeldW;
		this.keyHeldA = keyHeldA;
		this.keyHeldS = keyHeldS;
		this.keyHeldD = keyHeldD;
		this.playerSpeedX = playerSpeedX;
		this.playerSpeedY = playerSpeedY;
	}

	public getWidth(): number {
		return 30;
	}
	public getHeight(): number {
		return 20;
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {

		this.drawLetterBox(ctx, x + 10, y, this.keyHeldW, 'W');
		this.drawLetterBox(ctx, x, y + 10, this.keyHeldA, 'A');
		this.drawLetterBox(ctx, x + 10, y + 10, this.keyHeldS, 'S');
		this.drawLetterBox(ctx, x + 20, y + 10, this.keyHeldD, 'D');

	}

	private drawLetterBox(ctx: CanvasRenderingContext2D, x: number, y: number, keyHeld: boolean, keySymbol: string) {
		ctx.fillStyle = 'rgb(222, 222, 222)';
		ctx.textAlign = 'center';
		ctx.fillRect(x, y, 10, 10);

		if ( keyHeld ) {
			ctx.fillStyle = 'rgb(255, 255, 255)';
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)';
		}
		ctx.fillText(keySymbol, x+5, y+9);

	}
}