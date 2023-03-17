import { useMediaQuery } from '@mui/material'
import { APPBAR_HEIGHT } from 'src/common/constants'
import Footer from 'src/components/footer/Footer'
import Header from 'src/components/header/Header'
import MainNavigation from 'src/components/main-navigation/MainNavigation'
import theme from 'src/styles/theme'

function Layout(props) {
  const { children } = props
  const { headerData, footerData, mainNavigationData } = props

  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))

  return (
    <div>
      {lgUp && <Header data={headerData} />}

      <MainNavigation
        mainNavigationData={mainNavigationData}
        headerData={headerData}
      />

      {/* Push down rest of the app here */}
      <div style={{ marginBottom: APPBAR_HEIGHT }} />

      {children}

      <Footer data={footerData} />
    </div>
  )
}

export default Layout
