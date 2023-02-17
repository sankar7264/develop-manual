import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme, props) => ({
  test: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  },
}))

const Home = (props) => {
  const { classes } = useStyles(props)

  return (
    <Typography variant="h3" className={classes.test}>
      Hello World!
    </Typography>
  )
}

export default Home
