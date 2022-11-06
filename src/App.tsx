import { Link } from 'react-router-dom'
import DesktopNavigation from './layout/DesktopNavigation'
import MobileNavigation from './layout/MobileNavigation'
import Main from './Main'

const App = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
      <Main />
    </>
  )
}

export default App
