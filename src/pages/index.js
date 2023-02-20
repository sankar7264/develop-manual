import Typography from '@mui/material/Typography'
import theme from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((props) => ({
  test: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  },
}))

const Home = (props) => {
  const { classes } = useStyles(props)
  console.log(theme)

  return (
    <Typography variant="h1" className={classes.test}>
      Hello World!
    </Typography>
  )
}

export default Home
