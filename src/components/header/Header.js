import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Grid } from '@mui/material'
import PresidioLogo from 'src/components/icons/FullLogo'
import theme from 'src/styles/theme'
import SunIcon from 'src/components/icons/SunIcon'
import GlobeIcon from 'src/components/icons/GlobeIcon'
import ClockIcon from 'src/components/icons/ClockIcon'
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
    padding: '0px 10px',
    color: theme.palette.primary.dark,
    '& a': {
      color: theme.palette.primary.dark,
    },
  },
  icon: {
    display: 'grid',
    float: 'left',
    paddingTop: '2px',
  },
  gItem: {
    padding: '0 15px',
  },
  weatherWrapper: {
    display: 'inline-flex',
    float: 'left',
    paddingRight: '5px',
    borderRight: '2px solid #CD4F30',
  },
  languageWrapper: {
    display: 'inline-flex',
    float: 'right',
    paddingRight: '5px',
  },
  visitorWrapper: {
    display: 'inline-flex',
    float: 'left',
    paddingLeft: '13px',
  },
  spanText: {
    fontSize: '16px',
  },
  secondRow: {
    marginTop: '-113px',
  },
  firstRow: {
    marginTop: '-50px',
    float: 'left',
  },
}))

const Header = (props) => {
  const { classes } = useStyles(props)
  const { data } = props
  const [headerData, setHeaderData] = useState(data)
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
              <div className={classes.icon}>
                <SunIcon />
              </div>

              <div className={classes.linkLanguage}>
                <Link href="#">Sunny - 80°F</Link>
              </div>
            </div>
            <div className={classes.visitorWrapper}>
              <div className={classes.icon}>
                <ClockIcon className={classes.icon} />
              </div>
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
            <div className={classes.languageWrapper}>
              <div className={classes.icon}>
                <GlobeIcon className={classes.icon} />
              </div>
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

export default Header
