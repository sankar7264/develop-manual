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
  gridItem: {
    textAlign: 'center',
  },
  root: {
    paddingBottom: '5px',
  },
}))

const Sponsors = (props) => {
  const { classes } = useStyles(props)
  const { largeLogo = {}, smallLogo = {}, title } = props || {}
  const lgUp = useMediaQuery(() => theme.breakpoints.up('md'))
  return (
    <div className={classes.root}>
      <div className={classes.sponsors}>
        <Typography variant="h5">{title}</Typography>
      </div>
      <div className={classes.footerLogoBlock}>
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent={lgUp ? 'space-between' : 'space-evenly'}
        >
          {largeLogo &&
            largeLogo.map((i) => (
              <Grid
                className={classes.gridItem}
                sx={{ pb: 5 }}
                item
                xs={6}
                md={12 / 7}
                lg="auto"
              >
                <Image
                  src={i.logo.url}
                  width={i.logo.width}
                  height={i.logo.height}
                  alt={i.logo.alt.length > 0 ? i.logo.alt : 'sponsor logo'}
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
          {smallLogo &&
            smallLogo.map((i) => (
              <Grid
                className={classes.gridItem}
                sx={{ pb: 3 }}
                item
                xs={6}
                md={12 / 7}
                lg="auto"
              >
                <Image
                  src={i.logo.url}
                  width={i.logo.width}
                  height={i.logo.height}
                  alt={i.logo.alt.length > 0 ? i.logo.alt : 'sponsor logo'}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  )
}

export default Sponsors
