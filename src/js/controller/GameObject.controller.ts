import GameObjectModel from '../model/GameObject.model';

export default class GameObject {

    public move(maxX: number, gameObjectModel: GameObjectModel): void {
        let newX = gameObjectModel.getX() + gameObjectModel.getXSpeed();
        let newY = gameObjectModel.getY() + gameObjectModel.getYSpeed();

        if ( newX < 0 ) {
            newX += maxX;
        } else if ( newX > maxX ) {
            newX -= maxX;
        }

        if ( newY < 0 ) {
            newY = 0;
        }
    }

    public checkCollision(object1: GameObjectModel, object2: GameObjectModel): boolean {
        const xOverlap = (object1.getX() + object1.getWidth())  >= object2.getX() && object1.getX() <= (object2.getX() + object2.getWidth());
        const yOverlap = (object1.getY() + object1.getHeight())  >= object2.getY() && object1.getY() <= (object2.getY() + object2.getHeight());

        return xOverlap && yOverlap;
    }
    
	
}