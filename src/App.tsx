import { useEffect, useState } from 'react'
import {
  useHasGuessedStore,
  useItemStore,
  useItemsStore,
  useSelectedItemStore,
  useGuessedItemsStore,
} from './stores/store.ts'

import SearchBox from './components/searchBox/SearchBox'
import Header from './components/header/Header'
import GuessedItem from './components/guessedItems/GuessedItem'
import './App.sass'

const App = () => {
  const [hasRestarted, setHasRestarted] = useState(false)
  const { hasGuessed, setHasGuessed } = useHasGuessedStore()
  const { item, setItem } = useItemStore()
  const { setItems } = useItemsStore()
  const { setSelectedItem, selectedItem } = useSelectedItemStore()
  const { guessedItems, resetGuessedItems } = useGuessedItemsStore()

  console.log(item)
  console.log(selectedItem)
  console.log(hasGuessed)
  console.log(guessedItems)

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
          setItems(data)
          setItem(data)
          resetGuessedItems()
          setSelectedItem(null)
          setHasRestarted(false)
          setHasRestarted(false)
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
  }, [item, selectedItem, setHasGuessed])

  return (
    <>
      <Header />
      <button style={{ margin: '0 auto' }} onClick={() => restart()}>
        Restart
      </button>
      <SearchBox />
      {guessedItems.map(item => (
        <GuessedItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default App
