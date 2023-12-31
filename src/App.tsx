import { useEffect, useState } from 'react'

import { lightTheme } from '../src/styles/light.ts'
import { ThemeUIProvider } from 'theme-ui'

import {
  useHasGuessedStore,
  useItemStore,
  useItemsStore,
  useSelectedItemStore,
  useGuessedItemsStore,
  useTriesStore,
} from './stores/store.ts'

import SearchBox from './components__redone/searchBox/SearchBox'
import Header from './components__redone/header/Header'
import GuessedItem from './components__redone/guessedItems/GuessedItem'

const App = () => {
  const [hasRestarted, setHasRestarted] = useState(false)
  const { resetTries, tries } = useTriesStore()
  const { setHasGuessed } = useHasGuessedStore()
  const { item, setItem } = useItemStore()
  const { setItems } = useItemsStore()
  const { setSelectedItem, selectedItem } = useSelectedItemStore()
  const { guessedItems, resetGuessedItems } = useGuessedItemsStore()

  const restart = () => {
    setHasRestarted(true)
  }

  useEffect(() => {
    fetch('http://localhost:5173/src/assets/items.json')
      .then(async res => {
        if (!res.ok) {
          throw new Error('Items database not found!')
        } else {
          const data = await res.json()
          resetTries()
          setItems(data)
          setItem(data)
          resetGuessedItems()
          setSelectedItem(null)
          setHasRestarted(false)
          console.log('SELECTED ITEM: ', item!.name)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }, [hasRestarted])

  useEffect(() => {
    if (item?.id === selectedItem?.id) {
      setHasGuessed(true)
    } else {
      setHasGuessed(false)
    }
  }, [selectedItem, setHasGuessed])

  return (
    <>
      <ThemeUIProvider theme={lightTheme}>
        <Header />
        {/* <button onClick={() => restart()} id="RESTART">
          Restart
        </button>
        <SearchBox />

        <div className="">
          {guessedItems && guessedItems.map(item => <GuessedItem key={item.id} itemProp={item} />)}
        </div> */}
      </ThemeUIProvider>
    </>
  )
}

export default App
