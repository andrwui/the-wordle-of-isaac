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
