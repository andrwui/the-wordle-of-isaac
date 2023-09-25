import { type Item } from '../types/Item'

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const getRandomItem = (items: Item[]) => {
  const randomIndex = getRandomNumber(1, items.length + 1)
  return items[randomIndex]
}
