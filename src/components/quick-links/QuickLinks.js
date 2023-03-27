import { Box, Grid, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import CardQuickLink from 'src/components/quick-links/CardQuickLink'
import theme from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const color = {
  CYPRESS_GREEN: 'cypress_green',
  BAKER_BEACH: 'baker_beach',
}

const layout = {
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
      props.color === color.CYPRESS_GREEN
        ? theme.palette.secondary.dark
        : theme.palette.presidio.color.LIGHT_BACKGROUND,
  },
  title: {
    color:
      props.color === color.CYPRESS_GREEN
        ? theme.palette.presidio.color.NEAR_WHITE
        : theme.palette.primary.dark,
  },
  description: {
    ...theme.typography.body.default,
    color:
      props.color === color.CYPRESS_GREEN
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
      margin: props.layout === layout.RIGHT ? '0 0 0 53px' : '0 53px 0 0',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layout === layout.RIGHT ? '0 0 0 60px' : '0 60px 0 0',
    },
  },
  containerLink: {
    margin: '32px 0 0 0',
    [theme.breakpoints.up('md')]: {
      margin: '24px 0 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: props.layout === layout.RIGHT ? '0 53px 0 0' : '0 0 0 53px',
    },
    [theme.breakpoints.up('xl')]: {
      margin: props.layout === layout.RIGHT ? '0 60px 0 0' : '0 0 0 60px',
    },
    width: '100%',
  },
}))

function QuickLinks(props) {
  const { data } = props

  if (!data) return null

  const {
    block_section_title,
    block_section_id,
    quick_link_title,
    quick_link_description,
    quick_link_colour,
    quick_link_layout,
    quick_links,
  } = data

  if (!quick_links || quick_links.length === 0) return null
  if (quick_links.filter((o) => !o.quick_link_url).length !== 0) return null

  const { classes } = useStyles({
    layout: quick_link_layout,
    color: quick_link_colour,
  })

  const handleClickItem = (url, target) => {}

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
          order={{ lg: quick_link_layout === layout.RIGHT ? 2 : 1 }}
        >
          <Stack className={classes.containerText}>
            <Typography
              variant="h2"
              className={classes.title}
              data-testid="quick-link-title"
            >
              {quick_link_title}
            </Typography>
            <Typography
              variant="body"
              className={classes.description}
              data-testid="quick-link-description"
            >
              {quick_link_description}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          order={{ lg: quick_link_layout === layout.RIGHT ? 1 : 2 }}
          className={classes.gridItemLink}
        >
          <Stack spacing={2} className={classes.containerLink}>
            {quick_links.map((item) => (
              <CardQuickLink
                data-testid="card-quick-link"
                key={item.quick_link_link_title}
                data={{ ...item, quick_link_colour }}
                onClick={(e) =>
                  handleClickItem(
                    item.quick_link_url,
                    item.quick_link_link_target
                  )
                }
              />
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
    block_section_title: PropTypes.string,
    block_section_id: PropTypes.string,
    quick_link_title: PropTypes.string,
    quick_link_description: PropTypes.string,
    quick_link_colour: PropTypes.oneOf([
      color.BAKER_BEACH,
      color.CYPRESS_GREEN,
    ]),
    quick_link_layout: PropTypes.oneOf([layout.LEFT, layout.RIGHT]),
    quick_links: PropTypes.arrayOf(
      PropTypes.shape({
        quick_link_link_title: PropTypes.string,
        quick_link_url: PropTypes.string.isRequired,
        quick_link_link_target: PropTypes.string,
        quick_link_link_discritpion: PropTypes.string,
      }).isRequired
    ).isRequired,
  }),
}
