import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <BusinessList />
        
      </header>
    </div>
  );
}

export default App;
