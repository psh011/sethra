export default class Tile {

    // Elevation of this terrain with "sea level" being 0
    protected elevation: number;

    // Width in pixels of a single tile
    protected width: number;

    // X location on planet
    protected x: number;

    public getElevation(): number {
        return this.elevation;
    }

    public getWidth(): number {
        return this.width;
    }

    public getX(): number {
        return this.x;
    }

    public contains(minX: number, maxX: number): boolean {
        return (maxX >= this.x && minX <= (this.x + this.width));
    }

    public static generateTile(x: number, elevation: number = 0, width: number = 200): Tile {
        const tile = new Tile();
        tile.x = x;
        tile.elevation = elevation;
        tile.width = width;
        return tile;
    }

}