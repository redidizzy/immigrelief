import React from 'react'

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  return <div className="mt-10">{children}</div>
}

export default Layout
