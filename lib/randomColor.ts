import Color from './Color';
import { Options, parseOptions } from './options';
import { TooManyLoopsError } from './errors';

export type Closure = (options?: Options) => string;

const generateRandom = (min: number, max: number): number => {

    return Math.floor((Math.random() * (max-min)) + min);

};

const colorDifference = (color1: Color, color2: Color): number => {

    return (
        Math.abs(color1.r - color2.r) +
        Math.abs(color1.g - color2.g) +
        Math.abs(color1.b - color2.b)
    );

};

const checkSimilarity = (list: Color[], color: Color, difference: number, considerations: number): boolean => {

    for(let i = 0; i < considerations; i++) {

        if(list[i] !== undefined && colorDifference(color, list[i]) < difference) {

            return true;

        }

    }

    return false;

};

const checkBrightness = (color: Color, brightness: boolean|null): boolean => {

    const getBrightness = (color: Color): number => ( (color.r * 299) + (color.g * 587) + (color.b * 114) ) / 1000;

    if(brightness === null) return true;
    else if(brightness) return getBrightness(color) >= 123;
    else return getBrightness(color) <= 122;

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

        const { difference, considerations, brightness } = parseOptions(options);

        let color: Color;
        let loopCount = 0;

        // do until a dissimilar color is found
        do {

            const r = generateRandom(30, 225);
            const g = generateRandom(30, 225);
            const b = generateRandom(30, 225);

            color = new Color(r, g, b);

            // throw error if color is not found while too many loops
            if(loopCount > 100) throw new TooManyLoopsError();
            loopCount += 1;

        } while(checkSimilarity(previousColors, color, difference, considerations) || !checkBrightness(color, brightness));

        saveColor(previousColors, color);

        return color.toString();

    };

};

export default randomColor;
