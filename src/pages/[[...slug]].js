import Typography from '@mui/material/Typography'
import Layout from 'src/components/layout/Layout'
import theme from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'
import { getHeader, getFooter, getMegaMenu } from 'src/common/services'

const useStyles = makeStyles()((props) => ({
  test: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  },
}))
export async function getServerSideProps(context) {
  let headerData = null
  let footerData = null
  let megaMenuData = null

  try {
    const [getHeaderRes, getFooterRes, getMegaMenuRes] =
      await Promise.allSettled([getHeader(), getFooter(), getMegaMenu()])

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

    if (getMegaMenuRes.status === 'fulfilled') {
      megaMenuData = getMegaMenuRes.value
    } else {
      console.error(getMegaMenuRes)
    }
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      headerData: headerData,
      footerData: footerData,
      megaMenu: megaMenuData,
    },
  }
}

const Home = (props) => {
  const { classes } = useStyles(props)
  const { headerData, footerData } = props

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Typography variant="h1" className={classes.test}>
        Hello World!
      </Typography>
    </Layout>
  )
}

export default Home
