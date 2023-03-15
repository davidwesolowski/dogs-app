import { Dispatch, SetStateAction } from 'react';
import { Button } from '../button/button.component';
import classes from './breed-item.module.scss'
interface BreedItemProps {
    breedName: string;
    setSelectedBreed: Dispatch<SetStateAction<string | null>>;
}

export const BreedItem = ({ breedName, setSelectedBreed }: BreedItemProps): JSX.Element => {
    return (
        <div className={classes.breedItem}>
            <h3>
                {breedName}
            </h3>
            <Button onClick={() => setSelectedBreed(breedName)}>
                Show image
            </Button>
        </div>
    )
}