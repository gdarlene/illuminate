import React, { useState } from 'react'

function App() {
  const [transcription, setTranscription] = useState("")
  const [responseAi,setResponseAi]=useState("")
  
  return (
    <div className='contents'>
      <div className='navbar min-h-screen flex flex-col bg-slate-50 text-gray-900'>
        <div className='logo'>
          <h1 className='brandName'>Illuminate</h1>
          <p className='moto'>Be My Sight and Help me Digitally!</p>
        </div>
        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Intergrated Apps</li>
          </ul>
        </div>
      </div>
      <main className='flex flex-1'>

        <section className='w-1/2 p4 border-r bg-white facebook'>
        <span className='facebookLogo'>
          <img src="/facebook.png" alt="facebook logo" className='w-8 h-8'/>
        </span>
        <span className='menuItems'>
          <ul>
            <li className="icons"><link rel="stylesheet" href="#"/><abbr title="menu"><img src="/menu.png" alt="menu" className='w-8 h-8' /></abbr></li>
            <li className="icons"><link rel="stylesheet" href="#"/><abbr title="menu"><img src="/messenger.png" alt="menu" className='w-8 h-8' /></abbr></li>
            <li className="icons"><link rel="stylesheet" href="#"/><abbr title="menu"><img src="/notifications.png" alt="menu" className='w-8 h-8' /></abbr></li>
            <li className="icons"><link rel="stylesheet" href="#"/><abbr title="menu"><img src="/user.png" alt="menu" className='w-8 h-8' /></abbr></li>
          </ul>
        </span>
        </section>
      </main>
    </div>
  )
}

export default App