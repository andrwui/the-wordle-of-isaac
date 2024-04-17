import {
  type ReactElement,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react'
import './SearchBar.sass'
import SearchBarList from './SearchBarList'

type SearchBarProps = {
  items: Item[] | Trinket[]
  setItems: (items: Item[] | Trinket[]) => void
  currentItem: Item | Trinket | null

  addGuess: (guess: Item | Trinket) => void
  setHasGuessed: (hasGuessed: boolean) => void
  hasGuessed: boolean
}

const SearchBar = ({
  items,
  setItems,
  currentItem,
  addGuess,
  setHasGuessed,
  hasGuessed,
}: SearchBarProps): ReactElement => {
  const [filteredItems, setFilteredItems] = useState<Item[] | Trinket[]>([])

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<number>(-1)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()
    setInputValue(e.target.value)
    setFilteredItems(
      items.filter((a) =>
        a.name.trim().toLowerCase().includes(value.trim().toLowerCase()),
      ),
    )
    !isMenuOpen && setIsMenuOpen(true)
    value.length < 1 && setIsMenuOpen(false)
  }

  const handleBlur = (): void => {
    setSelectedItem(-1)
    console.log(selectedItem)
    setTimeout(() => setIsMenuOpen(false), 150)
  }

  const handleFocus = (): void => {
    inputValue.length > 0 && setIsMenuOpen(true)
  }

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const key = e.key
    console.log('key: ', key)
    if (key === 'Enter') {
      const selecItem =
        selectedItem > -1 ? filteredItems[selectedItem] : filteredItems[0]
      setItems(items.filter((a) => a.id !== selecItem.id))
      addGuess(selecItem)
      setInputValue('')
      setIsMenuOpen(false)
      setSelectedItem(-1)
      setFilteredItems([])
      selecItem.id === currentItem?.id && setHasGuessed(true)
    }
    if (key === 'Escape') {
      setInputValue('')
      setIsMenuOpen(false)
    }

    if (key === 'ArrowDown') {
      const cap = filteredItems.length - 1
      if (selectedItem < cap) {
        setSelectedItem((s) => s + 1)
      }
    }
    if (key === 'ArrowUp') {
      const cap = 0
      if (selectedItem > cap) {
        setSelectedItem((s) => s - 1)
      }
    }
  }

  return (
    <div className="search-bar" onBlur={handleBlur}>
      <input
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeydown}
        placeholder="Search..."
        value={inputValue}
        type="text"
        className="search-bar__bar"
        disabled={hasGuessed}
      />
      {isMenuOpen && (
        <SearchBarList
          setFilteredItems={setFilteredItems}
          addGuess={addGuess}
          currentItem={currentItem}
          hasGuessed={hasGuessed}
          items={items}
          setHasGuessed={setHasGuessed}
          setItems={setItems}
          selectedItem={selectedItem}
          possibleValues={filteredItems}
          setIsMenuOpen={setIsMenuOpen}
          setInputValue={setInputValue}
        />
      )}
    </div>
  )
}
export default SearchBar
