import { create } from 'zustand'

type GuessesStoreType = {
  guesses: Item[]
  hasGuessed: boolean
  setHasGuessed: (hasGuessed: boolean) => void
  addGuess: (guess: Item) => void
  resetGuesses: () => void
}

const initialState = {
  guesses: [],
}

const useGuessesStore = create<GuessesStoreType>((set) => ({
  guesses: [],
  hasGuessed: false,
  setHasGuessed: (hasGuessed: boolean) => set({ hasGuessed }),
  addGuess: (guess: Item) =>
    set((state) => ({ guesses: [...state.guesses, guess] })),
  resetGuesses: () => set({ ...initialState }),
}))

export default useGuessesStore
