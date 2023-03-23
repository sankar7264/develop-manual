import Typography from '@mui/material/Typography'
import Layout from 'src/components/layout/Layout'
import { makeStyles } from 'tss-react/mui'
import { getHeader, getFooter, getMainNavigation } from 'src/common/services'

const useStyles = makeStyles()((props) => ({
  test: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
}))

const Home = (props) => {
  const { classes } = useStyles(props)
  const { headerData, footerData, mainNavigationData } = props

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      mainNavigationData={mainNavigationData}
    >
      <Typography variant="h1" className={classes.test}>
        Hello World!
      </Typography>
    </Layout>
  )
}

export default Home

export async function getServerSideProps(context) {
  // eslint-disable-next-line global-require
  require('newrelic')

  let headerData = null
  let footerData = null
  let mainNavigationData = null

  try {
    const [getHeaderRes, getFooterRes, getMainNavigationRes] =
      await Promise.allSettled([getHeader(), getFooter(), getMainNavigation()])

    if (getHeaderRes.status === 'fulfilled') {
      headerData = getHeaderRes.value
    } else {
      console.error(getHeaderRes)
    }

    if (getFooterRes.status === 'fulfilled') {
      footerData = getFooterRes.value
    } else {
      console.error(getFooterRes)
    }

    if (getMainNavigationRes.status === 'fulfilled') {
      mainNavigationData = getMainNavigationRes.value
    } else {
      console.error(getMainNavigationRes)
    }
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      headerData: headerData,
      footerData: footerData,
      mainNavigationData: mainNavigationData,
    },
  }
}
