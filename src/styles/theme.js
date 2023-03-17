import { createTheme } from '@mui/material/styles'

export const FONTS = {
  MANDREL: 'mandrel-normal',
  ROC_GROTESK: 'roc-grotesk',
  TABLET_GOTHIC: 'tablet-gothic',
  FALLBACK: 'sans-serif',
}

export const COLOR = {
  BLACK: '#191816',
  DARK_GRAY: '#3D3B38',
  MID_GRAY: '#6C6C6C',
  LIGHT_GRAY: '#D0CDC6',
  BAKER_BEACH_GRAY: '#e0d9c5',
  BAKER_BEACH_WHITE: '#f9f1db',
  OUTCAST: '#7d796e',
  LIGHT_BACKGROUND: '#fcf8ed',
  NEAR_WHITE: '#FEFCF8',
}

export const SERVICE_COLOR = {
  SUCCESS: {
    PRIMARY: '#377158',
    SECONDARY: '#377158',
  },
  WARNING: {
    PRIMARY: '#817400',
    SECONDARY: '#FFFFF1',
  },
  ERROR: {
    PRIMARY: '#A41F31',
    SECONDARY: '#F2E4E4',
  },
  INFORMATION: {
    PRIMARY: '#817400',
    SECONDARY: '#F5FAFF',
  },
  DISABLED: {
    PRIMARY: '#6C6C6C',
    SECONDARY: '#DBDBDB',
    TERTIARY: '#F3F3F3',
  },
}

const PRIMARY_COLOR = {
  LIGHT: '#7bab46',
  MAIN: '#cd4f30',
  DARK: '#1f4d25',
}

export const SECONDARY_COLOR = {
  LIGHT: {
    40: '#D8E5C5',
    60: '#BFD89E',
    80: '#A5CC7A',
  },
  MAIN: {
    40: '#EDC7B8',
    60: '#E0997E',
    80: '#D57150',
  },
  DARK: {
    40: '#A7C49D',
    60: '#79996C',
    80: '#517843',
  },
}

const theme = createTheme({
  components: {
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontFamily: `"${FONTS.MANDREL}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '105%', // depends on user agent. should use custom values
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: `"${FONTS.ROC_GROTESK}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '90%',
      fontSize: '2.5rem',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: `"${FONTS.MANDREL}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '105%',
      fontSize: '2rem',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: `"${FONTS.ROC_GROTESK}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '111%',
      fontSize: '1.125rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: `"${FONTS.MANDREL}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '117%',
      fontSize: '0.75rem',
      letterSpacing: '0.02em',
    },
    largeBody: {
      default: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: '130%',
      },
      inlineLink: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: '130%',
        textDecorationLine: 'underline',
      },
      bold: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.125rem',
        lineHeight: '130%',
      },
    },
    body: {
      default: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '130%',
      },
      inlineLink: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '130%',
        textDecoration: 'underline',
      },
      bold: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '130%',
      },
    },
    smallBody: {
      default: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '130%',
      },
      inlineLink: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '130%',
        textDecorationLine: 'underline',
      },
      bold: {
        fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '0.875rem',
        lineHeight: '130%',
      },
    },
    cardTitle: {
      fontFamily: `"${FONTS.MANDREL}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '110%',
    },
    quote: {
      fontFamily: `"${FONTS.MANDREL}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '146%',
      letterSpacing: '-0.02em',
    },
    label: {
      fontFamily: `"${FONTS.ROC_GROTESK}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    formLabel: {
      fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '114%',
      letterSpacing: '0.02em',
    },
    button: {
      fontFamily: `"${FONTS.ROC_GROTESK}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '100%',
    },
    helperText: {
      fontFamily: `"${FONTS.TABLET_GOTHIC}", ${FONTS.FALLBACK}`,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '117%',
    },
  },
  palette: {
    primary: {
      light: PRIMARY_COLOR.LIGHT,
      main: PRIMARY_COLOR.MAIN,
      dark: PRIMARY_COLOR.DARK,
    },
    secondary: {
      light: SECONDARY_COLOR.LIGHT[80],
      main: SECONDARY_COLOR.MAIN[80],
      dark: SECONDARY_COLOR.DARK[80],
    },
    success: {
      light: SERVICE_COLOR.SUCCESS.SECONDARY,
      main: SERVICE_COLOR.SUCCESS.PRIMARY,
      dark: SERVICE_COLOR.SUCCESS.PRIMARY,
    },
    error: {
      light: SERVICE_COLOR.ERROR.SECONDARY,
      main: SERVICE_COLOR.ERROR.PRIMARY,
      dark: SERVICE_COLOR.ERROR.PRIMARY,
    },
    warning: {
      light: SERVICE_COLOR.WARNING.SECONDARY,
      main: SERVICE_COLOR.WARNING.PRIMARY,
      dark: SERVICE_COLOR.WARNING.PRIMARY,
    },
    info: {
      light: SERVICE_COLOR.INFORMATION.SECONDARY,
      main: SERVICE_COLOR.INFORMATION.PRIMARY,
      dark: SERVICE_COLOR.INFORMATION.PRIMARY,
    },
    disabled: {
      light: SERVICE_COLOR.DISABLED.TERTIARY,
      main: SERVICE_COLOR.DISABLED.SECONDARY,
      dark: SERVICE_COLOR.DISABLED.PRIMARY,
    },
    presidio: {
      color: COLOR,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 720,
      lg: 1024,
      xl: 1440,
    },
  },
})

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: '92%',
  },
}

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '92%',
  },
}

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
    lineHeight: '111%',
  },
}

export default theme
