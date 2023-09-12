import KeyboardModel from '../model/Keyboard.model';
import ShipModel from '../model/Ship.model';
import ShipView from '../view/Ship.view';

export default class Ship {
    private shipModel: ShipModel;
    private shipView: ShipView;

    constructor(shipModel: ShipModel = new ShipModel()) {
        this.shipModel = shipModel
	}

    public getShipModel(): ShipModel {
        return this.shipModel;
    }

	public move(keyboardModel: KeyboardModel, maxX: number): void {
		// Set X coordinate limited to 0 <= X <= maxX (planet width)
		let newShipX = this.shipModel.getX() + this.shipModel.getXSpeed();

		if ( newShipX > maxX ) {
			newShipX -= maxX;
		} else if ( newShipX < 0 ) {
			newShipX += maxX;
		}

		this.shipModel.setX(newShipX);

		// Set Y coordinate limited to 0 <= Y
		let newShipY = this.shipModel.getY() + this.shipModel.getYSpeed();

		if ( newShipY < 0 ) newShipY = 0;
		
		this.shipModel.setY(newShipY);

		// Set Y Speed based on buttons pressed
        if (keyboardModel.getKeyDown("w") && keyboardModel.getKeyDown("s")) {
			this.shipModel.setYSpeed(0);
        } else if (keyboardModel.getKeyDown("w")) {
            this.shipModel.setYSpeed(7);
		} else if (keyboardModel.getKeyDown("s")) {
			this.shipModel.setYSpeed(-7);
		} else {
			this.shipModel.setYSpeed(0);
		}
		
		// Set X Speed based on buttons pressed
        if (keyboardModel.getKeyDown("a") && keyboardModel.getKeyDown("d")) {
			this.shipModel.setXSpeed(0);
        } else if (keyboardModel.getKeyDown("a")) {
            this.shipModel.setXSpeed(-7);
		} else if (keyboardModel.getKeyDown("d")) {
			this.shipModel.setXSpeed(7);
		} else {
			this.shipModel.setXSpeed(0);
		}
    }
	
}