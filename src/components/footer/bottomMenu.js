import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import { useState } from 'react'
import PresideoLogo from 'public/assets/icons/logo2.svg'

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
        {/* <Image src={presideoLogo} /> */}
        <PresideoLogo width="200" height="45" />
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
                    <a href="#">{j.title}</a>
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
