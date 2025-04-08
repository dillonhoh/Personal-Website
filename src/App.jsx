import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css';
import LifeWheel from './components/LifeWheel.jsx'
import Intro from './components/Intro.jsx'
import ButtonMap from './components/ButtonMap.jsx';
import ContactDisplay from './components/ContactDisplay';
import Copyright
 from './components/Copyright.jsx';
export default function App() {
  return (
    <div className="app-container ">
      <LifeWheel />
      <Intro />
      <ButtonMap />
      <ContactDisplay />
      <Copyright />
    </div>
  )
};


