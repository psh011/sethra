import TileModel from '../model/Tile.model';
import ShipRenderer from './renderer/Ship.renderer';

export default class Tile {

	protected static GROUND_LAYER_HEIGHT: number = 20;

	public draw(ctx: CanvasRenderingContext2D, x: number, xRange: number, y: number, yRange: number, tileModel: TileModel): void {
		
		let screenY = 0;
		let yMax = y + yRange;
		
		// Sky Layer - above 0 elevation
		const skyHeight = Math.min(yMax, yRange);
		ctx.fillStyle = "rgb(135, 206, 235)";
		ctx.fillRect(x, screenY, xRange, skyHeight);
		screenY += skyHeight;
		if ( screenY >= yRange ) return;

		// Ground Layer 1
		ctx.fillStyle = "rgb(78, 204, 61)";
		ctx.fillRect(x, screenY, xRange, Math.min(yRange - screenY, Tile.GROUND_LAYER_HEIGHT));
		screenY += Tile.GROUND_LAYER_HEIGHT;
		if ( screenY >= yRange ) return;
		
		// Ground Layer 2
		ctx.fillStyle = "rgb(54, 156, 40)";
		ctx.fillRect(x, screenY, xRange, Math.min(yRange - screenY, Tile.GROUND_LAYER_HEIGHT));
		screenY += Tile.GROUND_LAYER_HEIGHT;
		if ( screenY >= yRange ) return;
		
		// Ground Layer 3
		ctx.fillStyle = "rgb(194, 164, 81)";
		ctx.fillRect(x, screenY, xRange, Math.min(yRange - screenY, Tile.GROUND_LAYER_HEIGHT));
		screenY += Tile.GROUND_LAYER_HEIGHT;
		if ( screenY >= yRange ) return;
		
		// Ground Layer 4
		ctx.fillStyle = "rgb(176, 151, 81)";
		ctx.fillRect(x, screenY, xRange, yRange - screenY);
	}

}