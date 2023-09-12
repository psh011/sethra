import PlanetModel from '../model/Planet.model';
import TileModel from '../model/Tile.model';
import TileView from '../view/Tile.view';

export default class Planet {
	protected tileView: TileView = new TileView();

	public render(ctx: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number, planetModel: PlanetModel): void {
		const tiles: TileModel[] = planetModel.getTiles();

		// We're going to iterate over the list of tiles, but we want to start with the first one 
		let tileIndex = planetModel.getStartingTileIndex(minX);

		// The tile/planet coordinates need to be mapped to the screen coordinates, so these end up being different values
		let screenX = 0;

		// Because of the circular planet design, we can get "off planet" minX values like -400 or 2500 (assuming 2000 planet width).  
		// This happens when the screen hits a point where the tiles go from beginning to end, so we need to wrap the value around if its negative.
		let planetX = minX < 0 ? minX + planetModel.getWidth() : minX;

		console.log('starting index', tileIndex);
		console.log(minX, maxX);
		console.log(minY, maxY);
		while ( true  ) {
			const tileModel = tiles[tileIndex];
			const tileX = tileModel.getX();
			const tileWidth = tileModel.getWidth();
			const tileEnd = tileX + tileWidth;

			const xStart = Math.max(planetX, tileX);
			const xEnd = Math.min(tileX + tileWidth, planetX + maxX);
			const xRange = xEnd - xStart;
			const yRange = maxY - minY;

			// Draw the tile
			this.tileView.draw(ctx, screenX, xRange, minY, yRange, tileModel);

			// Move the planetX value by xRange
			planetX = tileX + xRange;

			// Loop around if we've hit the edge of the planet
			if ( planetX >= planetModel.getWidth() ) {
				planetX = 0;
			}
			
			// Move the screen to the end of the tile x range
			screenX += xRange;

			// If we've filled the screen, we can break out of the loop
			if ( screenX >= (maxX - minX) ) {
				break;
			}

			// Move on to the next tile in the while loop
			tileIndex++;

			// If we reach the end of the list and aren't done, then go back to the beginning
			if ( tileIndex >= tiles.length ) {
				tileIndex = 0;
			}
		}

	}
}