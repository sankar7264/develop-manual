import { Box, Grid, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import theme, { FONTS } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'
import CardQuickLink from '../cardQuickLink/CardQuickLink'

const useStyles = makeStyles()((defaultTheme, props) => ({
  container: {
    minHeight: '100vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: '40px 24px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '64px 40px',
      display: 'flex',
      alignItems: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '64px 157px',
    },

    backgroundColor:
      props.version === 'cypress-green'
        ? theme.palette.secondary.dark
        : theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  title: {
    color:
      props.version === 'cypress-green'
        ? theme.palette.presidio.color.NEAR_WHITE
        : theme.palette.primary.dark,
  },
  description: {
    fontFamily: FONTS.TABLET_GOTHIC,
    color:
      props.version === 'cypress-green'
        ? theme.palette.presidio.color.NEAR_WHITE
        : theme.palette.primary.dark,
    padding: '8px 0 0 0',
    [theme.breakpoints.up('lg')]: {
      padding: '16px 0 0 0',
    },
  },
  gridItemText: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  gridItemLink: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  containerText: {
    margin: '0',
    [theme.breakpoints.up('lg')]: {
      margin: props.layoutType === 'right' ? '0 0 0 53px' : '0 53px 0 0',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layoutType === 'right' ? '0 0 0 60px' : '0 60px 0 0',
    },
  },
  containerLink: {
    [theme.breakpoints.up('sm')]: {
      margin: '32px 0 0 0',
    },
    [theme.breakpoints.up('md')]: {
      margin: '24px 0 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: props.layoutType === 'right' ? '0 53px 0 0' : '0 0 0 53px',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layoutType === 'right' ? '0 60px 0 0' : '0 0 0 60px',
    },
    width: '100%',
  },
}))

function ModuleQuickLink(props) {
  const { title, description, version, layoutType } = props
  const { classes } = useStyles({ layoutType, version })

  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className={classes.gridItemText}
          order={{ lg: layoutType === 'right' ? 2 : 1 }}
        >
          <Stack className={classes.containerText}>
            <Typography variant="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body" className={classes.description}>
              {description}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          order={{ lg: layoutType === 'right' ? 1 : 2 }}
          className={classes.gridItemLink}
        >
          <Stack spacing={2} className={classes.containerLink}>
            {[1, 2, 3, 4, 5].map((item) => (
              <CardQuickLink
                key={item}
                version={version}
                link="Link"
                description="Cras ac mauris finibus, tempus tellus ut, tempus mi."
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ModuleQuickLink

ModuleQuickLink.propTypes = {
  layoutType: PropTypes.oneOf(['left', 'right']),
  version: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
