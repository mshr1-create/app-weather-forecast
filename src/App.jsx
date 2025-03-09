import { useState } from 'react'
import './App.css'

function App() {

  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  // console.log("OpenWeatherMap API Key:", apiKey);

  return (
    <>
        <header>
          <h1>天気予報アプリ</h1>
        </header>
    </>
  )
}

export default App
