export default class Color {

    private _r: number;
    private _g: number;
    private _b: number;

    constructor(r: number, g: number, b: number) {

        this._r = r;
        this._g = g;
        this._b = b;

    }

    get r(): number {

        return this._r;

    }

    set r(value: number) {

        this._r = value;

    }

    get g(): number {

        return this._g;

    }

    set g(value: number) {

        this._g = value;

    }

    get b(): number {

        return this._b;

    }

    set b(value: number) {

        this._b = value;

    }

    toString(): string {

        return (
            '#' +
            this._r.toString(16).toUpperCase() +
            this._g.toString(16).toUpperCase() +
            this._b.toString(16).toUpperCase()
        );

    }

}
