import Home from './pages/Home'
import Review from './pages/Review'
import InputReview from './pages/InputReview'
import{Routes, Route} from 'react-router-dom'
import NoMatch from './pages/Nomatch'
import List from './pages/List'
import './index.css';

function App() {  
  return (
    <>
      <div className="relative">
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/inputreview"element={<InputReview/>}/>
          <Route path="/review"element={<Review/>}/>
          <Route path="/list"element={<List/>}/>
          <Route path="/*"element={<NoMatch/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
