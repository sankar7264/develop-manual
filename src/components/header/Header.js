import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'
import Image from 'next/image'
import { Grid } from '@mui/material'
import theme from '../../styles/theme'
import PresideoLogo from '../../../public/Presidio Logo.svg'

const useStyles = makeStyles(theme)((props) => ({
  headWraper: {
    backgroundColor: theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  headInner: {
    minWidth: '1000px',
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
    [theme.breakpoints.down(720)]: {
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
  gitem: {
    padding: '0 15px',
  },
}))

const header = (props) => {
  const { classes } = useStyles(props)
  return (
    <div className={classes.headWraper}>
      <div>
        <Grid className={classes.headInner} container alignItems="center">
          <Grid className={classes.gitem} item md={4}>
            <PresideoLogo width="200" height="45" fill="#1F4D25" />
          </Grid>
          <Grid className={classes.gitem} item md={8}>
            <div style={{ float: 'right' }}>
              <a className={classes.link}>Rent a Home</a>
              <a className={classes.link}>Lease an office</a>
              <a className={classes.link}>Plan An Event</a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default header
