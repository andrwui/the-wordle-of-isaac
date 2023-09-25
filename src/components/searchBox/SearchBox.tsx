import { useState } from 'react'

import { useItemsStore, useItemStore, useSelectedItemStore, useHasGuessedStore } from '../../stores/store'

import { type Item } from '../../types/Item'

import './SearchBox.sass'

const SearchBox = () => {
  const [filteredItems, setFilteredItems] = useState([] as Item[])
  const { setHasGuessed, hasGuessed } = useHasGuessedStore()
  const [inputValue, setInputValue] = useState('')
  const { items } = useItemsStore()
  const { item } = useItemStore()
  const { selectedItem, setSelectedItem } = useSelectedItemStore()

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
    setFilteredItems([])
    setInputValue('')
    if (item!.id === selectedItem!.id) {
      // maybe not relying on setHasGuessed for validation, consider using a variable
      setHasGuessed(true)
    } else {
      setHasGuessed(false)
    }
  }

  return (
    <>
      <div className="search-box">
        <input value={inputValue} type="text" placeholder="Search" onChange={searchItem} disabled={hasGuessed} />
      </div>

      <ul className="searchResults">
        {filteredItems.map(item => (
          <li key={item.id} onClick={() => selectItem(item)}>
            <img src={item.image} alt="" />
            {item.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default SearchBox
