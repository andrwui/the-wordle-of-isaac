import { type Dispatch, type SetStateAction, type ReactElement } from 'react'
import useItemsStore from '../../stores/ItemsStore'
import useGuessesStore from '../../stores/GuessStore'

type SearchBarItemProps = {
  item: Item
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<string>>
}

const SearchBarItem = ({
  item,
  setIsMenuOpen,
  setInputValue,
}: SearchBarItemProps): ReactElement => {
  const { items, setItems, currentItem } = useItemsStore()
  const { addGuess, setHasGuessed } = useGuessesStore()

  const handleClick = (): void => {
    setItems(items.filter((a) => a.id !== item.id))

    addGuess(item)
    setIsMenuOpen(false)
    setInputValue('')
    item.id === currentItem?.id && setHasGuessed(true)
  }

  return (
    <li className="search-bar__list__item" onClick={handleClick}>
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
