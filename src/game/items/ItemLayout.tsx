import { type ReactElement, useEffect, useState } from 'react'
import useItemsStore from './stores/ItemsStore'
import GuessContainer from '../components/common/Guesses/GuessContainer'
import SearchBar from './components/SearchBar/SearchBar'
import { randomNumber } from '../../helpers/helpers'
import { CurrentItemPreview } from './tests'
import useGuessesStore from './stores/GuessStore'
import ResetButton from './components/ResetButton/ResetButton'
import itemsFile from '../../assets/json/items.json'

// import HintContainer from './components/Hints/HintContainer'

const ItemLayout = (): ReactElement => {
  const { items, setItems, currentItem, setCurrentItem } = useItemsStore()
  const { addGuess, hasGuessed, resetGuesses, setHasGuessed } =
    useGuessesStore()

  const [answerVisible, setAnswerVisible] = useState<boolean>(false)

  useEffect(() => {
    if (!hasGuessed) {
      resetGuesses()
      setItems(itemsFile)
      setCurrentItem(itemsFile[randomNumber(0, itemsFile.length)])
    }

    return () => {
      setItems([])
    }
  }, [hasGuessed])

  return (
    <>
      {answerVisible && currentItem && (
        <CurrentItemPreview currentItem={currentItem} />
      )}
      {/* <HintContainer>holiwis</HintContainer> */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ResetButton />
        <button
          onClick={() => setAnswerVisible((s) => !s)}
          className="reset-button"
        >
          Show it
        </button>
      </div>
      <SearchBar
        addGuess={(guess: Item | Trinket) => addGuess(guess as Item)}
        currentItem={currentItem && currentItem}
        hasGuessed={hasGuessed}
        items={items}
        setHasGuessed={setHasGuessed}
        setItems={(items: Item[] | Trinket[]) => setItems(items as Item[])}
      />
      <GuessContainer />
    </>
  )
}

export default ItemLayout
