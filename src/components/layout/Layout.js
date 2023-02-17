function Layout(props) {
  const { children } = props

  return (
    <div>
      {/* Place header here */}

      {/* Push down rest of the app if required here */}

      {children}

      {/* Place footer here */}
    </div>
  )
}

export default Layout
