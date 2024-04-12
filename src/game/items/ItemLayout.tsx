import { type ReactElement, useEffect } from 'react'
import useItemsStore from './stores/ItemsStore'
import GuessContainer from '../components/common/Guesses/GuessContainer'
import SearchBar from './components/SearchBar/SearchBar'
import { randomNumber } from '../../helpers/helpers'
import { CurrentItemPreview } from './tests'
import useGuessesStore from './stores/GuessStore'
import ResetButton from './components/ResetButton/ResetButton'

const ItemLayout = (): ReactElement => {
  const { items, setItems, currentItem, setCurrentItem } = useItemsStore()
  const { hasGuessed, resetGuesses } = useGuessesStore()

  useEffect(() => {
    if (!hasGuessed) {
      resetGuesses()
      fetch('https://tboiws.onrender.com/items')
        .then(async (data) => (await data.json()) as Item[])
        .then((items: Item[]) => {
          setItems(items)

          const index = randomNumber(0, items.length)
          setCurrentItem(items[index])
        })
    }

    return () => {
      setItems([])
    }
  }, [hasGuessed])

  return (
    <>
      {window.dev && currentItem && (
        <CurrentItemPreview currentItem={currentItem} />
      )}
      {/* <HintContainer>? ? ?</HintContainer> */}
      <ResetButton />
      <SearchBar items={items} />
      <GuessContainer />
    </>
  )
}

export default ItemLayout
