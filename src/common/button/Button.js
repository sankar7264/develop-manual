import { Button as MuiButton } from '@mui/material'
import PropTypes from 'prop-types'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const variantType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
}

const useStyles = makeStyles()((defaultTheme, props) => {
  const { variant } = props

  const styles = {
    button: {
      ...theme.typography.button,
      textTransform: 'uppercase',
      height: '40px',
      borderRadius: '25px',
      padding: '12px 32px 10px',
      fontWeight: '500',
    },
  }

  switch (variant) {
    case variantType.SECONDARY:
      return {
        button: {
          ...styles.button,
          background: theme.palette.presidio.color.LIGHT_BACKGROUND,
          border: `2px solid ${theme.palette.primary.dark}`,
          color: theme.palette.primary.dark,
          padding: '10px 30px 8px',
          '&: hover': {
            background: theme.palette.presidio.color.LIGHT_BACKGROUND,
            border: `2px solid ${SECONDARY_COLOR.DARK[80]}`,
            color: SECONDARY_COLOR.DARK[80],
            padding: '10px 30px 8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
          },
          '&: active': {
            border: `2px solid ${SECONDARY_COLOR.DARK[80]}`,
            background: theme.palette.presidio.color.LIGHT_BACKGROUND,
            boxShadow: 'none',
          },
          '&: disabled': {
            background: theme.palette.presidio.color.LIGHT_BACKGROUND,
            color: theme.palette.presidio.color.MID_GRAY,
            border: `2px solid ${theme.palette.presidio.color.BAKER_BEACH_GRAY}`,
          },
        },
      }
    case variantType.TERTIARY:
      return {
        button: {
          ...styles.button,
          color: theme.palette.primary.dark,
          '&: hover': {
            textDecorationLine: 'underline',
            color: SECONDARY_COLOR.DARK[80],
          },
          '&: active': {
            textDecorationLine: 'none',
            color: SECONDARY_COLOR.DARK[80],
          },
          '&: disabled': {
            color: theme.palette.presidio.color.MID_GRAY,
          },
        },
      }
    default:
      return {
        button: {
          ...styles.button,
          background: theme.palette.primary.dark,
          color: theme.palette.presidio.color.NEAR_WHITE,
          '&: hover': {
            background: theme.palette.presidio.color.LIGHT_BACKGROUND,
            border: `2px solid ${SECONDARY_COLOR.DARK[80]}`,
            color: SECONDARY_COLOR.DARK[80],
            padding: '10px 30px 8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
          },
          '&: active': {
            background: SECONDARY_COLOR.DARK[80],
            border: 'none',
            boxShadow: 'none',
            padding: '12px 32px 10px',
            color: theme.palette.presidio.color.NEAR_WHITE,
          },
          '&: disabled': {
            background: theme.palette.presidio.color.LIGHT_BACKGROUND,
            color: theme.palette.presidio.color.MID_GRAY,
            border: `2px solid ${theme.palette.presidio.color.BAKER_BEACH_GRAY}`,
          },
        },
      }
  }
})

function Button({ variant, children, className, ...props }) {
  if (!children) return null

  const { classes } = useStyles({ variant })

  return (
    <MuiButton
      className={[classes.button, className].join(' ')}
      disableElevation
      {...props}
    >
      {children}
    </MuiButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    variantType.PRIMARY,
    variantType.SECONDARY,
    variantType.TERTIARY,
  ]),
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
