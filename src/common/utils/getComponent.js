import Faq from 'src/components/faq/Faq'
import QuickLinks from 'src/components/quick-links/QuickLinks'
import ShortDescription from 'src/components/short-description/ShortDescription'

const MODULES = {
  QUICK_LINKS: 'quick_links',
  SHORT_DESCRIPTION: 'short_description',
  FAQ: 'faq',
}

Object.freeze(MODULES)

export function getComponent(acf_fc_layout) {
  switch (acf_fc_layout) {
    case MODULES.QUICK_LINKS:
      return ({ data }) => <QuickLinks key={data.section_id} data={data} />
    case MODULES.SHORT_DESCRIPTION:
      return ({ data }) => (
        <ShortDescription key={data.section_id} data={data} />
      )
    case MODULES.FAQ:
      return ({ data }) => <Faq key={data.section_id} data={data} />
    default:
      break
  }
  return null
}
