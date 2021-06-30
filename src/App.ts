import { Background } from './controllers/Background';
import { FlappyBird } from './controllers/FlappyBird';
import { Floor } from './controllers/Floor';
import { GetReadyMessage } from './controllers/GetReadyMessage';

interface Screen {
    draw: () => void;
    update: () => void;
    click?: () => void;
}

type Screens = {
    start: Screen;
    game: Screen;
}

export class App {
    private _flappyBird: FlappyBird;
    private _floor: Floor;
    private _background: Background;
    private _getReadyMessage: GetReadyMessage; 

    private _activeScreen = {} as Screen;
    private _screens: Screens = {
        start: {} as Screen,
        game: {} as Screen,
    };

    constructor(
        private readonly _canvas: HTMLCanvasElement,
        private readonly _context: CanvasRenderingContext2D,
        private readonly _sprites: HTMLImageElement,
    ) {
        this._flappyBird = new FlappyBird(this._context, this._sprites);
        this._floor = new Floor(this._canvas, this._context, this._sprites);
        this._background = new Background(this._canvas, this._context, this._sprites);
        this._getReadyMessage = new GetReadyMessage(this._canvas, this._context, this._sprites);
        
        // Start screen
        this._screens.start = {
            draw: () => {
                this._background.draw();
                this._floor.draw();
                this._flappyBird.draw();
                this._getReadyMessage.draw();
            },
            click: () => {
                this._changeToScreen(this._screens.game);
            },
            update: () => {},
        };

        // Game screen
        this._screens.game = {
            draw: () => {
                this._background.draw();
                this._floor.draw();
                this._flappyBird.draw();
            },
            update: () => {
                this._flappyBird.update();
            },
        };

        this._addListeners();
        this._changeToScreen(this._screens.start);
        this._start();
    }

    private _start = (): void => {
        this._activeScreen.draw();
        this._activeScreen.update();
      
        requestAnimationFrame(this._start);
    }

    private _addListeners(): void {
        window.addEventListener('click', () => {
            if (this._activeScreen.click) {
                this._activeScreen.click();
            }
        });
    }

    private _changeToScreen(newActiveScreen: any): void {
        this._activeScreen = newActiveScreen;
    }
}