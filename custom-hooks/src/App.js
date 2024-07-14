import './App.css';
import UseIdle from './hooks/UseIdle';
import UseInterval from './hooks/UseInterval';
import UseScroll from './hooks/UseScroll';
import HooksList from './hooks/HooksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Custom Hooks
        <h4>👋 UseIdle</h4>
        <>
          <UseIdle />
        </>
        <h4>👋 UseInterval</h4>
        <>
          <UseInterval />
        </>
        <h4>👋 UseScroll</h4>
        <>
          <UseScroll />
        </>
      </header>
    </div>
  );
}

export default App;
