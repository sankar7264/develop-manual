import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Grid } from '@mui/material'
import PresideoLogo from 'public/assets/icons/Full-Logo.svg'
import theme from 'src/styles/theme'
import SunIcon from 'public/assets/icons/sun.svg'
import GloabIcon from 'public/assets/icons/Globe-Icon.svg'
import CloabIcon from 'public/assets/icons/clock.svg'

const useStyles = makeStyles(theme)((props) => ({
  headWraper: {
    backgroundColor: theme.palette.presidio.color.LIGHT_BACKGROUND,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      display: 'none',
    },
  },
  headInner: {
    minWidth: '800px',
    maxWidth: '1124px',
    margin: '0 auto',
    height: '208px',
  },
  socialMedia: {
    float: 'left',
    padding: '15px',
    width: '40%',
  },
  copyRight: {
    float: 'right',
    width: '60%',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      float: 'left',
    },
  },
  link: {
    color: theme.palette.presidio.color.DARK_GRAY,
    fontFamily: 'sans-serif',
    fontSize: '24px',
    textDecoration: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
  linkLanguage: {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    padding: '10px',
    color: theme.palette.primary.dark,
  },
  icon: {
    transform: 'translate(0px, 3px)',
  },
  gitem: {
    padding: '0 15px',
  },
  weaterWraper: {
    display: 'inline',
    paddingRight: '5px',
    borderRight: '2px solid #CD4F30',
  },
  visitorWraper: {
    display: 'inline',
    paddingLeft: '13px',
  },
  spanText: {
    fontSize: '16px',
  },
  secondRow: {
    marginTop: '-113px',
  },
  firstRow: {
    marginTop: '-70px',
  },
}))

const header = (props) => {
  const { classes } = useStyles(props)
  return (
    <div className={classes.headWraper}>
      <div>
        <Grid className={classes.headInner} container alignItems="center">
          <Grid
            className={[classes.gitem, classes.firstRow].join(' ')}
            item
            md={8}
          >
            <div className={classes.weaterWraper}>
              <SunIcon className={classes.icon} />
              <a className={classes.linkLanguage} href="#">
                Sunny - 80°F
              </a>
            </div>
            <div className={classes.visitorWraper}>
              <CloabIcon className={classes.icon} />
              <a className={classes.linkLanguage} href="#">
                Visitor Center
              </a>
              <span className={classes.spanText}>Open daily 10 am - 5 pm</span>
            </div>
          </Grid>
          <Grid
            className={[classes.gitem, classes.firstRow].join(' ')}
            item
            md={4}
          >
            <div style={{ float: 'right' }}>
              <GloabIcon className={classes.icon} />
              <a className={classes.linkLanguage} href="#">
                Languages
              </a>
            </div>
          </Grid>
          <Grid
            className={[classes.gitem, classes.secondRow].join(' ')}
            item
            md={4}
          >
            <PresideoLogo width="200" height="45" fill="#1F4D25" />
          </Grid>
          <Grid
            className={[classes.gitem, classes.secondRow].join(' ')}
            item
            md={8}
          >
            <div style={{ float: 'right' }}>
              <a className={classes.link} href="#">
                Rent a Home
              </a>
              <a className={classes.link} href="#">
                Lease an office
              </a>
              <a className={classes.link} href="#">
                Plan An Event
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default header
