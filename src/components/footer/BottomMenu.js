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
    paddingTop: '48px',
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
        <Grid container spacing={5}>
          {menu.map((i) => (
            <Grid item sm={12} md={4}>
              <ul className={classes.unorderedList}>
                <li className={classes.listHead}>
                  <Typography className={classes.typo} variant="h5">
                    {i.title}
                  </Typography>
                </li>

                {Object.hasOwn(i, 'menuitem')
                  ? Object.values(i.menuitem).map((j) => (
                      <li className={classes.list}>
                        <Link className={classes.link} href={j.url}>
                          {j.title}
                        </Link>
                      </li>
                    ))
                  : ''}
              </ul>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default BottomMenu
