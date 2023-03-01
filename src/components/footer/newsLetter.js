import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  ThemeProvider,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'

const useStyles = makeStyles(theme)((props) => ({
  newsLetter: {
    maxWidth: '1128px',
    minHeight: '178px',
    backgroundColor: theme.palette.presidio.color.BAKER_BEACH_WHITE,
    marginBottom: '-91px',
    zIndex: 1,
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      maxWidth: '782px',
      minHeight: '174px',
      marginBottom: '-87px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      maxWidth: '640px',
      minHeight: '248px',
      marginBottom: '-124px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      maxWidth: '327px',
      minHeight: '275px',
      marginBottom: '-137px',
    },
  },
  emailInput: {
    width: '100%',
    background: theme.palette.presidio.color.NEAR_WHITE,
    borderColor: theme.palette.presidio.color.DARK_GRAY,
  },
  emailButton: {
    marginTop: '15px',
    marginBottom: '15px',
    width: '100%',
    borderRadius: '999em',
    backgroundColor: theme.palette.primary.dark,
  },
  emailDiv: {
    width: '80%',
    margin: '5% auto',
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      margin: '0 auto',
      width: '95%',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      margin: '0 auto',
    },
  },
  gridItem: {
    // margin: '0 auto',
    transform: 'translate(0, 12%)',
  },
  firstGrid: {
    minHeight: '178px',
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      minHeight: 'auto',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      // minHeight: "auto"
    },
  },
  cardContent: {
    minHeight: '178px',
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      minHeight: 'auto',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      // minHeight: 'auto'
    },
  },
  bgImageHolder: {
    display: 'block',
    backgroundImage: 'url(/newsbg.png)',
    backgroundSize: '100% auto',
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      display: 'none',
    },
  },
  headSection: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
    fontSize: '32px',
    fontFamily: 'serif',
    marginBottom: '5px',
    marginTop: '5%',
    lineHeight: 1,
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      marginLeft: '5%',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: '24px',
      marginTop: '2%',
    },
  },
  paragrapgSection: {
    marginTop: '5px',
    fontSize: '16px',
    color: theme.palette.presidio.color.BLACK,
    fontWeight: 400,
    width: '80%',
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      marginLeft: '5%',
      width: '100%',
      marginTop: '10px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {},
  },
}))

function NewsLetter(props) {
  const { classes } = useStyles(props)
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.newsLetter}>
        <CardContent
          sx={{ p: 0, '&:last-child': { pb: 0 } }}
          className={classes.cardContent}
        >
          <Grid container>
            <Grid className={classes.bgImageHolder} item lg={2} />
            <Grid item md={12} sm={12} xs={12} lg={5}>
              <div className={[classes.gridItem, classes.firstGrid].join(' ')}>
                <h3 className={classes.headSection}>
                  Get Presidio News and Events
                </h3>
                <p className={classes.paragrapgSection}>
                  Sign up to receive the latest updates from the Presidio, and
                  then come visit us!
                </p>
              </div>
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={5}>
              <div className={[classes.emailDiv, classes.gridItem].join(' ')}>
                <TextField
                  className={classes.emailInput}
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
                <Button className={classes.emailButton} variant="contained">
                  Sign Up
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default NewsLetter
