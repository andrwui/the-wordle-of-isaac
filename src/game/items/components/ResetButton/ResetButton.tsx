import { type ReactElement } from 'react'
import useGuessesStore from '../../stores/GuessStore'
import useItemsStore from '../../stores/ItemsStore'

const ResetButton = (): ReactElement => {
  const { setHasGuessed } = useGuessesStore()
  const { currentItem } = useItemsStore()

  const handleButtonClick = (): void => {
    setHasGuessed(false)
  }

  console.log(currentItem?.description)

  return (
    <button onClick={handleButtonClick} className="reset-button">
      Reset
    </button>
  )
}

export default ResetButton
