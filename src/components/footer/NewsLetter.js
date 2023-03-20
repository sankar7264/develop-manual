import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'

const useStyles = makeStyles(theme)((props) => ({
  newsLetter: {
    maxWidth: '327px',
    minHeight: '275px',
    marginBottom: '-137px',
    backgroundColor: theme.palette.presidio.color.BAKER_BEACH_WHITE,
    zIndex: 1,
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '640px',
      minHeight: '248px',
      marginBottom: '-124px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      maxWidth: '782px',
      minHeight: '174px',
      marginBottom: '-87px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1128px',
      minHeight: '178px',
      marginBottom: '-91px',
    },
  },
  emailInput: {
    width: '100%',
    marginTop: '16px',
    background: theme.palette.presidio.color.NEAR_WHITE,
    borderColor: theme.palette.presidio.color.DARK_GRAY,
    [theme.breakpoints.up('md')]: {
      marginTop: '0px',
    },
  },
  emailButton: {
    marginTop: '15px',
    marginBottom: '15px',
    width: '100%',
    borderRadius: '999em',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      marginTop: '26px',
    },
  },
  emailDiv: {
    margin: '0 auto',
    width: '95%',
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '5% auto',
      width: '80%',
    },
  },
  gridItem: {
    transform: 'translate(0, 12%)',
  },
  firstGrid: {
    minHeight: 'auto',
  },
  cardContent: {
    minHeight: 'auto',
  },
  bgImageHolder: {
    display: 'none',
    backgroundImage: 'url(/newsbg.png)',
    backgroundSize: '100% auto',
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      display: 'block',
      minHeight: '200px',
    },
  },
  headSection: {
    color: theme.palette.primary.dark,
    marginBottom: '5px',
    lineHeight: 1,
    marginLeft: '5%',
    fontSize: '24px',
    marginTop: '2%',
    [theme.breakpoints.up('md')]: {
      marginLeft: '5%',
      marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '32px',
      marginTop: '0px',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '0px',
    },
  },
  paragraphSection: {
    fontSize: '16px',
    color: theme.palette.presidio.color.BLACK,
    fontWeight: 400,
    width: '85%',
    marginTop: '8px',
    marginBottom: '0px',
    marginLeft: '5%',
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
      marginTop: '5px',
      marginLeft: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '0%',
    },
  },
}))

function NewsLetter(props) {
  const { classes } = useStyles(props)
  const { NewsLetterData } = props
  return (
    <Card className={classes.newsLetter}>
      <CardContent
        sx={{ p: 0, '&:last-child': { pb: 0 } }}
        className={classes.cardContent}
      >
        <Grid container alignItems="center">
          <Grid className={classes.bgImageHolder} item lg={2} />
          <Grid item md={12} sm={12} xs={12} lg={5}>
            <div className={[classes.gridItem, classes.firstGrid].join(' ')}>
              <Typography variant="h3" className={classes.headSection}>
                {NewsLetterData.footer_news_title}
              </Typography>
              <p className={classes.paragraphSection}>
                {NewsLetterData.footer_news_description}
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
  )
}

export default NewsLetter
