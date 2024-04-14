import arrow from '../../../../assets/images/arrow.png'
import cross from '../../../../assets/images/cross.png'
import check from '../../../../assets/images/check.png'
import { type ReactElement } from 'react'
import useItemsStore from '../../../items/stores/ItemsStore'

type GuessIndicatorProps = {
  item: Item
  property: keyof Item
  pool?: string
  size?: string
}

const GuessIndicator = ({
  item,
  property,
  pool,
  size,
}: GuessIndicatorProps): ReactElement => {
  const ArrowUp = (): ReactElement => (
    <img
      src={arrow}
      style={{ rotate: '0deg', width: size && size, height: size && size }}
      className="indicator"
    />
  )
  const ArrowDown = (): ReactElement => (
    <img
      src={arrow}
      style={{ rotate: '180deg', width: size && size, height: size && size }}
      className="indicator"
    />
  )
  const Check = (): ReactElement => (
    <img
      src={check}
      style={{
        width: size && size,
        height: size && size,
      }}
      className="indicator"
    />
  )
  const Cross = (): ReactElement => (
    <img
      src={cross}
      style={{
        width: size && size,
        height: size && size,
      }}
      className="indicator"
    />
  )

  const { currentItem } = useItemsStore()
  if (currentItem) {
    console.log(currentItem[property])

    if (property === 'quality' || property === 'id') {
      if (currentItem[property] > item[property]) {
        return <ArrowUp />
      } else if (currentItem[property] < item[property]) {
        return <ArrowDown />
      } else {
        return <Check />
      }
    }

    if (property === 'dlc') {
      const DLCs = ['Rebirth', 'Afterbirth', 'Afterbirth +', 'Repentance']
      const currentItemDLC = DLCs.indexOf(currentItem.dlc)
      const itemDLC = DLCs.indexOf(item.dlc)

      if (currentItemDLC > itemDLC) {
        return <ArrowUp />
      } else if (currentItemDLC < itemDLC) {
        return <ArrowDown />
      } else {
        return <Check />
      }
    }

    if (property === 'type') {
      if (currentItem[property] === item[property]) {
        return <Check />
      } else {
        return <Cross />
      }
    }
    if (property === 'pools') {
      if (pool) {
        if (currentItem.pools.includes(pool)) {
          return <Check />
        } else {
          return <Cross />
        }
      }
    }
  }
  return <></>
}

export default GuessIndicator
