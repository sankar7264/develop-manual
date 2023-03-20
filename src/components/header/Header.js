import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Grid } from '@mui/material'
import PresidioLogo from 'src/components/icons/FullLogo'
import theme from 'src/styles/theme'
import SunIcon from 'src/components/icons/SunIcon'
import GlobeIcon from 'src/components/icons/GlobeIcon'
import ClockIcon from 'src/components/icons/ClockIcon'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles(theme)((props) => ({
  headWrapper: {
    backgroundColor: theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  headInner: {
    [theme.breakpoints.up('md')]: {
      width: '95%',
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: '800px',
      maxWidth: '1127px',
      margin: '0 auto',
      height: '208px',
    },
  },

  link: {
    color: theme.palette.presidio.color.DARK_GRAY,
    fontFamily: 'sans-serif',
    fontSize: '24px',
    textDecoration: 'none',
    padding: '10px',
    cursor: 'pointer',
    display: 'block',
    '& a': {
      color: theme.palette.presidio.color.DARK_GRAY,
      ...theme.typography.h4,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'inline',
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
    display: 'inline',
    paddingTop: '2px',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
    },
  },
  gItem: {
    padding: '0 15px',
    [theme.breakpoints.up('lg')]: {
      padding: '0 15px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 0px',
    },
  },
  weatherWrapper: {
    display: 'inline-flex',
    paddingRight: '5px',
    paddingTop: '50px',
    paddingLeft: '10px',
    [theme.breakpoints.up('lg')]: {
      borderRight: '2px solid #CD4F30',
      paddingTop: '0px',
      paddingLeft: '0px',
    },
  },
  languageWrapper: {
    display: 'inline-flex',
    paddingRight: '5px',
    paddingTop: '50px',
    paddingLeft: '10px',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '0px',
      paddingLeft: '0px',
    },
  },
  visitorWrapper: {
    display: 'block',
    paddingLeft: '10px',
    paddingTop: '30px',
    paddingBottom: '30px',
    [theme.breakpoints.up('lg')]: {
      display: 'inline-flex',
      paddingLeft: '13px',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
  },
  spanText: {
    fontSize: '16px',
  },
  secondRow: {
    paddingTop: '18px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '-113px',
      paddingTop: '0px',
    },
  },
  firstRow: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '-50px',
    },
  },
}))

const Header = (props) => {
  const { classes } = useStyles(props)
  const { data } = props
  const [headerData, setHeaderData] = useState(data)
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))
  return (
    <div className={classes.headWrapper}>
      <div>
        <Grid
          className={classes.headInner}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            className={[classes.gItem, classes.firstRow].join(' ')}
            item
            md={12}
            lg={10}
            order={{ lg: 1, md: 4, sm: 4, xs: 4 }}
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
                {headerData.header.open_time.split(' ').slice(2).join(' ')}
              </span>
            </div>
          </Grid>
          <Grid
            className={[classes.gItem, classes.firstRow].join(' ')}
            item
            md={12}
            lg={2}
            sm={12}
            xs={12}
            order={{ lg: 2, md: 3, sm: 3, xs: 3 }}
          >
            <Grid
              container
              direction="row"
              justifyContent={lgUp ? 'flex-end' : 'flex-start'}
              alignItems="center"
            >
              <Grid item>
                <div className={classes.languageWrapper}>
                  <div className={classes.icon}>
                    <GlobeIcon className={classes.icon} />
                  </div>
                  <span className={classes.linkLanguage}>
                    <Link href="#">Languages</Link>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          {lgUp && (
            <Grid
              className={[classes.gItem, classes.secondRow].join(' ')}
              item
              md={0}
              lg={4}
              order={{ lg: 3, md: 2, sm: 2, xs: 2 }}
            >
              <Link href="#">
                <PresidioLogo width="200" height="45" fill="#1F4D25" />
              </Link>
            </Grid>
          )}
          <Grid
            className={[classes.gItem, classes.secondRow].join(' ')}
            item
            lg={8}
            md={12}
            order={{ lg: 4, md: 1, sm: 1, xs: 1 }}
          >
            <Grid
              container
              direction="row"
              justifyContent={lgUp ? 'flex-end' : 'flex-start'}
              alignItems="center"
            >
              <Grid item>
                <span className={classes.link}>
                  <Link href={headerData.header.header_link_1.url}>
                    {headerData.header.header_link_1.title.toUpperCase()}
                  </Link>
                </span>
                <span className={classes.link}>
                  <Link href={headerData.header.header_link_2.url}>
                    {headerData.header.header_link_2.title.toUpperCase()}
                  </Link>
                </span>
                <span className={classes.link}>
                  <Link href={headerData.header.header_link_3.url}>
                    {headerData.header.header_link_3.title.toUpperCase()}
                  </Link>
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header
