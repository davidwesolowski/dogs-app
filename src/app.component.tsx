import classes from './app.module.scss'
import { BreedList } from './components/breeds-list/breeds-list.component'

export const App = (): JSX.Element => {

  return (
    <div className={classes.app}>
      <div className={classes.appHeader}>
        <h1 className={classes.appTitle}>Breeds of dogs</h1>
        <img className={classes.appLogo} src='https://dog.ceo/img/dog-api-logo.svg'/>
      </div>
      <hr className={classes.appDivider} />
      <BreedList />
    </div>
  )
}
