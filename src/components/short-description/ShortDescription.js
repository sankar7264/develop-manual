import { Box, Typography } from '@mui/material'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'
import Button from 'src/common/button/Button'

const colorTheme = {
  BAKER_BEACH: 'baker_beach',
  CHRISSY_FIELD: 'chrissy_field',
}

const useStyles = makeStyles()((defaultTheme, props) => {
  const { have_indent, color } = props

  const background =
    color === colorTheme.CHRISSY_FIELD
      ? SECONDARY_COLOR.LIGHT[40]
      : theme.palette.presidio.color.LIGHT_BACKGROUND

  return {
    container: {
      background: background,
      padding: '40px 24px',
      [theme.breakpoints.up('md')]: {
        padding: '40px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: `64px ${have_indent ? '258px 64px 120px' : '258px 64px 40px'}`,
      },
      [theme.breakpoints.up('xl')]: {
        padding: `64px ${
          have_indent ? '448px 64px 252px' : '544px 64px 156px'
        }`,
      },
    },
    title: {
      ...theme.typography.h3,
      marginBottom: '40px',
      color: theme.palette.primary.dark,
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    description: {
      ...theme.typography.largeBody.default,
      color: theme.palette.presidio.color.DARK_GRAY,
    },
    button: {
      marginTop: '40px',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 'auto',
      },
    },
  }
})

export default function ShortDescription(props) {
  const { data = {} } = props
  const { title, description, have_cta, have_indent, color } = data

  if (!title || !description) return null

  const { classes } = useStyles({ have_indent, color })

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
      {have_cta && <Button className={classes.button}>CALL TO ACTION</Button>}
    </div>
  )
}

ShortDescription.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    have_cta: PropTypes.bool,
    have_indent: PropTypes.bool,
    color: PropTypes.oneOf([colorTheme.BAKER_BEACH, colorTheme.CHRISSY_FIELD]),
  }),
}
