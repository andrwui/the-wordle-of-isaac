import { type ReactElement } from 'react'

import './Hints.sass'

type HintContainerProps = {
  children: ReactElement
}

const HintContainer = ({ children }: HintContainerProps): ReactElement => {
  return <div className="hint-container">{children}</div>
}

export default HintContainer
