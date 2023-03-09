import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Grid } from '@mui/material'
import PresidioLogo from 'public/assets/icons/Full-Logo.svg'
import theme from 'src/styles/theme'
import SunIcon from 'public/assets/icons/sun.svg'
import GlobeIcon from 'public/assets/icons/Globe-Icon.svg'
import ClockIcon from 'public/assets/icons/clock.svg'
import headerData from 'src/common/headerData.json'
import Link from 'next/link'

const useStyles = makeStyles(theme)((props) => ({
  headWrapper: {
    backgroundColor: theme.palette.presidio.color.LIGHT_BACKGROUND,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
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
    float: 'left',
    width: '60%',
    [theme.breakpoints.up('xs')]: {
      float: 'right',
    },
  },
  link: {
    color: theme.palette.presidio.color.DARK_GRAY,
    fontFamily: 'sans-serif',
    fontSize: '24px',
    textDecoration: 'none',
    padding: '10px',
    cursor: 'pointer',
    '& a': {
      color: theme.palette.presidio.color.DARK_GRAY,
    },
  },
  linkLanguage: {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    padding: '10px',
    color: theme.palette.primary.dark,
    '& a': {
      color: theme.palette.primary.dark,
    },
  },
  icon: {
    transform: 'translate(0px, 3px)',
  },
  gItem: {
    padding: '0 15px',
  },
  weatherWrapper: {
    display: 'inline',
    paddingRight: '5px',
    borderRight: '2px solid #CD4F30',
  },
  visitorWrapper: {
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
    <div className={classes.headWrapper}>
      <div>
        <Grid className={classes.headInner} container alignItems="center">
          <Grid
            className={[classes.gItem, classes.firstRow].join(' ')}
            item
            md={8}
          >
            <div className={classes.weatherWrapper}>
              <SunIcon className={classes.icon} />
              <span className={classes.linkLanguage}>
                <Link href="#">Sunny - 80°F</Link>
              </span>
            </div>
            <div className={classes.visitorWrapper}>
              <ClockIcon className={classes.icon} />
              <span className={classes.linkLanguage}>
                <Link href="#">Visitor Center</Link>
              </span>

              <span className={classes.spanText}>
                {headerData.header.open_time}
              </span>
            </div>
          </Grid>
          <Grid
            className={[classes.gItem, classes.firstRow].join(' ')}
            item
            md={4}
          >
            <div style={{ float: 'right' }}>
              <GlobeIcon className={classes.icon} />
              <span className={classes.linkLanguage}>
                <Link href="#">Languages</Link>
              </span>
            </div>
          </Grid>
          <Grid
            className={[classes.gItem, classes.secondRow].join(' ')}
            item
            md={4}
          >
            <Link href="#">
              <PresidioLogo width="200" height="45" fill="#1F4D25" />
            </Link>
          </Grid>
          <Grid
            className={[classes.gItem, classes.secondRow].join(' ')}
            item
            md={8}
          >
            <div style={{ float: 'right' }}>
              <span className={classes.link}>
                <Link href={headerData.header.header_link_1.url}>
                  {headerData.header.header_link_1.title}
                </Link>
              </span>
              <span className={classes.link}>
                <Link href={headerData.header.header_link_1.url}>
                  {headerData.header.header_link_2.title}
                </Link>
              </span>
              <span className={classes.link}>
                <Link href={headerData.header.header_link_3.url}>
                  {headerData.header.header_link_3.title}
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default header
