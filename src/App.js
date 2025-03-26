import './App.css';

function App() {
  const currencies = [
    'USD', 'AUD', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 
    'HKD', 'JPY', 'NZD', 'PHP', 'SGD', 'THB', 'TWD'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>FX Data API</h1>
        <p>Available endpoints:</p>
        <h2>Historical Data</h2>
        <ul>
          {currencies.map(currency => (
            <li key={currency}>
              <code>{`/history/${currency}_KRW_history.json`}</code>
            </li>
          ))}
        </ul>
        <h2>Current Data</h2>
        <ul>
          <li><code>/data/USD_KRW.json</code></li>
        </ul>
      </header>
    </div>
  );
}

export default App;