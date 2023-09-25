import { useState } from 'react'

import { useItemsStore } from '../../stores/store'

import { type Item } from '../../types/Item'

const SearchBox = () => {
  const [filteredItems, setFilteredItems] = useState([] as Item[])
  const { items } = useItemsStore()

  const searchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setFilteredItems([])
    if (e.target.value.length > 3) {
      const itemFilter: Item[] = items!.filter(item => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      const results = itemFilter.slice(0, 10)
      setFilteredItems(results)
      console.log(results)
    }
  }

  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="Search" onChange={searchItem} />
      </div>

      <ul className="searchResults">
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default SearchBox
