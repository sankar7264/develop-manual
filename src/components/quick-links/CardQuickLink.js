import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import ArrowRight from 'src/components/icons/ArrowRight'
import theme, { FONTS } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const color = {
  CYPRESS_GREEN: 'cypress_green',
  BAKER_BEACH: 'baker_beach',
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
      color:
        props.color === color.CYPRESS_GREEN
          ? theme.palette.presidio.color.NEAR_WHITE
          : theme.palette.primary.dark,
      fontFamily: FONTS.MANDREL,
      textDecoration: props.events.isHovering ? 'underline' : 'none',
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '32px',
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
  const { onClick, data } = props
  const {
    quick_link_link_title,
    quick_link_url,
    quick_link_link_target,
    quick_link_link_discritpion,
    quick_link_colour,
  } = data
  const [isHovering, setIsHovering] = React.useState(false)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  const { classes } = useStyles({
    events: { isHovering, isMouseDown },
    color: quick_link_colour,
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
    <a href={quick_link_url} target={quick_link_link_target}>
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
              {quick_link_link_title}
            </Typography>
            <Typography
              variant="body.default"
              className={classes.description}
              data-testid="card-quick-link-description"
            >
              {quick_link_link_discritpion}
            </Typography>
          </Stack>

          <ArrowRight
            data-testid="card-quick-link-icon"
            color={
              quick_link_colour !== color.CYPRESS_GREEN
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
    quick_link_link_title: PropTypes.string.isRequired,
    quick_link_url: PropTypes.string.isRequired,
    quick_link_link_target: PropTypes.string.isRequired,
    quick_link_link_discritpion: PropTypes.string.isRequired,
    quick_link_colour: PropTypes.string.isRequired,
  }).isRequired,
}
