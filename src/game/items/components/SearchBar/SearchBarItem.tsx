import { type Dispatch, type SetStateAction, type ReactElement } from 'react'

type SearchBarItemProps = {
  index: number
  item: Item | Trinket
  selected: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<string>>
  setSelectedItem: Dispatch<SetStateAction<number>>
  setFilteredItems: Dispatch<SetStateAction<Item[] | Trinket[]>>
  items: Item[] | Trinket[]
  setItems: (items: Item[] | Trinket[]) => void
  currentItem: Item | Trinket | null

  addGuess: (guess: Item | Trinket) => void
  setHasGuessed: (hasGuessed: boolean) => void
}

const SearchBarItem = ({
  index,
  items,
  setItems,
  currentItem,
  addGuess,
  setHasGuessed,
  item,
  selected,
  setIsMenuOpen,
  setInputValue,
  setFilteredItems,
  setSelectedItem,
}: SearchBarItemProps): ReactElement => {
  const handleClick = (): void => {
    setItems(items.filter((a) => a.id !== item.id))
    setIsMenuOpen(false)
    setFilteredItems([])
    addGuess(item)
    setInputValue('')
    item.id === currentItem?.id && setHasGuessed(true)
  }

  return (
    <li
      className="search-bar__list__item"
      style={{
        backgroundColor: selected ? '#9b9b9b' : '',
      }}
      onClick={handleClick}
      onMouseOver={() => setSelectedItem(index)}
    >
      {
        <img
          className="search-bar__list__item__img"
          height="32px"
          width="32px"
          src={item.image}
        ></img>
      }
      <p className="search-bar__list__item__name">{item.name}</p>
    </li>
  )
}
export default SearchBarItem
