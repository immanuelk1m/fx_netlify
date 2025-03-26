import './App.css';

function App() {
  const currencies = [
    'USD', 'AUD', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 
    'HKD', 'JPY', 'NZD', 'PHP', 'PLN', 'SGD', 'THB', 'TWD', 'VND'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>FX Data API</h1>
        <p>Available endpoints:</p>
        <h2>Historical Data</h2>
        <ul>
          {currencies.filter(currency => currency !== 'PLN' && currency !== 'VND').map(currency => (
            <li key={`history-${currency}`}>
              <code>{`/history/${currency}_KRW_history.json`}</code>
            </li>
          ))}
        </ul>
        <h2>Current Data</h2>
        <ul>
          {currencies.map(currency => (
            <li key={`current-${currency}`}>
              <code>{`/data/${currency}_KRW.json`}</code>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;