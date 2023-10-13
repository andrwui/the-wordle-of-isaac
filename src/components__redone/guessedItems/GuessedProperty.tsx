import { type Item } from '../../types/Item'
import greenCheck from '../../assets/icons/green_check.png'
import redCross from '../../assets/icons/red_cross.png'
import upArrow from '../../assets/icons/up_arrow.png'
import downArrow from '../../assets/icons/down_arrow.png'

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
      return (
        <>
          <img src={greenCheck} alt="Guessed" className="guessedIcon" />
        </>
      )
    } else {
      return (
        <>
          <img src={redCross} alt="Not guessed" className="guessedIcon" />
        </>
      )
    }
  }
  if (property === 'quality' || property === 'id') {
    if (guessedItem[property] < item[property]) {
      return (
        <>
          <img src={upArrow} alt="Not guessed" className="guessedIcon" />
        </>
      )
    } else if (guessedItem[property] > item[property]) {
      return (
        <>
          <img src={downArrow} alt="Not guessed" className="guessedIcon" />
        </>
      )
    } else {
      return (
        <>
          <img src={greenCheck} alt="Guessed" className="guessedIcon" />
        </>
      )
    }
  }

  if (property === 'DLC') {
    const DLCs = ['Rebirth', 'Afterbirth', 'Afterbirth †', 'Repentance']

    const indexGuessedItem: number = DLCs.indexOf(guessedItem[property] as string)
    const indexCurrentItem: number = DLCs.indexOf(item[property] as string)

    if (indexGuessedItem < indexCurrentItem) {
      return (
        <>
          <img src={upArrow} alt="Not guessed" className="guessedIcon" />
        </>
      )
    } else if (indexGuessedItem > indexCurrentItem) {
      return (
        <>
          <img src={downArrow} alt="Not guessed" className="guessedIcon" />
        </>
      )
    } else {
      return (
        <>
          <img src={greenCheck} alt="Guessed" className="guessedIcon" />
        </>
      )
    }
  }

  if (item[property] === guessedItem[property]) {
    return (
      <>
        <img src={greenCheck} alt="Guessed" className="guessedIcon" />
      </>
    )
  } else {
    return (
      <>
        <img src={redCross} alt="Not guessed" className="guessedIcon" />
      </>
    )
  }
}

export default GuessedProperty
