import { useState } from 'react'
import './App.css'

function App() {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() === '') {
      setError('都市名を入力してください')
      return
    }
    setError('')
    setLoading(true)
    // OpenWeatherMap API を利用して天気情報を取得
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=ja`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('天気情報の取得に失敗しました')
        }
        return response.json()
      })
      .then((data) => {
        console.log('取得した天気情報:', data)
        setWeatherData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setWeatherData(null)
        setLoading(false)
      })
  }

  return (
    <>
      <header>
        <h1>天気予報アプリ</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="都市名を入力"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">検索</button>
        </form>
        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">読み込み中...</p>}
        {weatherData && (
          <div className="weather-info">
            <p>温度: {weatherData.main.temp}°C</p>
            <p>湿度: {weatherData.main.humidity}%</p>
            <p>風速: {weatherData.wind.speed} m/s</p>
            <p>天気: {weatherData.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        )}
      </main>
    </>
  )
}

export default App
