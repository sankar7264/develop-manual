import Typography from '@mui/material/Typography'
import Layout from 'src/components/layout/Layout'
import { makeStyles } from 'tss-react/mui'
import {
  getHeader,
  getFooter,
  getMainNavigation,
  getPageData,
} from 'src/common/services'
import { getComponent } from 'src/common/utils/getComponent'

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
  const { headerData, footerData, mainNavigationData, pageData } = props

  const components = []

  for (const i of pageData) {
    const { acf_fc_layout: componentName, data } = i

    if (componentName) {
      const component = getComponent(componentName)
      if (component) {
        components.push(component({ data } || null))
      }
    }
  }

  return (
    <Layout
      headerData={headerData}
      footerData={footerData}
      mainNavigationData={mainNavigationData}
    >
      <Typography variant="h1" className={classes.test}>
        Hello World!
      </Typography>

      {components}
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
  let pageData = null

  const { params } = context

  const path = params?.slug?.join('/') || 'home'

  try {
    const [getHeaderRes, getFooterRes, getMainNavigationRes, getPageDataRes] =
      await Promise.allSettled([
        getHeader(),
        getFooter(),
        getMainNavigation(),
        getPageData(path),
      ])

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

    if (getPageDataRes.status === 'fulfilled') {
      pageData = getPageDataRes.value
    } else {
      console.error(getPageDataRes)
    }
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      headerData: headerData,
      footerData: footerData,
      mainNavigationData: mainNavigationData,
      pageData: pageData[0].block || null,
    },
  }
}
