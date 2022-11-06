import { Routes, Route } from 'react-router-dom'
import Communities from './pages/Communities'
import Events from './pages/Events'
import Home from './pages/Home'
import Profile from './pages/Profile'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
export default Main
