import { type ReactNode, type ReactElement } from 'react'

type GuessCardLGrops = {
  children: ReactNode
}

const GuessCardLG = ({ children }: GuessCardLGrops): ReactElement => {
  return <div className="guesses__guess__card-lg">{children}</div>
}

export default GuessCardLG
