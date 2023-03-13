import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import theme, { FONTS } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'
import ArrowRight from '../icons/ArrowRight'

const useStyles = makeStyles()((defaultTheme, props) => {
  let cardBackgroundColor

  if (props.version === 'cypress-green') {
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
    },
    link: {
      color:
        props.version === 'cypress-green'
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
        props.version === 'cypress-green'
          ? theme.palette.presidio.color.NEAR_WHITE
          : theme.palette.primary.dark,
    },
  }
})

function CardQuickLink(props) {
  const { link, description, version, onClick } = props

  const [isHovering, setIsHovering] = React.useState(false)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  const { classes } = useStyles({
    events: { isHovering, isMouseDown },
    version,
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

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  return (
    <Box
      className={classes.card}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Stack direction="row">
        <Stack flex={1}>
          <Typography variant="h3" href="#" className={classes.link}>
            {link}
          </Typography>
          <Typography variant="body.default" className={classes.description}>
            {description}
          </Typography>
        </Stack>

        <ArrowRight />
      </Stack>
    </Box>
  )
}

export default CardQuickLink

CardQuickLink.propTypes = {
  version: PropTypes.oneOf(['cypress-green', 'baker-beach']),
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
