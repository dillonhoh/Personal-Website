import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css';
import LifeWheel from './components/LifeWheel.jsx'
import Intro from './components/Intro.jsx'
import ButtonMap from './components/ButtonMap.jsx';

export default function App() {
  return (
    <div className="app-container m-0 p-0">
      <LifeWheel />
      <Intro />
      <ButtonMap />
    </div>
  )
};


