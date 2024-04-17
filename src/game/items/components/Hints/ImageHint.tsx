import { type ReactElement, useState, useEffect } from 'react'
import useItemsStore from '../../stores/ItemsStore'
import useGuessesStore from '../../stores/GuessStore'

const ImageHint = (): ReactElement => {
  const [hasClicked, setHasClicked] = useState<boolean>(false)

  const { currentItem } = useItemsStore()
  const { hasGuessed } = useGuessesStore()

  useEffect(() => {
    if (!hasGuessed) {
      setHasClicked(false)
    }
  }, [hasGuessed])

  const image = (
    <img
      src={currentItem?.image}
      style={{
        width: '2em',
        filter: 'brightness(0) blur(3px)',
      }}
    />
  )

  const questionMark = (
    <div
      onClick={() => setHasClicked(true)}
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '2em',
        height: '2em',
      }}
    >
      ?
    </div>
  )

  return hasClicked ? image : questionMark
}

export default ImageHint
