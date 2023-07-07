import './App.css'
import Home from './home'
import About from './about'
import { Route, Router } from './components/router'

function App() {

  return (
    <Router>
        <Route path='/' component={<Home />} />
        <Route path='/about' component={<About />} />
    </Router>
  )
}

export default App
