import Typography from '@mui/material/Typography'
import Layout from 'src/components/layout/Layout'
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
    <Layout>
      <Typography variant="h1" className={classes.test}>
        Hello World!
      </Typography>
    </Layout>
  )
}

export default Home
