import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
} from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import NewsLetter from './newsLetter'
import BottomMenu from './bottomMenu'
import SocialMedia from './socialMedia'
import Sponsors from './sponsors'
import theme from '../../styles/theme'

const useStyles = makeStyles(theme)((props) => ({
  footer: {
    backgroundColor: '#1F4D25',
    padding: '15px',
    width: '100%',
  },
  footerContainer: {
    margin: '208px auto',
    maxWidth: '85%',
  },
}))
function Footer(props) {
  const { classes } = useStyles(props)
  return (
    <div className={classes.footerParent}>
      <NewsLetter />
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <BottomMenu />
          <Sponsors />
          <hr />
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Footer
