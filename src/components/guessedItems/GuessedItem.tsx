import './GuessedItem.sass'

import { useItemStore } from '../../stores/store'
import { type Item } from '../../types/Item'
import GuessedProperty from './GuessedProperty'
interface GuessedItemProp {
  itemProp: Item
}

const GuessedItem = ({ itemProp }: GuessedItemProp) => {
  const { item } = useItemStore()

  return (
    <>
      <ul className="guessedItem">
        <li className={`guessedItem__property `}>
          <img src={itemProp.image} alt={itemProp.name} className="itemImg" />
        </li>
        <li className="guessedItem__property">
          <p>{itemProp.name}</p>
        </li>
        <li className={`guessedItem__property`}>
          <p>{itemProp.type}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="type" />
        </li>
        <li className={`guessedItem__property`}>
          <p>{itemProp.DLC}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="DLC" />
        </li>
        <li className={`guessedItem__property pools`}>
          <ul>
            {itemProp.pools.map((pool, index) => (
              <li key={index}>
                <p>{pool}</p>
                <span>
                  <GuessedProperty item={item!} guessedItem={itemProp} property="pools" pool={pool} />
                </span>
              </li> // ADD THE GUESSEDPROPERTY COMP LOGIC FOR THIS
            ))}
          </ul>
        </li>
        <li className={`guessedItem__property`}>
          <p>{itemProp.quality}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="quality" />
        </li>
      </ul>
    </>
  )
}

export default GuessedItem
