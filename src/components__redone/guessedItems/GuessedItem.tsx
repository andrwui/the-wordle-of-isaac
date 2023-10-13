import React, { useEffect, useRef, useState } from 'react'
import { useItemStore } from '../../stores/store'
import { type Item } from '../../types/Item'
import GuessedProperty from './GuessedProperty'

interface GuessedItemProp {
  itemProp: Item
}

const GuessedItem = ({ itemProp }: GuessedItemProp) => {
  const { item } = useItemStore()

  const [fontSize, setFontSize] = useState<number>(0)
  const boxRef = useRef<HTMLLIElement | null>(null) as React.RefObject<HTMLLIElement>
  const textRef = useRef<HTMLParagraphElement | null>(null) as React.RefObject<HTMLParagraphElement>

  useEffect(() => {
    const boxWidth = boxRef.current!.clientWidth
    const text = +window.getComputedStyle(textRef.current!).getPropertyValue('font-size').split('px')[0]
    const newFontSize = boxWidth / 5 < text ? boxWidth / 3 : text
    console.log(text, boxWidth / 5)
    setFontSize(newFontSize)
  }, [])

  return (
    <>
      <ul className="">
        <li className={''}>
          <img src={itemProp.image} alt={itemProp.name} className="itemImg" />
        </li>
        <li className="">
          <p>{itemProp.name}</p>
        </li>
        <li className={''}>
          <p>{itemProp.type}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="type" />
        </li>
        <li className={''}>
          <p>{itemProp.DLC}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="DLC" />
        </li>
        <li className={''} ref={boxRef}>
          <ul>
            {itemProp &&
              itemProp.pools.map((pool, index) => (
                <li key={index}>
                  <p ref={textRef} className="asd">
                    {pool}
                  </p>
                  <span>
                    <GuessedProperty item={item!} guessedItem={itemProp} property="pools" pool={pool} />
                  </span>
                </li>
              ))}
          </ul>
        </li>
        <li className={''}>
          <p>{itemProp.quality}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="quality" />
        </li>

        <li className={''}>
          <p>{itemProp.id}</p>
          <GuessedProperty item={item!} guessedItem={itemProp} property="id" />
        </li>
      </ul>
    </>
  )
}

export default GuessedItem
