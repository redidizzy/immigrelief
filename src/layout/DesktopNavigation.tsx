import { NavLink } from 'react-router-dom'

const DesktopNavigation = () => {
  const defaultClassName = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  const generateClassName = ({ isActive }: { isActive: boolean }) =>
    `${defaultClassName} ${isActive ? 'bg-gray-900 text-white' : undefined}`

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-8 w-auto lg:hidden"
              src="IMMG SVG1.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="IMMG SVG1.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <NavLink to="/" aria-current="page" className={generateClassName}>
                Home
              </NavLink>

              <NavLink to="/communities" className={generateClassName}>
                Communities
              </NavLink>

              <NavLink to="/events" className={generateClassName}>
                Events
              </NavLink>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="relative ml-3">
            <div>
              <NavLink
                to="/profile"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation
