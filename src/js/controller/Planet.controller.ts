import PlanetModel from '../model/Planet.model';

export default class Planet {
	private planetModel: PlanetModel;

    constructor() {
	}

	public newPlanetModel(size: number = 1) {
		this.planetModel = PlanetModel.generatePlanet();
	}

    public setPlanetModel(planetModel: PlanetModel): void {
        this.planetModel = planetModel;
    }

    public getPlanetModel(): PlanetModel {
        return this.planetModel;
    }

	
}