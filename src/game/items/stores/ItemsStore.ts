import { create } from 'zustand'

type ItemsStoreState = {
  items: Item[]
  setItems: (items: Item[]) => void

  currentItem: Item | null
  setCurrentItem: (currentItem: Item | null) => void
}

const useItemsStore = create<ItemsStoreState>((set) => ({
  items: [],
  setItems: (items: Item[]) => set({ items }),

  currentItem: null,
  setCurrentItem: (currentItem: Item | null) => set({ currentItem }),
}))

export default useItemsStore
