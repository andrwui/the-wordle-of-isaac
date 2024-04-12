import { type ReactElement } from 'react'
import './Guesses.sass'
import useGuessesStore from '../../../items/stores/GuessStore'
import Guess from './Guess'
import GuessCardSM from './GuessCardSM'
import GuessCardLG from './GuessCardLG'
import GuessIndicator from './GuessIndicator'

const GuessContainer = (): ReactElement => {
  const { guesses } = useGuessesStore()

  return (
    <div className="guesses">
      {guesses.map((el, i) => (
        <Guess key={i}>
          <GuessCardSM>
            <img src={el.image} alt={el.name} />
          </GuessCardSM>
          <GuessCardLG>
            <p>{el.name}</p>
          </GuessCardLG>
          <GuessCardLG>
            <p>{el.type}</p>
            <GuessIndicator item={el} property="type" />
          </GuessCardLG>
          <GuessCardLG>
            <div key={i} className="guesses__guess__card-lg__hor">
              <p>{el.dlc}</p>
              <GuessIndicator item={el} property="dlc" />
            </div>
          </GuessCardLG>
          <GuessCardLG>
            {el.pools.map((pool, i) => (
              <div key={i} className="guesses__guess__card-lg__hor">
                <p>{pool}</p>
                <GuessIndicator item={el} property="pools" />
              </div>
            ))}
          </GuessCardLG>
          <GuessCardSM>
            <p>{el.quality}</p>
            <GuessIndicator item={el} property="quality" />
          </GuessCardSM>
          <GuessCardSM>
            <p>{el.id}</p>
            <GuessIndicator item={el} property="id" />
          </GuessCardSM>
        </Guess>
      ))}
    </div>
  )
}

export default GuessContainer
