import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './components/Demo'
import Header from './components/Header'
function App() {

  return(
<>
<Demo />
<Header />
<Header>
  <p>abcd abcd</p>
</Header>
</>
  )
  
}

export default App;
