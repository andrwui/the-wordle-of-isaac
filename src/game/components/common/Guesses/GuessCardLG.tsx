import { type ReactNode, type ReactElement, type CSSProperties } from 'react'

type GuessCardLGrops = {
  children: ReactNode
  style?: CSSProperties
}

const GuessCardLG = ({ children, style }: GuessCardLGrops): ReactElement => {
  return (
    <div
      className="guesses__guess__card-lg"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default GuessCardLG
