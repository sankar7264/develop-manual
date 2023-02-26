import {
  Button,
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'

const useStyles = makeStyles()((props) => ({
  card: {
    borderRadius: '4px',
  },
  cardTitle: {
    ...theme.typography.cardTitle,
    color: theme.palette.primary.main,
  },
  cardContent: {
    ...theme.typography.smallBody.default,
  },
  cardButton: {
    ...theme.typography.button,
    color: theme.palette.primary.dark,
  },
}))

function Card(props) {
  const { cardTitle, cardContent, cardMedia, cardAction, maxWidth } = props
  const { classes } = useStyles(props)

  return (
    <MuiCard className={classes.card} sx={{ maxWidth }}>
      <CardActionArea>
        {cardMedia?.imgUrl && (
          <CardMedia
            component="img"
            height={cardMedia.height || 144}
            image={cardMedia.imgUrl}
            alt={cardMedia.altText || 'Card Image'}
          />
        )}
        <CardContent>
          {cardTitle && (
            <Typography gutterBottom className={classes.cardTitle}>
              {cardTitle}
            </Typography>
          )}
          {cardContent && (
            <Typography
              className={classes.cardContent}
              sx={{ maxHeight: 90, overflow: 'scroll' }}
            >
              {cardContent}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {cardAction?.name && (
        <CardActions>
          <Button
            className={classes.cardButton}
            aria-label={cardAction.ariaLabel || 'Card Action Button'}
            onClick={cardAction.onClick}
          >
            {cardAction.name}
          </Button>
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardMedia: PropTypes.shape({
    imgUrl: PropTypes.string,
    altText: PropTypes.string,
    height: PropTypes.string,
  }),
  cardContent: PropTypes.string,
  cardAction: PropTypes.shape({
    name: PropTypes.string,
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func,
  }),
}
