import './GuessedItem.sass'

import { useItemStore } from '../../stores/store'
import { type Item } from '../../types/Item'

const { item } = useItemStore()

interface GuessedItemProp {
  item: Item
}

const GuessedItem = ({ item: itemProp }: GuessedItemProp) => {
  return (
    <>
      <ul className="guessedItem">
        <li className="guessedItem__property">
          <img src={itemProp.image} alt={itemProp.name} />
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.name}</p>
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.type}</p>
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.DLC}</p>
        </li>
        <li className="guessedItem__property">
          {itemProp.pools.map((pool, index) => (
            <p key={index}>{pool}</p>
          ))}
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.quality}</p>
        </li>
      </ul>
    </>
  )
}

export default GuessedItem
