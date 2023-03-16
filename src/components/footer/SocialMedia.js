import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import Twitter from 'src/components/icons/TwitterIcon'
import theme from 'src/styles/theme'
import Fb from 'src/components/icons/Fb'
import Ig from 'src/components/icons/Ig'
import In from 'src/components/icons/In'
import Yt from 'src/components/icons/Yt'
import Link from 'next/link'
import { Grid } from '@mui/material'

const useStyles = makeStyles(theme)((props) => ({
  socialMedia: {
    display: 'inline-flex',
    padding: '12px',
    marginTop: '17px',
  },
  copyRight: {
    justifyContent: 'start',
    padding: '12px',
    fontSize: '12px',
    color: theme.palette.presidio.color.NEAR_WHITE,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'end',
      marginTop: '17px',
    },
    '& a': {
      color: theme.palette.presidio.color.NEAR_WHITE,
      marginLeft: '5px',
    },
  },
  link: {
    color: theme.palette.presidio.color.NEAR_WHITE,
  },
}))
const SocialMedia = (props) => {
  const { classes } = useStyles(props)
  const { data } = props
  return (
    <Grid container>
      <Grid item md={6}>
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item>
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid
          className={classes.copyRight}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <span>
              &#169; {data.footer.copy.slice(6)} |
              <Link href={data.footer['privacy_&_policy'].url}>
                {data.footer['privacy_&_policy'].title}
              </Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SocialMedia
