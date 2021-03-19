import Color from './Color';
import { Options, parseOptions } from './options';

export type Closure = (options?: Options) => string;

const generateRandom = (min: number, max: number) => {

    return Math.floor((Math.random() * (max-min)) + min);

};

const colorDifference = (color1: Color, color2: Color) => {

    return (
        Math.abs(color1.r - color2.r) +
        Math.abs(color1.g - color2.g) +
        Math.abs(color1.b - color2.b)
    );

};

const checkSimilarity = (list: Color[], color: Color, difference: number, considerations: number) => {

    for(let i = 0; i < considerations; i++) {

        if(list[i] !== undefined && colorDifference(color, list[i]) < difference) {

            return true;

        }

    }

    return false;

};

const saveColor = (list: Color[], color: Color) => {

    // rearrange previous colors
    for(let i = list.length; i > 0; i--) list[i] = list[i-1];
    list[0] = color;

};

const randomColor = (): Closure => {

    // save previous colors to check similarity
    const previousColors: Color[] = [];

    // closure
    return (options?: Options): string => {

        const { difference, considerations } = parseOptions(options);

        let color: Color;

        // do until a dissimilar color is found
        do {

            const r = generateRandom(30, 225);
            const g = generateRandom(30, 225);
            const b = generateRandom(30, 225);

            color = new Color(r, g, b);

        } while(checkSimilarity(previousColors, color, difference, considerations));

        saveColor(previousColors, color);

        return color.toString();

    };

};

export default randomColor;
