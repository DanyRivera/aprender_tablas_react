import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Learn from './components/Learn';
import Home from './components/Home';

function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/learn/:tabla" element={<Learn />}/>
      </Routes>

    </Router>
  )
}

export default App
