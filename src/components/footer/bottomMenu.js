import { Grid } from '@mui/material'
import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import presideoLogo from 'public/Full Logo.png'
import { object } from 'prop-types'
import { useState } from 'react'

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
  const [menu, setMenu] = useState(Object.values(props.data.menu_items))
  const { classes } = useStyles(props)
  // eslint-disable-next-line react/destructuring-assignment
  console.log('------>', menu)
  return (
    <>
      <div>
        <Image src={presideoLogo} />
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
