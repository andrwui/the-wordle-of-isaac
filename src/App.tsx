import { type ReactElement } from 'react'

import './index.sass'
import { Navigate, Route, Routes } from 'react-router'
import ItemLayout from './game/items/ItemLayout'

import logo from './assets/images/Logo 1.png'

const App = (): ReactElement => {
  return (
    <div className="main-section">
      <img src={logo} alt="The Wordle of Isaac" />
      <Routes>
        <Route path="/*" element={<Navigate replace to="/item" />} />
        <Route element={<ItemLayout />} path="/item" />
      </Routes>
    </div>
  )
}

export default App
