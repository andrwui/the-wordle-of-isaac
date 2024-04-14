import { type Dispatch, type SetStateAction, type ReactElement } from 'react'
import SearchBarItem from './SearchBarItem'

type SearchBarListProps = {
  possibleValues: Item[] | Trinket[]
  selectedItem: number
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<string>>
  setFilteredItems: Dispatch<SetStateAction<Item[] | Trinket[]>>
  items: Item[] | Trinket[]
  setItems: (items: Item[] | Trinket[]) => void
  currentItem: Item | Trinket | null

  addGuess: (guess: Item | Trinket) => void
  setHasGuessed: (hasGuessed: boolean) => void
  hasGuessed: boolean
}

const SearchBarList = ({
  items,
  setItems,
  currentItem,
  addGuess,
  setFilteredItems,
  setHasGuessed,
  possibleValues,
  selectedItem,
  setIsMenuOpen,
  setInputValue,
}: SearchBarListProps): ReactElement => {
  return (
    <ul className="search-bar__list">
      {possibleValues.map((el, index) => (
        <SearchBarItem
          setFilteredItems={setFilteredItems}
          items={items}
          setHasGuessed={setHasGuessed}
          setItems={setItems}
          addGuess={addGuess}
          currentItem={currentItem}
          item={el}
          key={index}
          selected={index === selectedItem}
          setIsMenuOpen={setIsMenuOpen}
          setInputValue={setInputValue}
        />
      ))}
    </ul>
  )
}

export default SearchBarList
