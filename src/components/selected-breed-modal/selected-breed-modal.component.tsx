import { useState } from "react";
import { useBreedImages } from "../../core/breeds/use-breed-images.hook";
import { Button } from "../button/button.component";
import { Error } from "../error/error.component";
import { Loader } from "../loader/loader.component";
import { Modal } from "../modal/modal.component"
import classes from './selected-breed-modal.module.scss';

interface SelectedBreedModalProps {
    selectedBreed: string | null;
    handleClose: () => void;
}

const randomIndex = (breedsLength: number) => Math.floor(Math.random() * breedsLength);

const NoContent = (): JSX.Element => {
    return (
        <div className={classes.noContent}>
            <h2 className={classes.noContentText}>
                Sorry, there is no image. Please select another image or breed.
            </h2>
        </div>
    )
}

export const SelectedBreedModal = ({ selectedBreed, handleClose }: SelectedBreedModalProps): JSX.Element => {
    const { breedImages, isError, isLoading } = useBreedImages(selectedBreed);
    const [isImgError, setIsImgError] = useState<boolean>(false); 
    const [isImgLoading, setIsImgLoading] = useState<boolean>(true); 
    const [idx, setIdx] = useState<number>(0);

    const breedImage = breedImages[idx];

    const handleNextImage = (): void => {
        setIdx(randomIndex(breedImages.length));

        isImgError && setIsImgError(false);
        !isImgLoading && setIsImgLoading(true);
    }

    const handleModalClose = (): void => {
        handleClose();
        setIdx(0);
        isImgError && setIsImgError(false);
        !isImgLoading && setIsImgLoading(true);
    }

    return (
        <Modal isOpen={selectedBreed !== null}>
            <div className={classes.selectedBreedModal}>
                <h1 className={classes.breedName}>
                    {selectedBreed}
                </h1>
                <hr className={classes.divider} />
                {isError ? (
                    <Error />
                ) : isLoading ? (
                    <Loader />
                ): (
                    <>
                        {breedImage === undefined || isImgError ? (
                            <NoContent />
                        ) : (
                            <>
                                <div className={classes.breedImage}>
                                    <img src={breedImage} onLoad={() => setIsImgLoading(false)} onError={() => setIsImgError(true)} />
                                    {isImgLoading && <Loader />}
                                </div>
                            </>
                        )}
                        <hr className={classes.divider} />
                        <div className={classes.modalButtonsContainer}>
                            <div className={classes.modalButtons}>
                                <Button variant={'primary'} onClick={handleModalClose}>
                                    Close
                                </Button>

                                <Button onClick={handleNextImage}>
                                    Next image
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    )
}