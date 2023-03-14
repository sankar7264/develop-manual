import Footer from '../footer/footer'
import Header from '../header/Header'

function Layout(props) {
  const { children } = props
  const { headerData, footerData } = props
  return (
    <div>
      <Header data={headerData} />

      {/* Push down rest of the app if required here */}

      {children}

      {/* Place footer here */}
      <Footer data={footerData} />
    </div>
  )
}

export default Layout
