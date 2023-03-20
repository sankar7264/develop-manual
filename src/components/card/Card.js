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
import theme from 'src/styles/theme'
import { useRouter } from 'next/router'

const useStyles = makeStyles()((props) => ({
  card: {
    borderRadius: '4px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
  },
  cardImage: {
    borderRadius: '4px',
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
    background: theme.palette.presidio.color.NEAR_WHITE,
  },
  cardContent: {
    ...theme.typography.smallBody.default,
  },
  cardActionContainer: {
    background: theme.palette.presidio.color.NEAR_WHITE,
    padding: '0 1rem 1rem',
  },
  cardButton: {
    ...theme.typography.button,
    color: theme.palette.primary.dark,
    fontWeight: 500,
    padding: '6px 0px 3px',
  },
  cardButtonText: {
    color: theme.palette.primary.dark,
  },
}))

function Card(props) {
  const { cardData, maxWidth } = props

  const { title, description, image, link } = cardData || {}

  const { classes } = useStyles(props)

  const router = useRouter()

  // For card width logic
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))

  function cardActionClickHandler(action) {
    if (action.target === '_blank') {
      window.open(action.url, '_blank')
    } else {
      router.push(action.url)
    }
  }

  return (
    <MuiCard
      className={classes.card}
      sx={{ maxWidth: lgUp ? '240px' : maxWidth }}
    >
      <CardActionArea disableRipple sx={{ cursor: 'default' }}>
        {image && (
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
              <Typography gutterBottom className={classes.cardTitle}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography className={classes.cardContent} tabIndex={0}>
                {description}
              </Typography>
            )}
          </CardContent>
        )}
      </CardActionArea>
      {link && link.title && (
        <CardActions className={classes.cardActionContainer}>
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
