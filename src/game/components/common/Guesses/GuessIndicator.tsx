import arrow from '../../../../assets/images/arrow.png'
import cross from '../../../../assets/images/cross.png'
import check from '../../../../assets/images/check.png'
import { type ReactElement } from 'react'
import useItemsStore from '../../../items/stores/ItemsStore'

type GuessIndicatorProps = { item: Item; property: keyof Item }

const ArrowUp = (): ReactElement => (
  <img src={arrow} style={{ rotate: '0deg' }} className="indicator" />
)
const ArrowDown = (): ReactElement => (
  <img src={arrow} style={{ rotate: '180deg' }} className="indicator" />
)
const Check = (): ReactElement => <img src={check} className="indicator" />
const Cross = (): ReactElement => <img src={cross} className="indicator" />

const GuessIndicator = ({
  item,
  property,
}: GuessIndicatorProps): ReactElement => {
  const { currentItem } = useItemsStore()
  if (currentItem) {
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
        return <img src={check} />
      }
    }

    if (property === 'pools' || property === 'type') {
      if (currentItem[property] === item[property]) {
        return <Check />
      } else {
        return <Cross />
      }
    }
  }
  return <></>
}

export default GuessIndicator
