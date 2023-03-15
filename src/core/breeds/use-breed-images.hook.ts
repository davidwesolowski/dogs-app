import { useEffect, useState } from "react"
import { BreedImages } from "./breeds.interface";
import { createBreedsApi } from "./service";

interface UseBreedImages {
    breedImages: BreedImages;
    isLoading: boolean;
    isError: boolean;
}

export const useBreedImages = (breedName: string | null): UseBreedImages => {
    const [breedImages, setBreedImages] = useState<BreedImages>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);


    useEffect(() => {
        if (breedName === null) {
            return;
        }
        
        const { getBreedImages } = createBreedsApi();

        setIsLoading(true);

        getBreedImages(breedName)
            .then((data) => {
                if (data) {
                    setBreedImages(data);
                    return;
                }

                setIsError(true);
            })
            .finally(() => setIsLoading(false)
        );

    }, [breedName]);

    return {
        breedImages,
        isLoading,
        isError,
    }
}