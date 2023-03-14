import { useBreeds } from "../../core/breeds/use-breeds.hook"
import { BreedItem } from "../breed-item/breed-item.component";
import { Loader } from "../loader/loader.component";
import classes from './breeds-list.module.scss'

export const BreedList = (): JSX.Element => {
    const { breeds, isLoading, isError } = useBreeds();

    console.log(breeds, isLoading)

    if (isError) {
        return <p>Error...</p>
    }

    if (isLoading) {
        return <Loader />
    }
    
    return (
        <div className={classes.breedsList}>
            {
                breeds.map((breed) => (
                    <BreedItem key={breed} breedName={breed} />
                ))
            }
        </div>
    )
}