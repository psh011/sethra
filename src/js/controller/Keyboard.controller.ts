import KeyboardModel from '../model/Keyboard.model';
import KeyboardView from '../view/Keyboard.view';

export default class Keyboard {
    private keyboardModel: KeyboardModel;
    private keyboardView: KeyboardView;

    constructor() {
		this.keyboardModel = KeyboardModel.instance();
        this.keyboardView = new KeyboardView();
	}

    public debug(ctx: CanvasRenderingContext2D): void {
         this.keyboardView.debug(ctx, 20, 20);
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
        console.log(`keyPressed: ${evt.key}`);
        this.keyboardModel.setKeyDown(evt.key, true);
		evt.preventDefault();
	}
    
	protected keyReleased(evt: KeyboardEvent): void {
        this.keyboardModel.setKeyDown(evt.key, false);
    }
}