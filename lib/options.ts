const DEFAULT_DIFFERENCE = 150;
const DEFAULT_CONSIDERATIONS = 5;
const DEFAULT_BRIGHTNESS = null;

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
