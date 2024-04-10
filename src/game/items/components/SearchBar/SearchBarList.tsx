import { type Dispatch, type SetStateAction, type ReactElement } from 'react'
import SearchBarItem from './SearchBarItem'

const SearchBarList = ({
  possibleValues,
  setIsMenuOpen,
  setInputValue,
}: {
  possibleValues: Item[]
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<string>>
}): ReactElement => {
  return (
    <ul className="search-bar__list">
      {possibleValues.map((el, index) => (
        <SearchBarItem
          item={el}
          key={index}
          setIsMenuOpen={setIsMenuOpen}
          setInputValue={setInputValue}
        />
      ))}
    </ul>
  )
}

export default SearchBarList
