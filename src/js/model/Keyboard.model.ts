export default class Keyboard {
    private keyDown: {[key: string]: boolean} = {};

    public setKeyDown(key: string, pressed: boolean) {
        this.keyDown[key] = pressed;
    }

    public getKeyDown(key: string) : boolean {
        return this.keyDown[key];
    }

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

    private static _instance: Keyboard;
	public static instance(): Keyboard {
		if  (!Keyboard._instance) {
            Keyboard._instance = new Keyboard();
		}

		return Keyboard._instance;
	}
}