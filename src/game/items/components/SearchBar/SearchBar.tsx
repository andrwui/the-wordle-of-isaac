import {
  type ReactElement,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react'
import './SearchBar.sass'
import SearchBarList from './SearchBarList'
import useGuessesStore from '../../stores/GuessStore'
import useItemsStore from '../../stores/ItemsStore'

const SearchBar = ({ items }: { items: Item[] }): ReactElement => {
  const [filteredItems, setFilteredItems] = useState([] as Item[])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { items: allItems, setItems, currentItem } = useItemsStore()
  const { addGuess, setHasGuessed, hasGuessed } = useGuessesStore()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()
    setInputValue(e.target.value)
    setFilteredItems(
      items.filter((a) =>
        a.name.trim().toLowerCase().startsWith(value.trim().toLowerCase()),
      ),
    )
    !isMenuOpen && setIsMenuOpen(true)
    value.length < 1 && setIsMenuOpen(false)
  }

  const handleBlur = (): void => {
    setTimeout(() => setIsMenuOpen(false), 150)
  }

  const handleFocus = (): void => {
    inputValue.length > 0 && setIsMenuOpen(true)
  }

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const key = e.key
    console.log('key: ', key)
    if (key === 'Enter') {
      const lastItem: Item = filteredItems[0]
      setItems(allItems.filter((a) => a.id !== lastItem.id))
      addGuess(lastItem)
      setInputValue('')
      setIsMenuOpen(false)
      lastItem.id === currentItem?.id && setHasGuessed(true)
    }
    if (key === 'Escape') {
      setInputValue('')
      setIsMenuOpen(false)
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
          possibleValues={filteredItems}
          setIsMenuOpen={setIsMenuOpen}
          setInputValue={setInputValue}
        />
      )}
    </div>
  )
}
export default SearchBar
