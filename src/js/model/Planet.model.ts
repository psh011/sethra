import BuildingModel from './Building.model';
import TowerModel from './Tower.model';
import GameObjectModel from './GameObject.model';
import TileModel from './Tile.model';

// TODO Think about implementing planet tiles as a circular linked list
export default class Planet {

    protected size: number;
    protected tiles: TileModel[];
    protected width: number;
    protected gameObjects: GameObjectModel[];

    protected constructor(size: number = 1) {
        this.size = size;
        this.tiles = [];
        this.gameObjects = [];
    }

    public getSize(): number {
        return this.size;
    }

    public getTiles(): TileModel[] {
        return this.tiles;
    }

    public getGameObjects(): GameObjectModel[] {
        return this.gameObjects;
    }

    public getWidth(): number {
        return this.width;
    }

    public getStartingTileIndex(minX: number): number {
        if ( minX < 0 ) minX += this.getWidth();

        for (let i = 0; i < this.tiles.length; i++) {
            if ( this.tiles[i].getX() <= minX && (this.tiles[i].getX() + this.tiles[i].getWidth()) >= minX ) {
                return i;
            }
        }

        return 0;
    }

    public static generatePlanet(size: number = 1): Planet {
        const planet = new Planet(size);
        const tileCount = planet.size * 10;
        let elevation = 0;
        let planetWidth = 0;
        
        // Add tiles
        for (let i = 0; i < tileCount; i++) {
            const tileModel = TileModel.generateTile(planetWidth, elevation);
            planet.tiles.push(tileModel);
            planetWidth += tileModel.getWidth();
        }

        planet.width = planetWidth;

        // Add buildings
        /*
        for (let i = 0; i < size; i++) {
            const buildingModel = BuildingModel.generateBuilding();
            buildingModel.setX(planetWidth-50);
            buildingModel.setX(Math.random() * planetWidth);
            planet.gameObjects.push(buildingModel);
        }
        */
        let buildingModel = BuildingModel.generateBuilding();
        buildingModel.setX(planetWidth - 50);
        planet.gameObjects.push(buildingModel);

        buildingModel = BuildingModel.generateBuilding();
        buildingModel.setX(250);
        planet.gameObjects.push(buildingModel);

        buildingModel = BuildingModel.generateBuilding();
        buildingModel.setX(planetWidth - 450);
        planet.gameObjects.push(buildingModel);

        let towerModel = TowerModel.generateTower();
        towerModel.setX(650);
        planet.gameObjects.push(towerModel);

        return planet;
    }

}