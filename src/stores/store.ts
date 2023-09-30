import { create } from 'zustand'
import { type Item } from '../types/Item'
import { getRandomItem } from '../helpers/GetRandomItem'

interface ItemStore {
  item: Item | null
  setItem: (items: Item[]) => void
}

export const useItemsStore = create<ItemsStore>(set => ({
  items: [],
  setItems: (items: Item[]) => {
    set({ items })
  },
}))

interface ItemsStore {
  items: Item[] | null
  setItems: (items: Item[]) => void
}
export const useItemStore = create<ItemStore>(set => ({
  item: null,
  setItem: (items: Item[]) => {
    set({ item: getRandomItem(items) })
  },
}))

interface SelectedItemStore {
  selectedItem: Item | null
  setSelectedItem: (item: Item | null) => void
}
export const useSelectedItemStore = create<SelectedItemStore>(set => ({
  selectedItem: null,
  setSelectedItem: (item: Item | null) => {
    set({ selectedItem: item })
  },
}))

interface HasGuessedStore {
  hasGuessed: boolean | undefined
  setHasGuessed: (hasGuessed: boolean) => void
}
export const useHasGuessedStore = create<HasGuessedStore>(set => ({
  hasGuessed: undefined,
  setHasGuessed: (hasGuessed: boolean) => {
    set({ hasGuessed })
  },
}))

interface GuessedItemsStore {
  guessedItems: Item[]
  setGuessedItems: (guessedItem: Item) => void
  resetGuessedItems: () => void
}
export const useGuessedItemsStore = create<GuessedItemsStore>(set => ({
  guessedItems: [] as Item[],
  setGuessedItems: (guessedItem: Item) => {
    set(state => ({ guessedItems: guessedItem ? [...state.guessedItems, guessedItem] : [...state.guessedItems] }))
  },
  resetGuessedItems: () => {
    set({ guessedItems: [] })
  },
}))

interface triesStore {
  tries: number
  addTry: () => void
  resetTries: () => void
}
export const useTriesStore = create<triesStore>(set => ({
  tries: 0,
  addTry: () => {
    set(state => ({ tries: state.tries + 1 }))
  },
  resetTries: () => {
    set({ tries: 0 })
  },
}))
