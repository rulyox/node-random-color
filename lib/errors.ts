export class TooManyLoopsError extends Error {

    constructor() {

        super('Color generation failed. Possibly, "Difference" and "Considerations" are too big.');
        this.name = 'TooManyLoopsError';

    }

}
