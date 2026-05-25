import { useState, useEffect } from 'react'
import './App.css'
import heart from './assets/heart.png'
import pfp from './assets/pfp.png'

function App() {
  const [page, setPage] = useState('home')
  const [landingLoaded, setLandingLoaded] = useState(false)
  const [landingExiting, setLandingExiting] = useState(false)
  const [page2Loaded, setPage2Loaded] = useState(false)
  const [page2Exiting, setPage2Exiting] = useState(false)
  const [aboutLoaded, setAboutLoaded] = useState(false)
  const [aboutExiting, setAboutExiting] = useState(false)
  const [skillsLoaded, setSkillsLoaded] = useState(false)
  const [skillsExiting, setSkillsExiting] = useState(false)
  const [contactsLoaded, setContactsLoaded] = useState(false)
  const [contactsExiting, setContactsExiting] = useState(false)
  const PAGE_TRANSITION_DELAY = 450
  const PAGE_LOADED_DELAY = 50

  useEffect(() => {
    setLandingLoaded(false)
    setPage2Loaded(false)
    setAboutLoaded(false)
    setSkillsLoaded(false)
    setContactsLoaded(false)

    const timer = window.setTimeout(() => {
      if (page === 'home') {
        setLandingLoaded(true)
      } else if (page === 'page2') {
        setPage2Loaded(true)
      } else if (page === 'about') {
        setAboutLoaded(true)
      } else if (page === 'skills') {
        setSkillsLoaded(true)
      } else if (page === 'contacts') {
        setContactsLoaded(true)
      }
    }, PAGE_LOADED_DELAY)

    return () => window.clearTimeout(timer)
  }, [page])

  const handleEnterClick = () => {
    setLandingExiting(true)
    window.setTimeout(() => {
      setPage('page2')
      setLandingExiting(false)
    }, PAGE_TRANSITION_DELAY)
  }

  const goToPageFromPage2 = (target) => {
    setPage2Exiting(true)
    window.setTimeout(() => {
      setPage(target)
      setPage2Exiting(false)
    }, PAGE_TRANSITION_DELAY)
  }

  const goAbout = () => goToPageFromPage2('about')
  const goSkills = () => goToPageFromPage2('skills')
  const goContacts = () => goToPageFromPage2('contacts')

  const goHome = () => {
    setPage2Exiting(true)
    window.setTimeout(() => {
      setPage('home')
      setPage2Exiting(false)
    }, PAGE_TRANSITION_DELAY)
  }

  const goBackToPage2 = () => {
    if (page === 'about') setAboutExiting(true)
    if (page === 'skills') setSkillsExiting(true)
    if (page === 'contacts') setContactsExiting(true)

    window.setTimeout(() => {
      setPage('page2')
      setAboutExiting(false)
      setSkillsExiting(false)
      setContactsExiting(false)
    }, PAGE_TRANSITION_DELAY)
  }

  const goPage2 = () => {
    setPage2Exiting(true)
    window.setTimeout(() => {
      setPage('page2')
      setPage2Exiting(false)
    }, PAGE_TRANSITION_DELAY)
  }

  if (page === 'page2') {
    return (
      <main className={`page2 ${page2Loaded ? 'page2-entered' : 'page2-loading'} ${page2Exiting ? 'page2-exiting' : ''}`}>
        <button type="button" className="back" onClick={goHome}>
          back
        </button>
        <div className="page2-inner">
          <button type="button" className="page2-button" onClick={goAbout}>
            about me
          </button>
          <button type="button" className="page2-button" onClick={goSkills}>
            skills n stuff
          </button>
          <button type="button" className="page2-button" onClick={goContacts}>
            contacts
          </button>
        </div>
      </main>
    )
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const subjecttitle = formData.get('subject') || ''
    const emailValue = formData.get('email') || ''
    const message = formData.get('message') || ''
    const subject = encodeURIComponent(`${subjecttitle}`)
    const body = encodeURIComponent(
      `${message}`
    )
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ngoyediop2@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank', 'noopener')
  }

  if (page === 'skills') {
    return (
      <main className={`skills ${skillsLoaded ? 'skills-entered' : 'skills-loading'} ${skillsExiting ? 'skills-exiting' : ''}`}>
        <button type="button" className="back" onClick={goBackToPage2}>
          back
        </button>
        <div className="skills-grid">
          <article className="skills-card">
            <h2>what’s under my belt</h2>
            <p>c++. python. html. javascript. typescript. css. tailwind css. verilog. sql. matlab.</p>
            <p>bootstrap. react. next.js. node.js. linux. xilinx vivado. git. visual studio code.</p>
            <p>figma. microsoft office.</p>
            <p>communication. teamwork. problem-solving. adaptability. organization. critical thinking. commitment.</p>
          </article>

          <article className="skills-card">
            <h2>my projects</h2>
            <p>completed: this website. button blitz web development project. llm-powered data query system. self-stabilizing mug. room temperature monitor. password lock/unlock system using a fpga circuit.</p>
            <p>in progress: intel’s sustainability timeline website. intel website localization. charity: water game website. intel’s sustainability summit check-in website.</p>
          </article>

          <article className="skills-card">
            <h2>relevent classes i’ve taken</h2>
            <p>freshman year: intro to programming (python). programming for eng (matlab). intro to eng (room temp monitor).</p>
            <p>sophomore year: intro to software eng (c++, button blitz website). circuits. algorithms for eng. intro to logic design (verilog, password lock/unlock system). intro to eng design (self-stabilizing mug).</p>
            <p>junior year: comp org (verilog). software eng principles (data query system).</p>
          </article>
        </div>
        <p className="skills-note">
          psst... feel free to ask me about anything here-- don’t hesitate!
        </p>
      </main>
    )
  }

  if (page === 'contacts') {
    return (
      <main className={`contacts ${contactsLoaded ? 'contacts-entered' : 'contacts-loading'} ${contactsExiting ? 'contacts-exiting' : ''}`}>
        <button type="button" className="back" onClick={goBackToPage2}>
          back
        </button>
        <div className="contacts-inner">
          <div className="contacts-copy">
            <h1>let’s keep in touch!</h1>
            <p>check out my links-- connect with me! :) (keep in mind this is my first website-- stay tuned for a new edition!)</p>
            <div className="contact-links">
              <div className="contact-link">
                <strong>email:</strong>
                <div className="contact-link-content">
                  <a href="mailto:ngoyediop2@gmail.com">ngoyediop2@gmail.com</a>
                  <p className="contact-link-subtext">
                    fastest way to reach me-- shoot me an email for anything.
                  </p>
                </div>
              </div>
              <div className="contact-link">
                <strong>linkedin:</strong>
                <div className="contact-link-content">
                  <a href="https://linkedin.com/in/ngoyediop/" target="_blank" rel="noreferrer">linkedin.com/in/ngoyediop/</a>
                  <p className="contact-link-subtext">
                    connect with me professionally.
                  </p>
                </div>
              </div>
              <div className="contact-link">
                <strong>github:</strong>
                <div className="contact-link-content">
                  <a href="https://github.com/nuhgoye" target="_blank" rel="noreferrer">github.com/nuhgoye</a>
                  <p className="contact-link-subtext">
                    check out my code and projects i've worked on.
                  </p>
                </div>
              </div>
              <div className="contact-link">
                <strong>instagram/discord/spotify:</strong>
                <div className="contact-link-content">
                  <span>@nuhgoye</span>
                  <p className="contact-link-subtext">
                    get a deeper feel on my personal life and interests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <h2>send me a message</h2>
            <form onSubmit={handleContactSubmit}>
              <input className="contact-field" name="subject" type="text" placeholder="email subject" required />
              <input className="contact-field" name="email" type="email" placeholder="your email" required />
              <textarea className="contact-field contact-textarea" name="message" placeholder="message" required />
              <button className="contact-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    )
  }

  if (page === 'about') {
    return (
      <main className={`about ${aboutLoaded ? 'about-entered' : 'about-loading'} ${aboutExiting ? 'about-exiting' : ''}`}>
        <button type="button" className="back" onClick={goBackToPage2}>
          back
        </button>
        <div className="about-grid">
          <article className="about-card">
            <h2>who am i</h2>
            <p>
              my name is ngoye diop (en-goy dee-yop). i am a senior at boston university 
              majoring in computer engineering. my primary goal is to get my degree and break 
              into the tech world. not to toot my own horn, but some may call me funny, bright, 
              a quick learner, and fun to be around. do i agree with these qualities? absolutely. 
              now for my cons, many may call me a stalker, because i check locations 
              on find my iphone very often. is it me being a stalker, or simply attentive?
            </p>
          </article>

          <article className="about-card">
            <h2>interests</h2>
            <p>
              school stuff aside, i play video games (league of legends, valorant, marvel rivals, 
              roblox, minecraft, etc) with my friends. i spend a lot of time eating new foods. i have an unhealthy 
              obsession with the new york times games, especially pips. i jam out to my very diverse 
              music taste. i sing here and there (mainly in the shower). don’t tell anyone, but i 
              dance sometimes, particularly to k-pop choreographies. and i’m actually not that 
              bad of a dancer!
            </p>
          </article>

          <article className="about-card">
            <h2>my life</h2>
            <p>
              i was born and raised in the bronx, new york city, to my two senegalese, muslim, 
              immigrant parents. i love my culture and religion, and embrace both regularly. but i
              promise i still have a personality outside of my background. i have three siblings, and 
              one nephew-- so i'm used to chaos. i was a pretty energetic and bubbly kid growing up, maybe a little annoying 
              too. i was a little shy too-- it took a bit for me to completely be myself around people. not much has changed since then.
            </p>
          </article>
        </div>
      </main>
    )
  }

  return (
    <main className={`landing ${landingLoaded ? 'landing-entered' : 'landing-loading'} ${landingExiting ? 'landing-exiting' : ''}`}>
      <div className="landing-inner">
        <div className="left">
          <h1 className="title">ngoye diop.</h1>
          <img src={heart} alt="heart" className="heart" />
          <p className="subtitle">my life condensed into a website!</p>
          <button type="button" className="enter" onClick={handleEnterClick}>
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
