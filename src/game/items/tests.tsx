import { type ReactElement } from 'react'
import Guess from '../components/common/Guesses/Guess'
import GuessCardLG from '../components/common/Guesses/GuessCardLG'
import GuessCardSM from '../components/common/Guesses/GuessCardSM'

export const CurrentItemPreview = ({
  currentItem,
}: {
  currentItem: Item
}): ReactElement => {
  return (
    <div
      style={{
        scale: '.6',
        position: 'absolute',
        left: '-7%',
        top: '0',
      }}
    >
      <Guess>
        <GuessCardSM>
          <img src={currentItem.image} alt={currentItem.name} />
        </GuessCardSM>
        <GuessCardSM>
          <p>{currentItem.name}</p>
        </GuessCardSM>
        <GuessCardSM>
          <p>{currentItem.type}</p>
        </GuessCardSM>
        <GuessCardSM>
          <p>{currentItem.dlc}</p>
        </GuessCardSM>
        <GuessCardLG>
          {currentItem.pools.map((pool, i) => (
            <p key={i}>{pool}</p>
          ))}
        </GuessCardLG>
        <GuessCardSM>
          <p>{currentItem.quality}</p>
        </GuessCardSM>
      </Guess>
    </div>
  )
}
