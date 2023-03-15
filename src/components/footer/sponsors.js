import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Image from 'next/image'
import theme from 'src/styles/theme'

const useStyles = makeStyles(theme)((props) => ({
  footerLogoBlock: {
    marginTop: '35px',
  },
  root: {
    '& h6': {
      color: theme.palette.presidio.color.BAKER_BEACH_WHITE,
      paddingTop: '30px',
    },
  },
}))

const Sponsors = (props) => {
  const { classes } = useStyles(props)
  const { largeLogo, smallLogo } = props
  return (
    <div className={classes.root} style={{ paddingBottom: '3%' }}>
      <div>
        <Typography variant="h6">Our Sponsors</Typography>
      </div>
      <div className={classes.footerLogoBlock}>
        <Grid container alignItems="center" justifyContent="space-between">
          {largeLogo.map((i) => (
            <Grid sx={{ pb: 3 }} item xs={6} md="auto">
              <Image
                src={i.logo.url}
                width={i.logo.width}
                height={i.logo.height}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="space-between">
          {smallLogo.map((i) => (
            <Grid sx={{ pb: 3 }} item xs={6} md="auto">
              <Image
                src={i.logo.url}
                width={i.logo.width}
                height={i.logo.height}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Sponsors
