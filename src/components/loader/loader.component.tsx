import classes from './loader.module.scss';

export const Loader = (): JSX.Element => {
    return (
        <div className={classes.loaderContainer}>
            <span className={classes.loader}></span>
        </div>
    );
}