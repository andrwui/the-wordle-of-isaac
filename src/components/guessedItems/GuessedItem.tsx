import './GuessedItem.sass'

import { useItemStore } from '../../stores/store'
import { type Item } from '../../types/Item'
interface GuessedItemProp {
  itemProp: Item
}

const GuessedItem = ({ itemProp }: GuessedItemProp) => {
  const { item } = useItemStore()

  const detectIfPoolGuessed = (pools: string[], item: Item): string => {
    let contains = ''
    if (item.pools === pools) {
      return 'guessed'
    } else {
      pools.forEach(pool => {
        contains = item!.pools.includes(pool) ? 'partially_guessed' : 'not_guessed'
      })
    }

    return contains
  }

  return (
    <>
      <ul className="guessedItem">
        <li className={`guessedItem__property `}>
          <img src={itemProp.image} alt={itemProp.name} />
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.name}</p>
        </li>
        <li className={`guessedItem__property ${itemProp.type === item!.type ? 'guessed' : 'not_guessed'}`}>
          <p>{itemProp.type}</p>
        </li>
        <li className={`guessedItem__property ${itemProp.DLC === item!.DLC ? 'guessed' : 'not_guessed'}`}>
          <p>{itemProp.DLC}</p>
        </li>
        <li
          className={`guessedItem__property guessedItem__property__pools ${detectIfPoolGuessed(itemProp.pools, item!)}`}
        >
          <ul>
            {itemProp.pools.map((pool, index) => (
              <li key={index}>{pool}</li>
            ))}
          </ul>
        </li>
        <li className={`guessedItem__property ${itemProp.quality === item!.quality ? 'guessed' : 'not_guessed'}`}>
          <p>{itemProp.quality}</p>
        </li>
      </ul>
    </>
  )
}

export default GuessedItem
