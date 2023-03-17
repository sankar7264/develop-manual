import { Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import theme from 'src/styles/theme'
import Card from 'src/components/card/Card'

const useStyles = makeStyles()((props) => ({
  menu: {
    background: theme.palette.presidio.color.NEAR_WHITE,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'scroll',
    zIndex: 100,
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      position: 'absolute',
      top: '4.5rem', // should be equal to the main navigation height
      left: 0,
    },
  },
  menuHeroColumn: {
    flex: 1,
    minWidth: '100%',
    background: theme.palette.presidio.color.LIGHT_BACKGROUND,
    [theme.breakpoints.up('lg')]: {
      minWidth: 'unset',
      padding: theme.spacing(8, 0, 0),
      background: theme.palette.presidio.color.LIGHT_BACKGROUND,
      backgroundImage: 'url("/assets/Mega-Menu-Background.png")',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  menuHeroColumnHeader: {
    color: theme.palette.primary.dark,
    padding: theme.spacing(2, 5, 4, 5),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 3),
    },
  },
  menuColumn: {
    flex: 1,
    padding: theme.spacing(3, 3, 0),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8, 0, 4),
    },
  },
  menuColumnHeader: {
    ...theme.typography.cardTitle,
    color: theme.palette.presidio.color.DARK_GRAY,
  },
  menuColumnHeaderDesktop: {
    color: theme.palette.presidio.color.DARK_GRAY,
  },
  menuColumnItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
  menuItem: {
    ...theme.typography.body.default,
    cursor: 'pointer',
    color: theme.palette.primary.dark,
  },
  menuCardColumn: {
    flex: 1,
    minWidth: '100%',
    padding: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      minWidth: 'unset',
      padding: theme.spacing(8, 0, 4),
    },
  },
}))

export default function MegaMenu(props) {
  const { menuData } = props || {}

  const { classes } = useStyles(props)

  // guards
  if (Object.keys(menuData).length === 0) {
    return null
  }

  const { menuItems, menuHeader, menuCard } = menuData || {}

  const formattedMenuItems = menuItems ? Object.values(menuItems) : []

  // For menu column header logic
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))

  return (
    <div className={classes.menu}>
      <div className={classes.menuHeroColumn}>
        <Typography variant="h4" className={classes.menuHeroColumnHeader}>
          {menuHeader}
        </Typography>
      </div>
      {formattedMenuItems.map((subMenu) => (
        <div className={classes.menuColumn} key={subMenu?.menuid}>
          {/* Note on column header - for large screens and up this is a H5, else it is a card title */}
          {lgUp ? (
            <Typography
              variant="h5"
              className={classes.menuColumnHeaderDesktop}
            >
              {subMenu?.title}
            </Typography>
          ) : (
            <div className={classes.menuColumnHeader}>{subMenu?.title}</div>
          )}
          <div className={classes.menuColumnItems}>
            {subMenu?.menuitem &&
              Object.values(subMenu.menuitem).map((subMenuItem) => (
                <Link key={subMenuItem?.menuid} href={subMenuItem?.url}>
                  <a className={classes.menuItem}>{subMenuItem?.title}</a>
                </Link>
              ))}
          </div>
        </div>
      ))}
      <div className={classes.menuCardColumn}>
        <Card cardData={menuCard} />
      </div>
    </div>
  )
}

MegaMenu.propTypes = {
  menuData: PropTypes.shape({
    menuItems: PropTypes.object,
    menuHeader: PropTypes.string,
    menuCard: PropTypes.object,
  }),
}
