import { Grid, TextField, Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'src/styles/theme'
import { styled } from '@mui/material/styles'
import Button from 'src/common/button/Button'
import PropTypes from 'prop-types'

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
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.24)',
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
  newsLetterCon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '327px',
    height: '274px',
    padding: '0px',
    [theme.breakpoints.up('md')]: {
      width: '640px',
      height: '248px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '32px 96px 24px',
      width: '782px',
      height: '174px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1128px',
      height: '200px',
    },
  },
  newsLetterHead: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '279px',
    height: '96px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      padding: '0px',
      width: '592px',
      height: '54px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '300px',
      height: '126px',
      gap: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '456px',
      height: '84px',
      padding: '0px 0px 0px 96px',
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
      width: '442px',
      height: '122px',
    },
    [theme.breakpoints.up('xl')]: {
      gap: '120px',
      width: '936px',
      height: '122px',
    },
  },
  newsLetterInput: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '4px',
    width: '279px',
    height: '122px',
    flex: 'none',
    order: '1',
    flexGrow: '1',
    [theme.breakpoints.up('md')]: {
      width: '592px',
    },
    [theme.breakpoints.up('lg')]: {
      gap: '4px',
      width: '218px',
      height: '118px',
    },
    [theme.breakpoints.up('xl')]: {
      gap: '4px',
      width: '360px',
      height: '122px',
    },
  },
  textField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '279px',
    height: '92px',
    flex: 'none',
    order: '0',
    aligSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      width: '592px',
      height: '78px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '218px',
      height: '78px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '360px',
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
      backgroundImage: 'url(/assets/newsbg.png)',
      backgroundPosition: 'initial',
      backgroundSize: '22% auto',
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
