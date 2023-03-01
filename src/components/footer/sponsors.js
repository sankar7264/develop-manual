import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Image from 'next/image'
import theme from 'src/styles/theme'
import bLogo from 'public/BLOGO_Footer.png'
import sLogo from 'public/SLOGO_footer.png'

const useStyles = makeStyles(theme)((props) => ({
  footerLogoBlock: {
    marginTop: '35px',
  },
  root: {
    '& h4': {
      color: theme.palette.presidio.color.BAKER_BEACH_WHITE,
    },
  },
}))

const Sponsors = (props) => {
  const { classes } = useStyles(props)
  return (
    <div className={classes.root} style={{ paddingBottom: '3%' }}>
      <div>
        <h4>Our Sponsors</h4>
      </div>
      <div className={classes.footerLogoBlock}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid sx={{ pb: 3 }} item xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={bLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={12} md="auto">
            <Image src={bLogo} />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
          <Grid item sx={{ pb: 3 }} xs={6} md="auto">
            <Image src={sLogo} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Sponsors
