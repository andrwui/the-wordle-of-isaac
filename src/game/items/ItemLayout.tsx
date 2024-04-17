import { type ReactElement, useEffect, useState } from 'react'
import useItemsStore from './stores/ItemsStore'
import GuessContainer from '../components/common/Guesses/GuessContainer'
import SearchBar from './components/SearchBar/SearchBar'
import { randomNumber } from '../../helpers/helpers'
import { CurrentItemPreview } from './tests'
import useGuessesStore from './stores/GuessStore'
import ResetButton from './components/ResetButton/ResetButton'
import itemsFile from '../../assets/json/items.json'
import ImageHint from './components/Hints/ImageHint'

import HintContainer from './components/Hints/HintContainer'
import Hint from './components/Hints/Hint'
import CustomHint from './components/Hints/CustomHint'

const ItemLayout = (): ReactElement => {
  const { items, setItems, currentItem, setCurrentItem } = useItemsStore()
  const { addGuess, hasGuessed, resetGuesses, setHasGuessed } =
    useGuessesStore()

  const [answerVisible, setAnswerVisible] = useState<boolean>(false)
  const [quoteRevealed, setQuoteRevealed] = useState<boolean>(false)
  const [descRevealed, setDescRevealed] = useState<boolean>(false)

  useEffect(() => {
    if (!hasGuessed) {
      setDescRevealed(false)
      setQuoteRevealed(false)
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
      {window.dev && answerVisible && currentItem && (
        <CurrentItemPreview currentItem={currentItem} />
      )}
      <HintContainer>
        <Hint hintName="Quote">
          <CustomHint
            onClick={() => setQuoteRevealed(true)}
            style={{
              color: quoteRevealed ? '#595353' : '',
              cursor: quoteRevealed ? 'not-allowed' : '',
            }}
          />
        </Hint>
        <Hint hintName="Image">
          <ImageHint />
        </Hint>
        <Hint hintName="Description">
          <CustomHint
            onClick={() => setDescRevealed(true)}
            style={{
              color: descRevealed ? '#595353' : '',
              cursor: descRevealed ? 'not-allowed' : '',
            }}
          />
        </Hint>
      </HintContainer>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ResetButton />
        {window.dev && (
          <button
            onClick={() => setAnswerVisible((s) => !s)}
            className="reset-button"
          >
            Show it
          </button>
        )}
      </div>
      {quoteRevealed && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {currentItem?.quote}
        </p>
      )}
      {descRevealed && (
        <p
          style={{
            fontSize: '.7em',
            maxWidth: '50ch',
            textAlign: 'center',
          }}
        >
          {currentItem?.description}
        </p>
      )}

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
