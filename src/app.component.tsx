import classes from './app.module.scss'
import { BreedList } from './components/breeds-list/breeds-list.component'
import { Header } from './components/header/header.component'

export const App = (): JSX.Element => {

  return (
    <div className={classes.app}>
      <Header />
      <hr className={classes.appDivider} />
      <BreedList />
    </div>
  )
}
