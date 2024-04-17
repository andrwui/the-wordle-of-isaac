import { type ReactElement, type ReactNode } from 'react'

type HintProps = {
  children: ReactNode | ReactElement
  hintName: string
}

const Hint = ({ children, hintName }: HintProps): ReactElement => {
  return (
    <div className="hint">
      <div className="hint__name">{hintName}</div>
      {children}
    </div>
  )
}

export default Hint
