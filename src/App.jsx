import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Learn from './components/Learn';
import Results from './components/Results';

function App() {

  const [puntos, setPuntos] = useState([]);

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/learn/:tabla" element={<Learn setPuntos={setPuntos} puntos={puntos} />}/>
        <Route path="/resultados" element={<Results setPuntos={setPuntos} puntos={puntos}/>}/>
        <Route path="*" element={<Home />}/>
      </Routes>

    </Router>
  )
}

export default App
