import { useState } from 'react'

import {
  useItemsStore,
  useTriesStore,
  useSelectedItemStore,
  useHasGuessedStore,
  useGuessedItemsStore,
} from '../../stores/store'

import { type Item } from '../../types/Item'

import './SearchBox.sass'

const SearchBox = () => {
  const [filteredItems, setFilteredItems] = useState([] as Item[])
  const [inputValue, setInputValue] = useState('')
  const { addTry } = useTriesStore()
  const { hasGuessed } = useHasGuessedStore()
  const { items } = useItemsStore()
  const { setSelectedItem } = useSelectedItemStore()
  const { setGuessedItems } = useGuessedItemsStore()

  const searchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (e.target.value === '') setFilteredItems([])
    if (e.target.value) {
      const itemFilter: Item[] = items!.filter(item => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      const results = itemFilter.slice(0, 10)
      setFilteredItems(results)
    }
  }

  const selectItem = (item: Item) => {
    console.log(`item ${item.name} selected`)
    setSelectedItem(item)
    setGuessedItems(item)
    setFilteredItems([])
    setInputValue('')
    addTry()
  }

  return (
    <div className="game_guesser">
      <div className="search-box">
        <input value={inputValue} type="text" placeholder="Search" onChange={searchItem} disabled={hasGuessed} />
      </div>

      <ul className="searchResults">
        {filteredItems.map(item => (
          <li key={item.id} onClick={() => selectItem(item)}>
            <img src={item.image} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBox
