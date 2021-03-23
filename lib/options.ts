import { DEFAULT_DIFFERENCE, DEFAULT_CONSIDERATIONS, DEFAULT_BRIGHTNESS } from './constants';

export type Options = {
    difference?: number,
    considerations?: number,
    brightness?: boolean
};

export const parseOptions = (options?: Options): {
    difference: number,
    considerations: number,
    brightness: boolean|null
} => {

    // default values
    let difference: number = DEFAULT_DIFFERENCE;
    let considerations: number = DEFAULT_CONSIDERATIONS;
    let brightness: boolean|null = DEFAULT_BRIGHTNESS;

    if(options?.difference !== undefined) difference = options.difference;
    if(options?.considerations !== undefined) considerations = options.considerations;
    if(options?.brightness !== undefined) brightness = options.brightness;

    return {
        difference: difference,
        considerations: considerations,
        brightness: brightness
    };

};
