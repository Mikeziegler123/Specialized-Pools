import React, { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.js'
import LogoCartLoginRow from './LogoCartLoginRow'
import Home from './Home.js'
import Menu from './Menu'

function App() {
  const [selectedMode, setSelectedMode] = useState('home')
  return (
    <div className='container app'>

      {/* Top Row: Home Page icon, cart, popout menu */}
      <div className="row ">
        <LogoCartLoginRow />
      </div>

      {/* Second Row: Main Menu */}
      <div className="row">
        <Menu />
      </div>


      {/* Third Row: Focus: Side Menu and conditional component rendering*/}
      <div className="row">
        <div className="col-2 no-gutters ">
        <Sidebar setSelectedMode={setSelectedMode} />
        </div>
        <div className="col-8">
        <Home selectedMode={selectedMode} />
        </div>
      </div>

    </div>
  )
}

export default App
