import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Typography } from '@mui/material'
import PresidioLogo from 'src/components/icons/FullLogo'
import theme from 'src/styles/theme'
import SunIcon from 'src/components/icons/SunIcon'
import GlobeIcon from 'src/components/icons/GlobeIcon'
import ClockIcon from 'src/components/icons/ClockIcon'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles(theme)((props) => ({
  topHeader: {
    ...theme.typography.body.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px 0px 32px 0px',
    gap: '12px',
    height: '100%',
    background: theme.palette.presidio.color.LIGHT_BACKGROUND,
    flex: 'none',
    order: '0',
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      padding: '24px 156px 60px',
      height: '208px',
    },
  },
  utilityBar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px 24px 0px 24px',
    gap: '10px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      padding: '0px',
      width: '948px',
      flexDirection: 'row',
      height: '27px',
      order: '0',
    },
    [theme.breakpoints.up('xl')]: {
      height: '27px',
      width: '1127px',
    },
  },
  logoAndLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 24px 0px 24px',
    width: '100%',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      padding: '24px 0px 16px',
      width: '948px',
      order: '1',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1127px',
    },
  },
  weatherAndVisitorCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '438px',
    height: '27px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
    padding: '0px',
    gap: '32px',
    [theme.breakpoints.up('lg')]: {
      order: '0',
      flexDirection: 'row',
      gap: '16px',
      padding: '0px 0px 0px 2px',
    },
  },
  languageToggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: '50px 0px',
    gap: '8px',
    height: '27px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      order: '1',
      padding: '0px',
    },
  },
  gloabIcon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '-2px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
  },
  sunIcon: {
    width: '18px',
    height: '18px',
    marginTop: '2px',
    position: 'relative',
    flex: 'none',
    order: '0',
    flexGrow: '0',
  },
  language: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 'none',
    order: '1',
    padding: '4px 0px 2px',
    flexGrow: '0',
    color: theme.palette.primary.dark,
    '& a': {
      color: theme.palette.primary.dark,
      textDecoration: 'underline',
    },
  },
  linkLanguage: {
    color: theme.palette.primary.dark,
    '& a': {
      color: theme.palette.primary.dark,
      textDecoration: 'underline',
    },
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '8px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    '& a': {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
    },
  },
  line: {
    width: '19px',
    height: '0px',
    border: `2px solid ${theme.palette.primary.main}`,
    marginTop: '16px',
    transform: 'rotate(90deg)',
    flex: 'none',
    order: '1',
    flexGrow: '0',
  },
  visitorCenterWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '8px',
    flex: 'none',
    order: '2',
    flexGrow: '0',
  },
  spanText: {
    paddingLeft: '5px',
  },
  visitorCenterTextWrap: {
    marginTop: '4px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      padding: '0px',
    },
  },
  linksText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '8px 0px 4px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    '&: hover': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    '& a': {
      color: theme.palette.presidio.color.DARK_GRAY,
      textDecoration: 'none',
      padding: '8px 8px 4px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      '& a': {
        padding: '8px 8px 4px 8px',
      },
    },
  },
  icon: {
    marginTop: '5px',
    display: 'inline',
    paddingTop: '2px',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
    },
  },
}))

const Header = (props) => {
  const { classes } = useStyles(props)
  const { data = {} } = props || {}
  const [headerData, setHeaderData] = useState(data)
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))

  // guards
  if (Object.keys(headerData).length === 0) {
    return null
  }
  return (
    <div className={classes.topHeader}>
      <div className={classes.utilityBar}>
        <div className={classes.weatherAndVisitorCenter}>
          <div className={classes.weather}>
            <div className={classes.sunIcon}>
              <SunIcon className={classes.icon} />
            </div>
            <div className={classes.language}>
              <Link href="#">Sunny - 80°F</Link>
            </div>
          </div>
          {lgUp && <div className={classes.line} />}
          <div className={classes.visitorCenterWrap}>
            <div className={classes.icon}>
              <ClockIcon />
            </div>
            <div className={classes.visitorCenterTextWrap}>
              <span className={classes.linkLanguage}>
                <Link href="#">{headerData.header.visitor_center.title}</Link>
              </span>
              <span id="openTime" className={classes.spanText}>
                {headerData.header.open_time}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.languageToggle}>
          <div className={classes.gloabIcon}>
            <GlobeIcon className={classes.icon} />
          </div>
          <div className={classes.language}>
            <Link href="#">Languages</Link>
          </div>
        </div>
      </div>
      <div className={classes.logoAndLinks}>
        {lgUp && (
          <a href="#">
            <PresidioLogo
              width="200"
              height="45"
              fill={theme.palette.primary.dark}
            />
          </a>
        )}
        <div className={classes.links}>
          {headerData.header.header_links.map((i) => (
            <div className={classes.linksText}>
              <a href={i.links.url}>
                <Typography variant="h4">
                  {i.links.title.toUpperCase()}
                </Typography>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
