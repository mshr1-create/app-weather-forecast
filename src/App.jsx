import { useState } from 'react'
import './App.css'

function App() {

  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('都市名を入力してください');
    return;
    }
    console.log('検索する都市:', city);
    // API呼び出し処理をここに追加する予定
  };
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
      </main>
    </>
  )
}

export default App
