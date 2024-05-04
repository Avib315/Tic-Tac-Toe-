import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import {MainPage} from "./pages/MainPage/mainPage"
import { WellcomePage } from './pages/WellcomePage/wellcomePage'
import { GamePage } from './pages/GamePage/gamePage'
import { LobbyPage } from './pages/LobbyPage/lobbyPage'
import { CreateNewGamePage } from './pages/CreateNewGamePage/createNewGamePage'
import { ChoosePlayerPage } from './pages/ChoosePlayerPage/choosePlayerPage'

function App() {

  return (
    <>
      <div className='App'>
      <Routes>
        <Route path='/' element={<WellcomePage/>}/>
        <Route path='/manu' element={<MainPage/>}/>
        <Route path='/lobby-game' element={<LobbyPage/>}/>
        <Route path='/choose-player' element={<ChoosePlayerPage/>}/>
        <Route path='/solo-game' element={<GamePage/>}/>
        <Route path='/create-game' element={<CreateNewGamePage/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
