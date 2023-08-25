import GameObject from "../abstract/GameObject";
export default class Wall extends GameObject {
	private renderMethod: any = null;

	constructor() {
		super();
	}

	public setRenderer(renderMethod: any) {
		this.renderMethod = renderMethod;
	}

	public draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
		this.renderMethod(ctx, x, y);
	}

	public getWidth(): number {
		throw new Error("Method not implemented.");
	}
	
	public getHeight(): number {
		throw new Error("Method not implemented.");
	}

}