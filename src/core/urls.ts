
const ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all';

const BREED_IMAGES = (breed: string): string => `https://dog.ceo/api/breed/${breed}/images`

export const API_URLS = {
    ALL_BREEDS,
    BREED_IMAGES,
}