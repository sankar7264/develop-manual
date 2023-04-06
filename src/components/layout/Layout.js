import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { APPBAR_HEIGHT } from 'src/common/constants'
import Footer from 'src/components/footer/Footer'
import Header from 'src/components/header/Header'
import MainNavigation from 'src/components/main-navigation/MainNavigation'
import theme from 'src/styles/theme'

function Layout(props) {
  const { children } = props
  const { headerData, footerData, mainNavigationData } = props

  const mdUp = useMediaQuery(() => theme.breakpoints.up('md'))
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))
  const xlUp = useMediaQuery(() => theme.breakpoints.up('xl'))

  useEffect(() => {
    // determine additional padding based on newsletter height
    let additionalPadding = 137.5
    if (mdUp) additionalPadding = 124
    if (lgUp) additionalPadding = 87
    if (xlUp) additionalPadding = 89

    const lastModule = document.querySelector('.module:last-child')

    if (!lastModule.classList.contains('no-bottom-padding')) {
      const existingPadding = window.getComputedStyle(lastModule).paddingBottom

      if (parseInt(existingPadding, 10) > 137.5) return

      lastModule.style.paddingBottom = `${
        parseInt(existingPadding, 10) + additionalPadding
      }px`
    }
  }, [])

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
