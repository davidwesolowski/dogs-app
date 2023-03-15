import { api } from "../api"
import { API_URLS } from "../urls"
import { BreedsList, BreedsListDTO, BreedImages, BreedImagesListDTO } from "./breeds.interface"

export const createBreedsApi = () => {
    const getAllBreeds = async (): Promise<BreedsList | null> => {
        try {
            const data = await api<BreedsListDTO>(API_URLS.ALL_BREEDS);

            return Object.keys(data.message)
        } catch {
            return null;
        }
    }

    const getBreedImages = async (breed: string): Promise<BreedImages | null> => {
        try {
            const data = await api<BreedImagesListDTO>(API_URLS.BREED_IMAGES(breed));

            return data.message;
        } catch {
            return null;
        }
        
    }

    return {
        getAllBreeds,
        getBreedImages,
    }
}