import { type ReactNode, type ReactElement } from 'react'

type GuessCardSMProps = {
  children: ReactNode
}

const GuessCardSM = ({ children }: GuessCardSMProps): ReactElement => {
  return <div className="guesses__guess__card-sm">{children}</div>
}

export default GuessCardSM
