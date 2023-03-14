import { api } from "../api"
import { API_URLS } from "../urls"
import { BreedImagesList, BreedsList, BreedsListDTO } from "./breeds.interface"

export const createBreedsApi = () => {
    const getAllBreeds = async (): Promise<BreedsList | null> => {
        try {
            const data = await api<BreedsListDTO>(API_URLS.ALL_BREEDS);

            return Object.keys(data.message)
        } catch {
            return null;
        }
    }

    const getBreedImages = async (breed: string): Promise<BreedImagesList | null> => {
        try {
            const data = await api<BreedsListDTO>(API_URLS.ALL_BREEDS);

            return await api<BreedImagesList>(API_URLS.BREED_IMAGES(breed));
        } catch {
            return null;
        }
        
    }

    return {
        getAllBreeds,
        getBreedImages,
    }
}