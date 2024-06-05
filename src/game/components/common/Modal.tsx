import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react'
type ModalProps = {
  isVisible: boolean
  children: ReactNode
  className?: string
  styles?: CSSProperties
  duration?: number
}

const Modal = ({
  isVisible,
  children,
  className,
  styles,
  duration,
}: ModalProps): ReactElement => {
  // const modalClass = isVisible ? 'modal animate-in' : 'modal animate-out'
  const [shouldRender, setShouldRender] = useState<boolean>()
  const [isCurrentlyVisible, setIsCurrentlyVisible] = useState<boolean>()

  useEffect(() => {
    let timeout: number
    if (isVisible) {
      setShouldRender(isVisible)
      timeout = setTimeout(() => {
        setIsCurrentlyVisible(isVisible)
      }, duration ?? 200)
    } else {
      setIsCurrentlyVisible(isVisible)
      timeout = setTimeout(() => {
        setShouldRender(isVisible)
      }, duration ?? 200)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isVisible])

  return (
    <>
      {shouldRender && (
        <div
          style={{
            opacity: isCurrentlyVisible ? '1' : '0',
            background: '#00000025',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100dvw',
            height: '100dvh',
            display: 'grid',
            placeItems: 'center',
            zIndex: '99999999',
            backdropFilter: 'blur(2px)',
          }}
        >
          <div
            className={`${className ?? ''}`}
            style={{
              ...styles,
              opacity: isCurrentlyVisible ? '1' : '0',
              scale: isCurrentlyVisible ? '1' : '0',
              transition: `all ${duration ?? 200}ms ease`,
              background: 'url("/src/assets/images/postit_lg.png") no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
