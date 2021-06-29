export class FlappyBird {
    private _spriteX = 0;
    private _spriteY = 0;
    private _width = 33;
    private _height = 24;
    private _x = 10;
    private _y = 50;

    private _velocity = 0;
    private _gravity = 0.25;

    constructor(
        private readonly _context: CanvasRenderingContext2D,
        private readonly _sprites: HTMLImageElement,
    ) {}

    public draw(): void {
        this._context.drawImage(
            this._sprites,
            this._spriteX, this._spriteY,
            this._width, this._height,
            this._x, this._y,
            this._width, this._height,
        );
    }

    public update(): void {
        this._velocity = this._velocity + this._gravity;
        this._y += this._velocity;
    }
}
