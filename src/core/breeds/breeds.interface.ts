type Breed = Record<string, string[]>;

type ResponseStatus = 'success' | 'error';

interface BreedBase {
    status: ResponseStatus;
}

export interface BreedsListDTO extends BreedBase {
    message: Breed;
}

export type BreedsList = string[];

export interface BreedImagesList extends BreedBase {
    message: string[];
}