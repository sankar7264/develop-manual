import { Box, Grid, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import CardQuickLink from 'src/components/quick-links/CardQuickLink'
import theme from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const colorType = {
  CYPRESS_GREEN: 'cypress_green',
  BAKER_BEACH: 'baker_beach',
}

const layoutType = {
  LEFT: 'left',
  RIGHT: 'right',
}

const useStyles = makeStyles()((defaultTheme, props) => ({
  container: {
    width: '100%',
    padding: '40px 24px',
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
      props.color === colorType.CYPRESS_GREEN
        ? theme.palette.secondary.dark
        : theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  title: {
    color:
      props.color === colorType.CYPRESS_GREEN
        ? theme.palette.presidio.color.NEAR_WHITE
        : theme.palette.primary.dark,
  },
  description: {
    ...theme.typography.body.default,
    color:
      props.color === colorType.CYPRESS_GREEN
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
      margin: props.layout === layoutType.RIGHT ? '0 0 0 53px' : '0 53px 0 0',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layout === layoutType.RIGHT ? '0 0 0 60px' : '0 60px 0 0',
    },
  },
  containerLink: {
    margin: '32px 0 0 0',
    [theme.breakpoints.up('md')]: {
      margin: '24px 0 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: props.layout === layoutType.RIGHT ? '0 53px 0 0' : '0 0 0 53px',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layout === layoutType.RIGHT ? '0 60px 0 0' : '0 0 0 60px',
    },
    width: '100%',
  },
}))

function QuickLinks(props) {
  const { data } = props
  if (!data) return null

  const { quick_links } = data
  if (!quick_links) return null

  const { layout, title, description, background_color, links } = quick_links
  if (
    !links ||
    !Array.isArray(links) ||
    links.length === 0 ||
    links.filter((o) => !o?.link?.url).length !== 0
  )
    return null

  const { classes } = useStyles({
    layout: layout,
    color: background_color,
  })

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
          order={{ lg: layout === layoutType.RIGHT ? 2 : 1 }}
        >
          <Stack className={classes.containerText}>
            <Typography
              variant="h2"
              className={classes.title}
              data-testid="quick-link-title"
            >
              {title}
            </Typography>
            <Typography
              variant="body"
              className={classes.description}
              data-testid="quick-link-description"
            >
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
          order={{ lg: layout === layoutType.RIGHT ? 1 : 2 }}
          className={classes.gridItemLink}
        >
          <Stack spacing={2} className={classes.containerLink}>
            {links.map((item, index) => (
              <CardQuickLink key={index} data={{ ...item, background_color }} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default QuickLinks

QuickLinks.propTypes = {
  data: PropTypes.shape({
    quick_links: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      background_color: PropTypes.oneOf([
        colorType.BAKER_BEACH,
        colorType.CYPRESS_GREEN,
      ]),
      layout: PropTypes.oneOf([layoutType.LEFT, layoutType.RIGHT]),
      links: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string.isRequired,
            target: PropTypes.string,
          }).isRequired,
          description: PropTypes.string,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}
