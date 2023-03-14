import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import { useState } from 'react'
import PresidioLogo from 'src/components/icons/FullLogo'
import Link from 'next/link'

const useStyles = makeStyles(theme)((props) => ({
  root: {
    '& h4': {
      marginBottom: '0px',
      fontSize: '18px',
      color: theme.palette.presidio.color.BAKER_BEACH_WHITE,
      fontFamily: 'serif',
    },
    '& ul': {
      listStyleType: 'none' /* Remove bullets */,
      padding: 0 /* Remove padding */,
      margin: 0,
    },
    '& a': {
      color: theme.palette.presidio.color.NEAR_WHITE,
    },
    '& li': {
      padding: '5px 0',
    },
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
        <Grid container>
          {menu.map((i) => (
            <Grid item xs={12} sm={4}>
              <ul>
                <li>
                  <h4>{i.title}</h4>
                </li>
                {Object.values(i.menuitem).map((j) => (
                  <li>
                    <Link href="#">{j.title}</Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default BottomMenu
