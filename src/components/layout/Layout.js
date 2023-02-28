import Footer from '../footer/footer'
import Header from '../header/Header'

function Layout(props) {
  const { children } = props

  return (
    <div>
      <Header />

      {/* Push down rest of the app if required here */}

      {children}

      {/* Place footer here */}
      <Footer />
    </div>
  )
}

export default Layout
