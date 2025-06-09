import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
     <Navbar />
    </main>
  );
}

export default App
