import { Button } from '../button/button.component';
import classes from './breed-item.module.scss'

interface BreedItemProps {
    breedName: string;
}

export const BreedItem = ({ breedName }: BreedItemProps): JSX.Element => {
    return (
        <div className={classes.breedItem}>
            <h3>
                {breedName}
            </h3>
            <Button>Show image</Button>
        </div>
    )
}