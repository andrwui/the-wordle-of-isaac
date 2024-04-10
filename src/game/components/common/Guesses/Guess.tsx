import { type ReactElement, type ReactNode } from 'react'
import './Guesses.sass'

type GuessRowProps = {
  children: ReactNode
}

const Guess = ({ children }: GuessRowProps): ReactElement => {
  return <div className="guesses__guess">{children}</div>
}

export default Guess
