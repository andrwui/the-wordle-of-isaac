import { type CSSProperties, type ReactElement } from 'react'

type CustomHintProps = {
  onClick: (p: any) => void
  style?: CSSProperties
}

const CustomHint = ({ onClick, style }: CustomHintProps): ReactElement => {
  const questionMark = (
    <div
      onClick={onClick}
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '2em',
        height: '2em',
      }}
    >
      ?
    </div>
  )

  return (
    <div className="hint__custom" style={style}>
      {questionMark}
    </div>
  )
}

export default CustomHint
