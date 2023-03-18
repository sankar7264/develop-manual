import { Drawer as MuiDrawer, SwipeableDrawer, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from 'src/styles/theme'
import MegaMenu from 'src/components/main-navigation/mega-menu/MegaMenu'
import Search from 'src/components/main-navigation/search-bar/Search'
import FullLogo from 'src/components/icons/FullLogo'
import ChevronLeft from 'src/components/icons/ChevronLeft'
import CrossIcon from 'src/components/icons/Cross'
import MenuIcon from 'src/components/icons/Menu'
import Header from 'src/components/header/Header'

const useStyles = makeStyles()((props) => ({
  toolbarMobileWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1.5rem',
  },
  hamburgerIcon: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20px',
    width: '20px',
    color: theme.palette.primary.dark,
  },
  fullLogoIcon: {
    cursor: 'pointer',
    color: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    width: '100%',
  },
  drawerTopContainer: {
    padding: '2rem',
    background: theme.palette.presidio.color.BAKER_BEACH_GRAY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  drawerCloseIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  drawerContentContainer: {
    padding: '1rem 1.5rem 2rem 1.5rem',
    background: theme.palette.presidio.color.BAKER_BEACH_GRAY,
    color: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  nestedDrawerIconContainer: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  nestedDrawerIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '40px',
    width: '40px',
  },
}))

export default function Drawer(props) {
  const { mainNavigationData = {}, headerData = {} } = props || {}

  const { classes } = useStyles(props)

  const router = useRouter()

  const [menuItems, setMenuItems] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openNestedDrawer, setOpenNestedDrawer] = useState(false)

  // guards
  if (Object.keys(mainNavigationData).length === 0) {
    return null
  }

  // formatting logic for mega menu data
  const formattedMainNavigation =
    Object.values(mainNavigationData?.Megamenu) || []

  let routesArr
  if (formattedMainNavigation.length !== 0) {
    routesArr = formattedMainNavigation.slice(
      0,
      formattedMainNavigation.length - 1
    )
  }

  const iOS =
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.drawerTopContainer}>
          <span
            className={classes.drawerCloseIcon}
            onClick={() => setOpenDrawer(false)}
            onKeyDown={() => setOpenDrawer(false)}
          >
            <CrossIcon height="30" width="30" />
          </span>
        </div>
        <div className={classes.drawerContentContainer}>
          {routesArr &&
            routesArr.map((route) => (
              <Typography
                variant="h4"
                onClick={() => {
                  setOpenNestedDrawer(true)
                  setMenuItems({
                    menuItems: route.menuitem,
                    menuHeader: route.description,
                    menuCard: route.feature__article,
                  })
                }}
                onKeyDown={() => setOpenNestedDrawer(true)}
                key={route.menuid}
                sx={{
                  cursor: 'pointer',
                }}
              >
                {route.title}
              </Typography>
            ))}
        </div>
        {/* Place top header, languages, visitor_center components here */}
        {/* <Header data={headerData} /> */}
        <MuiDrawer
          open={openNestedDrawer}
          onClose={() => {
            setOpenNestedDrawer(false)
            setOpenDrawer(false)
          }}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.nestedDrawerIconContainer}>
            <span
              onClick={() => setOpenNestedDrawer(false)}
              onKeyDown={() => setOpenNestedDrawer(false)}
              className={classes.nestedDrawerIcon}
            >
              <ChevronLeft height="20" width="10" />
            </span>
            <span
              className={classes.nestedDrawerIcon}
              onClick={() => {
                setOpenNestedDrawer(false)
                setOpenDrawer(false)
              }}
              onKeyDown={() => {
                setOpenNestedDrawer(false)
                setOpenDrawer(false)
              }}
            >
              <CrossIcon height="30" width="30" />
            </span>
          </div>
          <MegaMenu menuData={menuItems} />
        </MuiDrawer>
      </SwipeableDrawer>
      <div className={classes.toolbarMobileWrapper}>
        <div
          className={classes.hamburgerIcon}
          onClick={() => setOpenDrawer(!openDrawer)}
          onKeyDown={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon height="14" width="20" />
        </div>
        <div
          className={classes.fullLogoIcon}
          onClick={() => router.push('/')}
          onKeyDown={() => router.push('/')}
        >
          <FullLogo
            height="27"
            width="105"
            color={theme.palette.primary.dark}
          />
        </div>
        <Search
          showIconOnly
          iconHeight="24"
          iconWidth="24"
          iconColor={theme.palette.primary.dark}
        />
      </div>
    </>
  )
}

Drawer.propTypes = {
  mainNavigationData: PropTypes.shape({
    Megamenu: PropTypes.object.isRequired,
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  headerData: PropTypes.object,
}
