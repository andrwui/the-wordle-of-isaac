import { type ReactElement } from 'react'
import './Guesses.sass'
import useGuessesStore from '../../../items/stores/GuessStore'
import Guess from './Guess'
import GuessCardSM from './GuessCardSM'
import GuessCardLG from './GuessCardLG'

const GuessContainer = (): ReactElement => {
  const { guesses } = useGuessesStore()

  return (
    <div className="guesses">
      {guesses.map((el, i) => (
        <Guess key={i}>
          <GuessCardSM>
            <img src={el.image} alt={el.name} />
          </GuessCardSM>
          <GuessCardSM>
            <p>{el.name}</p>
          </GuessCardSM>
          <GuessCardSM>
            <p>{el.type}</p>
          </GuessCardSM>
          <GuessCardSM>
            <p>{el.dlc}</p>
          </GuessCardSM>
          <GuessCardLG>
            {el.pools.map((pool, i) => (
              <p key={i}>{pool}</p>
            ))}
          </GuessCardLG>
          <GuessCardSM>
            <p>{el.quality}</p>
          </GuessCardSM>
        </Guess>
      ))}
    </div>
  )
}

export default GuessContainer
