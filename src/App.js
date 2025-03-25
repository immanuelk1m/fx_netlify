import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FX Data API</h1>
        <p>Available endpoints:</p>
        <ul>
          <li><code>/history/USD_KRW_history.json</code></li>
          <li><code>/data/USD_KRW.json</code></li>
        </ul>
      </header>
    </div>
  );
}

export default App;