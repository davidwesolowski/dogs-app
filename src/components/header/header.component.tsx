import classes from './header.module.scss';

export const Header = (): JSX.Element => {
    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Breeds of dogs</h1>
            <img className={classes.logo} src='https://dog.ceo/img/dog-api-logo.svg'/>
        </div>
    )
}