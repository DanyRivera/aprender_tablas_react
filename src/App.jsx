import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn';
import Resultados from './components/Resultados';

function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/learn/:tabla" element={<Learn />}/>
        <Route path="/resultados" element={<Resultados />}/>
      </Routes>

    </Router>
  )
}

export default App
