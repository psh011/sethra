import TileModel from './Tile.model';

// TODO Think about implementing planet tiles as a circular linked list
export default class Planet {

    protected size: number;
    protected tiles: TileModel[];
    protected width: number;

    protected constructor(size: number = 1) {
        this.size = size;
        this.tiles = [];
    }

    public getSize(): number {
        return this.size;
    }

    public getTiles(): TileModel[] {
        return this.tiles;
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

    public getTilesBetween(minX: number, maxX: number): TileModel[] {
        const tilesBetween: TileModel[] = [];

        console.log('raw min, max', minX, maxX);
        // if ( minX < 0 ) minX += this.width;

        // console.log('adj min, max', minX, maxX);
        this.tiles.forEach(tileModel => {
            const tileMinX = tileModel.getX();
            const tileMaxX = tileModel.getX() + tileModel.getWidth();

            // TODO Improve this logic
            if ( tileMinX >= minX && tileMinX <= maxX ) {
                tilesBetween.push(tileModel);
            } else if ( tileMaxX >= minX && tileMaxX <= maxX ) {
                tilesBetween.push(tileModel);
            } else if ( minX < 0 && tileMinX >= (minX + this.width) && tileMinX <= (maxX + this.width)) {
                tilesBetween.push(tileModel);
            } else if ( minX < 0 && tileMaxX >= (minX + this.width) && tileMaxX <= (maxX + this.width)) {
                tilesBetween.push(tileModel);
            } else if ( maxX > this.width && tileMinX >= (minX - this.width) && tileMinX <= (maxX - this.width)) {
                tilesBetween.push(tileModel);
            } else if ( maxX > this.width && tileMaxX >= (minX - this.width) && tileMaxX <= (maxX - this.width)) {
                tilesBetween.push(tileModel);
            }
  
        });

        return tilesBetween;

    }


    public static generatePlanet(size: number = 1): Planet {
        const planet = new Planet(size);
        const tileCount = planet.size * 10;
        let elevation = 0;
        let planetWidth = 0;
        
        for (let i = 0; i < tileCount; i++) {
            const tileModel = TileModel.generateTile(planetWidth, elevation);
            planet.tiles.push(tileModel);
            planetWidth += tileModel.getWidth();
        }

        planet.width = planetWidth;

        return planet;
    }

}