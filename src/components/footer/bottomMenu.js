import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  ThemeProvider,
} from '@mui/material'
import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/theme'
import presideoLogo from '../../../public/Full Logo.png'

const useStyles = makeStyles(theme)((props) => ({
  root: {
    '& h4': {
      marginBottom: '0px',
      fontSize: '18px',
      color: '#F9F1DB',
      fontFamily: 'serif',
    },
    '& ul': {
      listStyleType: 'none' /* Remove bullets */,
      padding: 0 /* Remove padding */,
      margin: 0,
    },
    '& a': {
      color: '#FEFCF8',
    },
    '& li': {
      padding: '5px 0',
    },
  },
}))

const BottomMenu = (props) => {
  const { classes } = useStyles(props)
  return (
    <>
      <div>
        <Image src={presideoLogo} />
      </div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <h4>Visit</h4>
              </li>
              <li>
                <a href="#">Contact & Feedback</a>
              </li>
              <li>
                <a href="#">Getting Here</a>
              </li>
              <li>
                <a href="#">Maps</a>
              </li>
              <li>
                <a href="#">Visitor Center</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <h4>Explore</h4>
              </li>
              <li>
                <a href="#">Park Attractions</a>
              </li>
              <li>
                <a href="#">Presidio Tunnel Tops</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
              <li>
                <a href="#">Trails</a>
              </li>
              <li>
                <a href="#">Education & Youth Programs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <ul>
              <li>
                <h4>Leasing</h4>
              </li>
              <li>
                <a href="#">Commercial Tenant Portal</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <h4>Weddings & Events</h4>
              </li>
              <li>
                <a href="#">Contact & Feedback</a>
              </li>
              <li>
                <a href="#">Getting Here</a>
              </li>
              <li>
                <a href="#">Maps</a>
              </li>
              <li>
                <a href="#">Visitor Center</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <h4>About the Presidio</h4>
              </li>
              <li>
                <a href="#">Park Attractions</a>
              </li>
              <li>
                <a href="#">Presidio Tunnel Tops</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
              <li>
                <a href="#">Trails</a>
              </li>
              <li>
                <a href="#">Education & Youth Programs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <h4>Legal Links</h4>
              </li>
              <li>
                <a href="#">Commercial Tenant Portal</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
              <li>
                <a href="#">Trails</a>
              </li>
              <li>
                <a href="#">Education & Youth Programs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default BottomMenu
