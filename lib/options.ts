const DEFAULT_DIFFERENCE = 150;
const DEFAULT_CONSIDERATIONS = 5;

export type Options = {
    difference?: number,
    considerations?: number
};

export const parseOptions = (options?: Options): {
    difference: number,
    considerations: number
} => {

    // default values
    let difference = DEFAULT_DIFFERENCE;
    let considerations = DEFAULT_CONSIDERATIONS;

    if(options?.difference !== undefined) difference = options.difference;
    if(options?.considerations !== undefined) considerations = options.considerations;

    return {
        difference: difference,
        considerations: considerations
    };

};
