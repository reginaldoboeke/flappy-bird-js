export class Background {
    private _spriteX = 390;
    private _spriteY = 0;
    private _width = 275;
    private _height = 204;
    private _x = 0;
    private _y: number;

    constructor(
        private readonly _canvas: HTMLCanvasElement,
        private readonly _context: CanvasRenderingContext2D,
        private readonly _sprites: HTMLImageElement,
    ) {
        this._y = this._canvas.height - this._height;
    }

    public draw(): void {
        this._context.fillStyle = '#70c5ce';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

        this._context.drawImage(
            this._sprites,
            this._spriteX, this._spriteY,
            this._width, this._height,
            this._x, this._y,
            this._width, this._height,
        );
        this._context.drawImage(
            this._sprites,
            this._spriteX, this._spriteY,
            this._width, this._height,
            (this._x + this._width), this._y,
            this._width, this._height,
        );
    }
}
