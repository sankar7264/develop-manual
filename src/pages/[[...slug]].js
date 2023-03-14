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
export async function getServerSideProps(context) {
  const [headerApi, footerApi] = await Promise.all([
    fetch(
      'https://wpvip-presidio-gov.go-vip.net/wp-json/acf/v2/options/header'
    ),
    fetch(
      'https://wpvip-presidio-gov.go-vip.net/wp-json/acf/v2/options/footer'
    ),
  ])
  const [headerData, footerData] = await Promise.all([
    headerApi.json(),
    footerApi.json(),
  ])

  return {
    props: { headerData, footerData },
  }
}

const Home = (props) => {
  const { classes } = useStyles(props)
  const { headerData, footerData } = props
  console.log(theme)

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Typography variant="h1" className={classes.test}>
        Hello World!
      </Typography>
    </Layout>
  )
}

export default Home
