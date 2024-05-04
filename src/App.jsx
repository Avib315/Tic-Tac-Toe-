import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import {MainPage} from "./pages/MainPage/mainPage"
import { WellcomePage } from './pages/WellcomePage/wellcomePage'
import { GamePage } from './pages/GamePage/gamePage'
function App() {

  return (
    <>
      <div className='App'>
      <Routes>
        <Route path='/' element={<WellcomePage/>}/>
        <Route path='/manu' element={<MainPage/>}/>
        <Route path='/solo-game' element={<GamePage/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
