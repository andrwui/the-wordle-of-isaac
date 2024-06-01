import { type Dispatch, type SetStateAction, type ReactElement } from 'react'
import SearchBarItem from './SearchBarItem'
import { Virtuoso } from 'react-virtuoso'

type SearchBarListProps = {
  possibleValues: Item[] | Trinket[]
  selectedItem: number
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<string>>
  setSelectedItem: Dispatch<SetStateAction<number>>
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
  setSelectedItem,
}: SearchBarListProps): ReactElement => {
  return (
    <ul className="search-bar__list">
      {possibleValues.map((item, index) => {
        return (
          <SearchBarItem
            index={index}
            setSelectedItem={setSelectedItem}
            setFilteredItems={setFilteredItems}
            items={items}
            setHasGuessed={setHasGuessed}
            setItems={setItems}
            addGuess={addGuess}
            currentItem={currentItem}
            item={possibleValues[index]}
            key={index}
            selected={index === selectedItem}
            setIsMenuOpen={setIsMenuOpen}
            setInputValue={setInputValue}
          />
        )
      })}
    </ul>
  )
}

export default SearchBarList
