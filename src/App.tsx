import { useEffect, useState } from 'react'
import { useHasGuessedStore, useItemStore, useItemsStore, useSelectedItemStore } from './stores/store.ts'

import SearchBox from './components/searchBox/SearchBox'
import Header from './components/header/Header'
import './App.sass'

const App = () => {
  const [hasRestarted, setHasRestarted] = useState(false)
  const { hasGuessed, setHasGuessed } = useHasGuessedStore()
  const { item, setItem } = useItemStore()
  const { setItems } = useItemsStore()
  const { setSelectedItem, selectedItem } = useSelectedItemStore()

  console.log(item)
  console.log(selectedItem)
  console.log(hasGuessed)

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
          setSelectedItem(null)
          setHasRestarted(false)
          setHasGuessed(false)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }, [hasRestarted])

  return (
    <>
      <Header />
      <button onClick={() => restart()}>Restart</button>
      <SearchBox />
    </>
  )
}

export default App
