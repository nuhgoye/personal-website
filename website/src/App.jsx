import './App.css'
import heart from './assets/heart.png'
import pfp from './assets/pfp.png'

function App() {
  return (
    <main className="landing">
      <div className="landing-inner">
        <div className="left">
          <h1 className="title">ngoye diop.</h1>
          <img src={heart} alt="heart" className="heart" />
          <p className="subtitle">my life condensed into a website!</p>
          <button className="enter">enter my world</button>
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
