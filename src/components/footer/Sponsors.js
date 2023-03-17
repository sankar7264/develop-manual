import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Image from 'next/image'
import theme from 'src/styles/theme'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles(theme)((props) => ({
  footerLogoBlock: {
    marginTop: '35px',
  },
  sponsors: {
    color: theme.palette.presidio.color.BAKER_BEACH_WHITE,
    paddingTop: '30px',
  },
  head: {
    fontSize: '1.125rem !important',
  },
}))

const Sponsors = (props) => {
  const { classes } = useStyles(props)
  const { largeLogo, smallLogo } = props
  const lgUp = useMediaQuery(() => theme.breakpoints.up('md'))
  return (
    <div className={classes.root} style={{ paddingBottom: '3%' }}>
      <div className={classes.sponsors}>
        <Typography variant="h4" className={classes.head}>
          Our Sponsors
        </Typography>
      </div>
      <div className={classes.footerLogoBlock}>
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent={lgUp ? 'space-between' : 'space-evenly'}
        >
          {largeLogo.map((i) => (
            <Grid sx={{ pb: 5 }} item xs={6} md={12 / 7} lg="auto">
              <Image
                src={i.logo.url}
                width={i.logo.width}
                height={i.logo.height}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent={lgUp ? 'space-between' : 'space-evenly'}
        >
          {smallLogo.map((i) => (
            <Grid sx={{ pb: 3 }} item xs={6} md={12 / 7} lg="auto">
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
