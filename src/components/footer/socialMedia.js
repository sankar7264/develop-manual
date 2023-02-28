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
import v1 from '../../../public/Vector-1.png'
import v2 from '../../../public/Vector.png'
import v3 from '../../../public/Vector-2.png'
import v4 from '../../../public/Vector-3.png'
import v5 from '../../../public/yt.png'

const useStyles = makeStyles(theme)((props) => ({
  socialMedia: {
    float: 'left',
    padding: '15px',
  },
  copyRight: {
    float: 'right',
    color: theme.palette.presidio.color.NEAR_WHITE,
    [theme.breakpoints.down(720)]: {
      float: 'left',
    },
  },
}))
const SocialMedia = (props) => {
  const { classes } = useStyles(props)
  return (
    <div style={{ marginTop: '35px' }}>
      <div style={{}}>
        <div className={classes.socialMedia}>
          <Image src={v1} />
        </div>
        <div className={classes.socialMedia}>
          <Image src={v2} />
        </div>
        <div className={classes.socialMedia}>
          <Image src={v3} />
        </div>
        <div className={classes.socialMedia}>
          <Image src={v4} />
        </div>
        <div className={classes.socialMedia}>
          <Image src={v5} />
        </div>
      </div>
      <div className={classes.copyRight}>
        <p>&#169; Presidio Trust 2022 | Privacy Policy</p>
      </div>
    </div>
  )
}

export default SocialMedia
