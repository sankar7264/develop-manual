import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import Twitter from 'public/assets/icons/twitter.svg'
import theme from 'src/styles/theme'
import Fb from 'public/assets/icons/fb.svg'
import Ig from 'public/assets/icons/ig.svg'
import In from 'public/assets/icons/in.svg'
import Yt from 'public/assets/icons/yt.svg'
import Link from 'next/link'

const useStyles = makeStyles(theme)((props) => ({
  socialMedia: {
    float: 'left',
    padding: '15px',
  },
  copyRight: {
    float: 'left',
    color: theme.palette.presidio.color.NEAR_WHITE,
    [theme.breakpoints.up('md')]: {
      float: 'right',
    },
  },
}))
const SocialMedia = (props) => {
  const { classes } = useStyles(props)
  return (
    <div style={{ marginTop: '35px' }}>
      <div style={{}}>
        <div className={classes.socialMedia}>
          <Link href="#">
            <Twitter />
          </Link>
        </div>
        <div className={classes.socialMedia}>
          <Link href="#">
            <Fb />
          </Link>
        </div>
        <div className={classes.socialMedia}>
          <Link href="#">
            <Ig />
          </Link>
        </div>
        <div className={classes.socialMedia}>
          <Link href="#">
            <In />
          </Link>
        </div>
        <div className={classes.socialMedia}>
          <Link href="#">
            <Yt />
          </Link>
        </div>
      </div>
      <div className={classes.copyRight}>
        <p>&#169; Presidio Trust 2022 | Privacy Policy</p>
      </div>
    </div>
  )
}

export default SocialMedia
