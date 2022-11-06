import { Link } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">
        <Link
          to="#"
          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Dashboard
        </Link>

        <Link
          to="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Team
        </Link>

        <Link
          to="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </Link>

        <Link
          to="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Calendar
        </Link>
      </div>
    </div>
  )
}

export default MobileNavigation
