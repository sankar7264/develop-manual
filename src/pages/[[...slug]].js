import Typography from '@mui/material/Typography'
import Layout from 'src/components/layout/Layout'
import { makeStyles } from 'tss-react/mui'
import { getHeader, getFooter, getMainNavigation } from 'src/common/services'
import QuickLinks from 'src/components/quick-links/QuickLinks'

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
    <QuickLinks
      data={{
        block_section_title: 'Quick Liks',
        block_section_id: 'quick_link_1',
        quick_link_title: 'Module Title',
        quick_link_description:
          'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
        quick_link_colour: 'cypress_green',
        quick_link_layout: 'right',
        quick_links: [
          {
            quick_link_link_title: 'Link1',
            quick_link_url: 'https://presidio.gov/link1',
            quick_link_link_target: '',
            quick_link_link_discritpion:
              'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
          },
          {
            quick_link_link_title: 'Link2',
            quick_link_url: 'https://presidio.gov/link1',
            quick_link_link_target: '',
            quick_link_link_discritpion:
              'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
          },
          {
            quick_link_link_title: 'Link3',
            quick_link_url: 'https://presidio.gov/link1',
            quick_link_link_target: '',
            quick_link_link_discritpion:
              'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
          },
          {
            quick_link_link_title: 'Link4',
            quick_link_url: 'https://presidio.gov/link1',
            quick_link_link_target: '',
            quick_link_link_discritpion:
              'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
          },
          {
            quick_link_link_title: 'Link5',
            quick_link_url: 'https://presidiotunnel.com/link1',
            quick_link_link_target: '_blank',
            quick_link_link_discritpion:
              'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.ututut',
          },
        ],
      }}
    />
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
