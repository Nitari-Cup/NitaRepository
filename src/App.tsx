import Home from './pages/Home'
import Review from './pages/Review'
import InputReview from './pages/InputReview'
import{Routes, Route} from 'react-router-dom'
import NoMatch from './pages/Nomatch'
import './index.css';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/inputreview"element={<InputReview/>}/>
          <Route path="/review"element={<Review/>}/>
          <Route path="/*"element={<NoMatch/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
