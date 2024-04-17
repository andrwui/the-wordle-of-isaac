import { type ReactElement, type ReactNode } from 'react'

import './Hints.sass'

type HintContainerProps = {
  children: ReactNode
}

const HintContainer = ({ children }: HintContainerProps): ReactElement => {
  return <div className="hint-container">{children}</div>
}

export default HintContainer
