import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import ArrowRight from 'src/components/icons/ArrowRight'
import theme from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const color = {
  CYPRESS_GREEN: 'cypress_green',
  BAKER_BEACH: 'baker_beach',
}

const LinkTarget = {
  0: '_self',
  _blank: '_blank',
}

const useStyles = makeStyles()((defaultTheme, props) => {
  let cardBackgroundColor

  if (props.color === color.CYPRESS_GREEN) {
    if (props.events.isMouseDown) {
      cardBackgroundColor = theme.palette.secondary.dark
    } else {
      cardBackgroundColor = theme.palette.primary.dark
    }
  } else if (props.events.isMouseDown) {
    cardBackgroundColor = theme.palette.presidio.color.LIGHT_BACKGROUND
  } else {
    cardBackgroundColor = theme.palette.presidio.color.BAKER_BEACH_WHITE
  }

  return {
    card: {
      padding: '16px 24px',
      width: '100%',
      backgroundColor: cardBackgroundColor,
      cursor: 'pointer',
    },
    link: {
      ...theme.typography.h3,
      color:
        props.color === color.CYPRESS_GREEN
          ? theme.palette.presidio.color.NEAR_WHITE
          : theme.palette.primary.dark,
      textDecoration: props.events.isHovering ? 'underline' : 'none',
      [theme.breakpoints.down('lg')]: {
        fontSize: '24px',
      },
    },
    description: {
      ...theme.typography.body.default,
      marginTop: '8px',
      color:
        props.color === color.CYPRESS_GREEN
          ? theme.palette.presidio.color.NEAR_WHITE
          : theme.palette.primary.dark,
    },
  }
})

function CardQuickLink(props) {
  const { data } = props
  if (!data) return null

  const { link, description, background_color } = data
  if (!link) return null

  const { title, url, target } = link
  if (!url) return null

  const [isHovering, setIsHovering] = React.useState(false)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  const { classes } = useStyles({
    events: { isHovering, isMouseDown },
    color: background_color,
  })

  const handleMouseEnter = (e) => {
    setIsHovering(true)
  }

  const handleMouseLeave = (e) => {
    setIsHovering(false)
  }

  const handleMouseDown = (e) => {
    setIsMouseDown(true)
  }

  const handleMouseUp = (e) => {
    setIsMouseDown(false)
  }

  return (
    <a href={url} target={LinkTarget[target]}>
      <Box
        className={classes.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Stack direction="row">
          <Stack flex={1}>
            <Typography
              variant="h3"
              className={classes.link}
              data-testid="card-quick-link-title"
            >
              {title}
            </Typography>
            <Typography
              variant="body.default"
              className={classes.description}
              data-testid="card-quick-link-description"
            >
              {description}
            </Typography>
          </Stack>

          <ArrowRight
            data-testid="card-quick-link-icon"
            color={
              background_color !== color.CYPRESS_GREEN
                ? theme.palette.primary.dark
                : undefined
            }
          />
        </Stack>
      </Box>
    </a>
  )
}

export default CardQuickLink

CardQuickLink.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string.isRequired,
      target: PropTypes.string,
    }).isRequired,
    description: PropTypes.string,
    background_color: PropTypes.string,
  }).isRequired,
}
