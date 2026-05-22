import { useState } from 'react'
import './App.css'
import heart from './assets/heart.png'
import pfp from './assets/pfp.png'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'page2') {
    return (
      <main className="page2">
        <button className="back" onClick={() => setPage('home')}>
          back
        </button>
        <div className="page2-inner">
          <button className="page2-button">about me</button>
          <button className="page2-button">skills n stuff</button>
          <button className="page2-button">contacts</button>
        </div>
      </main>
    )
  }

  return (
    <main className="landing">
      <div className="landing-inner">
        <div className="left">
          <h1 className="title">ngoye diop.</h1>
          <img src={heart} alt="heart" className="heart" />
          <p className="subtitle">my life condensed into a website!</p>
          <button className="enter" onClick={() => setPage('page2')}>
            enter my world
          </button>
        </div>

        <div className="right">
          <div className="pfp-wrap">
            <img src={pfp} alt="profile" className="pfp" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
