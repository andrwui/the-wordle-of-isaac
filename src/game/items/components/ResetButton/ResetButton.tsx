import { type ReactElement } from 'react'
import useGuessesStore from '../../stores/GuessStore'

const ResetButton = (): ReactElement => {
  const { setHasGuessed } = useGuessesStore()

  const handleButtonClick = (): void => {
    setHasGuessed(false)
  }

  return (
    <button onClick={handleButtonClick} className="reset-button">
      Reset
    </button>
  )
}

export default ResetButton
