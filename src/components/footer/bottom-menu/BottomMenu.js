import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import { useState } from 'react'
import PresidioLogo from 'src/components/icons/FullLogo'
import Link from 'next/link'

const useStyles = makeStyles(theme)((props) => ({
  root: {
    '& a': {
      color: theme.palette.presidio.color.NEAR_WHITE,
      ...theme.typography.body.inlineLink,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px',
    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingLeft: '0',
    },
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '48px',
    gap: '16px',
    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 33.333333%',
    },
  },
  list: {
    padding: '5px 0',
  },
  unorderedList: {
    listStyleType: 'none' /* Remove bullets */,
    padding: 0 /* Remove padding */,
    margin: 0,
  },
  typo: {
    color: theme.palette.presidio.color.BAKER_BEACH_WHITE,
  },
}))

const BottomMenu = (props) => {
  const { data } = props
  const [menu, setMenu] = useState(Object.values(data))
  const { classes } = useStyles(props)
  return (
    <>
      <div>
        <PresidioLogo color={theme.palette.presidio.color.NEAR_WHITE} />
      </div>
      <div className={classes.root}>
        <div className={classes.topRow}>
          {menu.map((i, iIndex) => (
            <div key={iIndex} className={classes.menuItem}>
              <ul className={classes.unorderedList}>
                <li className={classes.listHead}>
                  <Typography className={classes.typo} variant="h5">
                    {i.title}
                  </Typography>
                </li>

                {Object.hasOwn(i, 'menuitem')
                  ? Object.values(i.menuitem).map((j, jIndex) => (
                      <li key={jIndex} className={classes.list}>
                        <Link className={classes.link} href={j.url}>
                          {j.title}
                        </Link>
                      </li>
                    ))
                  : ''}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BottomMenu
