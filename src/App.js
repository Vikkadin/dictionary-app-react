import Dictionary from './components/Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header"><h1>Dictionary</h1></header>
      <main>
        <Dictionary />
      </main>
      <footer className='text-center'>
        Coded by <a href="https://www.linkedin.com/in/vika-kelii/">Vika Kelii</a> and is <a href="https://github.com/Vikkadin/dictionary-app-react">open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
