import { useEffect } from 'react'
import { useItemStore, useItemsStore } from './stores/store.ts'

import SearchBox from './components/searchBox/SearchBox'
import Header from './components/header/Header'
import './App.sass'

const App = () => {
  const { item, setItem } = useItemStore()
  const { items, setItems } = useItemsStore()

  useEffect(() => {
    fetch('http://localhost:5173/src/assets/items.json')
      .then(async res => {
        if (!res.ok) {
          throw new Error('Items database not found!')
        } else {
          const data = await res.json()
          setItems(data)
          setItem(data)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <Header />
      <SearchBox />
      <div className="hasGuessed">{}</div>
    </>
  )
}

export default App
