import { type ReactElement, useEffect, useState } from 'react'
import useItemsStore from './stores/ItemsStore'
import GuessContainer from '../components/common/Guesses/GuessContainer'
import SearchBar from './components/SearchBar/SearchBar'
import { randomNumber } from '../../helpers/helpers'
import { CurrentItemPreview } from './tests'
import useGuessesStore from './stores/GuessStore'
import itemsFile from '../../assets/json/items.json'
import ImageHint from './components/Hints/ImageHint'

import HintContainer from './components/Hints/HintContainer'
import Hint from './components/Hints/Hint'
import CustomHint from './components/Hints/CustomHint'
import Modal from '../components/common/Modal'

const ItemLayout = (): ReactElement => {
  const { items, setItems, currentItem, setCurrentItem } = useItemsStore()
  const { addGuess, hasGuessed, resetGuesses, setHasGuessed } =
    useGuessesStore()

  const [answerVisible, setAnswerVisible] = useState<boolean>(false)
  const [quoteRevealed, setQuoteRevealed] = useState<boolean>(false)
  const [descRevealed, setDescRevealed] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [resetTrigger, setResetTrigger] = useState<boolean>(false)

  useEffect(() => {
    if (!hasGuessed) {
      setIsModalOpen(false)
      setDescRevealed(false)
      setQuoteRevealed(false)
      resetGuesses()
      setItems(itemsFile)
      setCurrentItem(itemsFile[randomNumber(0, itemsFile.length)])
    } else {
      setIsModalOpen(true)
    }

    return () => {
      setItems([])
    }
  }, [hasGuessed, resetTrigger])

  const triggerReset = (): void => {
    setResetTrigger((s) => !s)
    hasGuessed && setHasGuessed(false)
  }

  return (
    <>
      {window.dev && answerVisible && currentItem && (
        <CurrentItemPreview currentItem={currentItem} />
      )}
      <Modal
        isVisible={isModalOpen}
        styles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1em',
          aspectRatio: '11/4',
          height: '320px',
        }}
      >
        <h4>YOU WIN!!</h4>
        <p>The item was: {currentItem?.name}</p>
        <button
          onClick={triggerReset}
          style={{
            fontSize: '1.2em',
            padding: '.2em',
          }}
        >
          AGAIN!
        </button>
      </Modal>
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
        {window.dev && (
          <button
            onClick={() => setAnswerVisible((s) => !s)}
            className="reset-button"
          >
            Show it
          </button>
        )}
        {window.dev && (
          <button
            onClick={() => setIsModalOpen((s) => !s)}
            className="reset-button"
          >
            Open Modal
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
