export class GetReadyMessage {
    private _spriteX = 134;
    private _spriteY = 0;
    private _width = 174;
    private _height = 152;
    private _x: number;
    private _y = 50;

    constructor(
        private readonly _canvas: HTMLCanvasElement,
        private readonly _context: CanvasRenderingContext2D,
        private readonly _sprites: HTMLImageElement,
    ) {
        this._x = (this._canvas.width / 2) - this._width / 2;
    }

    public draw(): void {
        this._context.drawImage(
            this._sprites,
            this._spriteX, this._spriteY,
            this._width, this._height,
            this._x, this._y,
            this._width, this._height,
        );
    }
}
