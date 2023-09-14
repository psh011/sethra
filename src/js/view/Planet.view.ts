import BuildingModel from '../model/Building.model';
import GameModel from '../model/Game.model';
import PlanetModel from '../model/Planet.model';
import TileModel from '../model/Tile.model';
import BuildingView from '../view/Building.view';
import GameObjectView from '../view/GameObject.view';
import TileView from '../view/Tile.view';

export default class Planet {
	protected gameObjectViews: Map<string, GameObjectView> = new Map<string, GameObjectView>([
		[BuildingModel.CLASS_NAME, new BuildingView()]
	]);

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

		// Loop while the screenX is within bounds
		while (screenX <= (maxX - minX)) {
			const tileModel = tiles[tileIndex];
			const tileX = tileModel.getX();
			const tileWidth = tileModel.getWidth();
			const tileEnd = tileX + tileWidth;

			const xStart = Math.max(planetX, tileX);
			const xEnd = Math.min(tileX + tileWidth, planetX + maxX);
			const xRange = xEnd - xStart;
			const yRange = maxY - minY;

			// Draw the tile
			this.tileView.draw(ctx, screenX - 1, xRange + 1, minY, yRange, tileModel);

			// Move the planetX value by xRange
			planetX = tileX + xRange;

			// Loop around if we've hit the edge of the planet
			if (planetX >= planetModel.getWidth()) {
				planetX = 0;
			}

			// Move the screen to the end of the tile x range
			screenX += xRange;

			// Move on to the next tile in the while loop
			tileIndex++;

			// If we reach the end of the list and aren't done, then go back to the beginning
			if (tileIndex >= tiles.length) {
				tileIndex = 0;
			}
		}

		planetModel.getGameObjects().forEach(gameObject => {
			const gameObjectView = this.gameObjectViews.get(gameObject.getClassName());
			// console.log("gameObject", gameObject.getX(), gameObject.getY());
			// TODO Find better way to get visible gameObjects
			if (gameObjectView) {
				let leftStartX = minX;
				let leftEndX = maxX;
				let rightStartX = minX;
				let rightEndX = maxX;

				if ( minX < 0 ) {
					leftStartX = minX + planetModel.getWidth();
					leftEndX = planetModel.getWidth();
					rightStartX = 0;
					rightEndX = maxX;
				} else if ( maxX > 0 ) {
					leftStartX = minX;
					leftEndX = planetModel.getWidth();
					rightStartX = 0;
					rightEndX = maxX - planetModel.getWidth();
				}

				const visible = (gameObject.getY() >= minY && gameObject.getY() <= maxY) &&
					((gameObject.getX() >= leftStartX && gameObject.getX() <= leftEndX) ||
					(gameObject.getX() >= rightStartX && gameObject.getX() <= rightEndX));


				// console.log('test1', minX, maxX, minY, maxY);
				// console.log('test2', leftStartX, leftEndX, rightStartX, rightEndX);

				// console.log('visible', visible);
				if (!visible) {
					return;
				}

				let screenStartX = gameObject.getX() - minX;
				
				if (screenStartX < 0 ) screenStartX += planetModel.getWidth();
				else if ( screenStartX > planetModel.getWidth() ) screenStartX -= planetModel.getWidth();
				
				let screenEndX = screenStartX + gameObject.getWidth();
			
				let screenStartY = maxY - gameObject.getY() - gameObject.getHeight();
				let screenEndY = screenStartY + gameObject.getHeight();

				// console.log('test3', screenStartX, screenEndX, screenStartY, screenEndY);
				gameObjectView.draw(ctx, screenStartX, screenEndX, screenStartY, screenEndY, gameObject);

				if (GameModel.instance().isDebugMode()) {
					gameObjectView.debug(ctx, screenStartX, screenEndX, screenStartY, screenEndY, gameObject);
				}
			}
		});
	}
}