import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useBreeds } from "../../core/breeds/use-breeds.hook"
import { BreedItem } from "../breed-item/breed-item.component";
import { Error } from "../error/error.component";
import { Loader } from "../loader/loader.component";
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
                <AnimatePresence>
                    {
                        breeds.map((breed, idx) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.08 * idx } }}
                                key={breed}>
                                <BreedItem breedName={breed} setSelectedBreed={setSelectedBreed} />
                            </motion.div>
                            
                        ))
                    }
                </AnimatePresence>
            </div>
            <SelectedBreedModal selectedBreed={selectedBreed} handleClose={() => setSelectedBreed(null)} />
        </>
    );
}