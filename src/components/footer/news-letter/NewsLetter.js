import { Grid, TextField, Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import { styled } from '@mui/material/styles'
import Button from 'src/common/button/Button'
import PropTypes from 'prop-types'
import rem from 'src/common/utils/css/index'

const useStyles = makeStyles(theme)((props) => ({
  newsLetter: {
    maxWidth: '85.20%',
    minHeight: '275px',
    margin: `${rem('-138px')} auto`,
    backgroundColor: theme.palette.presidio.color.BAKER_BEACH_WHITE,
    zIndex: 1,
    position: 'relative',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.24)',
    [theme.breakpoints.up('md')]: {
      maxWidth: '88.88%',
      minHeight: '248px',
      margin: `${rem('-124px')} auto`,
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      maxWidth: '76.36%',
      minHeight: '174px',
      margin: `${rem('-100px')} auto`,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '78.33%',
      minHeight: '178px',
    },
  },
  newsLetterCon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0px',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '248px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '3.06% 10.23% 3.06% 20.46%',
      width: '100%',
      height: '174px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '32px 9.37% 24px',
      width: '100%',
      height: '200px',
    },
  },
  newsLetterHead: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '100%',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      padding: '0px',
      width: '92.5%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '55.35%',
      height: '126px',
      gap: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '48.71%',
      height: '84px',
      padding: '0px 0px 0px 10.25%',
    },
  },
  newsLetterInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '24px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '24px',
      gap: '24px',
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '24px',
      height: '122px',
    },
    [theme.breakpoints.up('xl')]: {
      gap: '120px',
      height: '122px',
    },
  },
  newsLetterInput: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '4px',
    width: '100%',
    height: '122px',
    flex: 'none',
    order: '1',
    flexGrow: '1',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      gap: '4px',
      width: '40.22%',
      height: '118px',
    },
    [theme.breakpoints.up('xl')]: {
      gap: '4px',
      width: '38.46%',
      height: '122px',
    },
  },
  textField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    height: '92px',
    flex: 'none',
    order: '0',
    aligSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '78px',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 32px 7px',
    gap: '8px',
    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    flexGrow: '0',
  },
  cardContent: {
    minHeight: 'auto',
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      display: 'block',
      minHeight: '200px',
      backgroundImage: 'url(/assets/News-Letter-Background.webp)',
      backgroundPosition: 'initial',
      backgroundSize: '17% auto',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundSize: '17% auto',
    },
  },
  headSection: {
    color: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.02em',
    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },
  paragraphSection: {
    ...theme.typography.body.default,
    color: theme.palette.presidio.color.BLACK,
    display: 'flex',
    alignItems: 'center',
    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
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
        <div className={classes.newsLetterCon}>
          <div className={classes.newsLetterInnerContainer}>
            <div className={classes.newsLetterHead}>
              <Typography variant="h3" className={classes.headSection}>
                {NewsLetterData.footer_news_title}
              </Typography>
              <div className={classes.paragraphSection}>
                {NewsLetterData.footer_news_description}
              </div>
            </div>
            <div className={classes.newsLetterInput}>
              <div className={classes.textField}>
                <CssTextField
                  className={classes.emailInput}
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
              </div>
              <Button className={classes.emailButton}>Sign Up</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NewsLetter

NewsLetter.propTypes = {
  NewsLetterData: PropTypes.shape({
    footer_news_title: PropTypes.string,
    footer_news_description: PropTypes.string,
    footer_newsletter_thankyoutext: PropTypes.string,
    footer_newsletter_errortext: PropTypes.string,
    api: PropTypes.string,
  }),
}
