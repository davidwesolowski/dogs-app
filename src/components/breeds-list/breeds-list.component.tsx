import { useState } from "react";
import { useBreeds } from "../../core/breeds/use-breeds.hook"
import { BreedItem } from "../breed-item/breed-item.component";
import { Error } from "../error/error.component";
import { Loader } from "../loader/loader.component";
import { Modal } from "../modal/modal.component";
import { SelectedBreedModal } from "../selected-breed-modal/selected-breed-modal.component";
import classes from './breeds-list.module.scss'

export const BreedList = (): JSX.Element => {
    const { breeds, isLoading, isError } = useBreeds();
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

    if (isError) {
        return <Error />;
    }

    if (isLoading) {
        return <Loader />;
    }
    
    return (
        <>
            <div className={classes.breedsList}>
                {
                    breeds.map((breed) => (
                        <BreedItem key={breed} breedName={breed} setSelectedBreed={setSelectedBreed} />
                    ))
                }
            </div>
            <SelectedBreedModal selectedBreed={selectedBreed} handleClose={() => setSelectedBreed(null)} />
        </>
    );
}