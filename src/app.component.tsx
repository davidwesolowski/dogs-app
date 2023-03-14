import { useState } from 'react'
import classes from './app.module.scss'
import { BreedList } from './components/breeds-list/breeds-list.component'

export const App = (): JSX.Element => {

  return (
    <div className={classes.app}>
      <BreedList />
    </div>
  )
}
