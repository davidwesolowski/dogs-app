import { useEffect, useState } from "react"
import { BreedsList } from "./breeds.interface";
import { createBreedsApi } from "./service";

interface UseBreeds {
    breeds: BreedsList;
    isLoading: boolean;
    isError: boolean;
}

export const useBreeds = (): UseBreeds => {
    const [breeds, setBreeds] = useState<BreedsList>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const { getAllBreeds } = createBreedsApi();

        setIsLoading(true);
        getAllBreeds().then((data) => {
            if (data) {
                setBreeds(data)
                return;
            }

            setIsError(true);
        }).finally(() => setIsLoading(false));


    }, []);

    return {
        breeds,
        isError,
        isLoading,
    }
}