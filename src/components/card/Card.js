import {
  Button,
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import { useRouter } from 'next/router'

const useStyles = makeStyles()((props) => ({
  card: {
    background: theme.palette.presidio.color.NEAR_WHITE,
    borderRadius: '4px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
  },
  cardTitle: {
    ...theme.typography.cardTitle,
    color: theme.palette.primary.dark,
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    padding: '1rem',
    gap: '0.5rem',
  },
  cardContent: {
    ...theme.typography.smallBody.default,
  },
  cardActionContainer: {
    padding: '0 1rem 1rem',
    '& :hover': {
      background: 'transparent',
      textDecoration: 'underline',
      color: SECONDARY_COLOR.DARK[80],
    },
    '& :active': {
      background: 'transparent',
      textDecoration: 'none',
      color: SECONDARY_COLOR.DARK[80],
    },
  },
  cardButton: {
    ...theme.typography.button,
    borderRadius: '0',
    color: theme.palette.primary.dark,
    fontWeight: 500,
    padding: '6px 0px 3px',
  },
}))

function Card(props) {
  const { cardData } = props

  const { title, description, image, link } = cardData || {}

  const { classes } = useStyles(props)

  const router = useRouter()

  function cardActionClickHandler(action) {
    if (action.target === '_blank') {
      window.open(action.url, '_blank')
    } else {
      router.push(action.url)
    }
  }

  return (
    <MuiCard className={classes.card} elevation={0}>
      <CardActionArea disableRipple sx={{ cursor: 'default' }}>
        {image && image.url && (
          <CardMedia
            component="img"
            height={144}
            image={image.url}
            alt={image.alt || 'Card Image'}
            className={classes.cardImage}
          />
        )}
        {(title || description) && (
          <CardContent className={classes.cardContentContainer}>
            {title && (
              <Typography className={classes.cardTitle}>{title}</Typography>
            )}
            {description && (
              <Typography className={classes.cardContent}>
                {description}
              </Typography>
            )}
          </CardContent>
        )}
      </CardActionArea>
      {link && link.title && (
        <CardActions className={classes.cardActionContainer} tabIndex={0}>
          <Button
            disableRipple
            className={classes.cardButton}
            aria-label={link.ariaLabel || 'Card Action Button'}
            onClick={() => cardActionClickHandler(link)}
            data-testid="card-button"
          >
            {link.title}
          </Button>
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card

Card.propTypes = {
  cardData: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }),
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
    }),
    description: PropTypes.string,
  }),
}
