import './App.css';
import Application from './components/Application';
import Counter from './components/Counter';
import MuiMode from './components/MuiMode';
import Skills from './components/Skills';
import AppProviders from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={['1','2','3']}/> */}
        {/* <Counter /> */}
        <MuiMode/>
      </div>
    </AppProviders>
  )
}

export default App