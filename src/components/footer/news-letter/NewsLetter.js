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
import { styled } from '@mui/material/styles'

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
    width: '279px',
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      width: '592px',
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
    backgroundImage: 'none',
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      display: 'block',
      minHeight: '200px',
      backgroundImage: 'url(/newsbg.png)',
      backgroundPosition: 'initial',
      backgroundSize: '30% auto',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundSize: '25% auto',
    },
  },
  newsLetterTextContainer: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: '160px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '192px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  headSection: {
    color: theme.palette.primary.dark,
    marginBottom: '5px',
    lineHeight: 1,
    marginLeft: '24px',
    fontSize: '24px',
    marginTop: '24px',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '32px',
      marginTop: '0px',
      marginLeft: '0px',
      width: '300px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '360px',
    },
  },
  paragraphSection: {
    fontSize: '16px',
    color: theme.palette.presidio.color.BLACK,
    fontWeight: 400,
    width: '85%',
    marginTop: '8px',
    marginBottom: '0px',
    marginLeft: '24px',
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '55%',
      marginTop: '5px',
      marginLeft: '0%',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '0%',
      width: '60%',
    },
  },
}))

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.secondary.dark,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.presidio.color.DARK_GRAY,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.dark,
    },
  },
})

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
          <Grid item md={12} sm={12} xs={12} lg={7}>
            <div
              className={[classes.firstGrid, classes.bgImageHolder].join(' ')}
            >
              <div className={classes.newsLetterTextContainer}>
                <Typography variant="h3" className={classes.headSection}>
                  {NewsLetterData.footer_news_title}
                </Typography>
                <p className={classes.paragraphSection}>
                  {NewsLetterData.footer_news_description}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={5}>
            <div className={[classes.emailDiv, classes.gridItem].join(' ')}>
              <CssTextField
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
