import GameObject from "./GameObject";

export default abstract class ControllableGameObject extends GameObject {
    protected keyDown: {[key: string]: boolean} = {};

    public attach(): void {
        document.addEventListener('keydown', (evt) => this.keyPressed(evt));
        document.addEventListener('keyup', (evt) => this.keyReleased(evt));
    }
    
    public detach(): void {
        document.removeEventListener('keydown', (evt) => this.keyPressed(evt));
        document.removeEventListener('keyup', (evt) => this.keyReleased(evt));
    }

	protected keyPressed(evt: KeyboardEvent): void {
        this.keyDown[evt.key] = true;
		evt.preventDefault();
	}
    
	protected keyReleased(evt: KeyboardEvent): void {
        this.keyDown[evt.key] = false;
    }
}