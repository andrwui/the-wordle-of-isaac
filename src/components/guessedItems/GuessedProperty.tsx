import './GuessedItem.sass'
import React from 'react'
import { type Item } from '../../types/Item'
import greenCheck from '../../assets/icons/green_check.png'
import redCross from '../../assets/icons/red_cross.png'

const GuessedProperty = <K extends keyof Item>({
  item,
  guessedItem,
  property,
  pool,
}: {
  item: Item
  guessedItem: Item
  property: K
  pool?: string
}): JSX.Element => {
  if (pool && property === 'pools') {
    if (item.pools.includes(pool)) {
      console.log('GUESSEDPROPERTY, POOL: ', pool)
      return (
        <>
          <img src={greenCheck} alt="Guessed!" className="guessedIcon" />
        </>
      )
    } else {
      return (
        <>
          <img src={redCross} alt="Not guessed :c" className="guessedIcon" />
        </>
      )
    }
  }

  if (item[property] === guessedItem[property]) {
    return (
      <>
        <img src={greenCheck} alt="Guessed!" className="guessedIcon" />
      </>
    )
  } else {
    return (
      <>
        <img src={redCross} alt="Not guessed :c" className="guessedIcon" />
      </>
    )
  }
}

export default GuessedProperty
